import React, {
    useState,
    useRef,
    useEffect,
    useContext,
    useCallback
} from 'react';
import { Button, Table, Input, Select, Form, Message } from '@arco-design/web-react';
import UpdataPro from './UpdatePro';
// const FormItem = Form.Item;
// const EditableContext = React.createContext({});

// function EditableRow(props) {
//     const { children, record, className, ...rest } = props;
//     const refForm = useRef(null);

//     const getForm = () => refForm.current;

//     return (
//         <EditableContext.Provider
//             value={{
//                 getForm
//             }}
//         >
//             <Form
//                 style={{
//                     display: 'table-row'
//                 }}
//                 children={children}
//                 ref={refForm}
//                 wrapper='tr'
//                 wrapperProps={rest}
//                 className={`${className} editable-row`}
//             />
//         </EditableContext.Provider>
//     );
// }

// function EditableCell(props) {
//     const { children, className, rowData, column, onHandleSave } = props;
//     const ref = useRef(null);
//     const refInput = useRef(null);
//     const { getForm } = useContext(EditableContext);
//     const [editing, setEditing] = useState(false);
//     const handleClick = useCallback(
//         e => {
//             if (
//                 editing &&
//                 column.editable &&
//                 ref.current &&
//                 !ref.current.contains(e.target) &&
//                 !e.target.classList.contains('js-demo-select-option')
//             ) {
//                 cellValueChangeHandler(rowData[column.dataIndex]);
//             }
//         },
//         [editing, rowData, column]
//     );
//     useEffect(() => {
//         editing && refInput.current && refInput.current.focus();
//     }, [editing]);
//     useEffect(() => {
//         document.addEventListener('click', handleClick, true);
//         return () => {
//             document.removeEventListener('click', handleClick, true);
//         };
//     }, [handleClick]);

//     const cellValueChangeHandler = value => {
//         if (column.dataIndex === 'salary') {
//             const values = {
//                 [column.dataIndex]: value
//             };
//             onHandleSave && onHandleSave({ ...rowData, ...values });
//             setTimeout(() => setEditing(!editing), 300);
//         } else {
//             const form = getForm();
//             form.validate([column.dataIndex], (errors, values) => {
//                 if (!errors || !errors[column.dataIndex]) {
//                     setEditing(!editing);
//                     onHandleSave && onHandleSave({ ...rowData, ...values });
//                 }
//             });
//         }
//     };

//     if (editing) {
//         return (
//             <div ref={ref}>
//                 {column.dataIndex === 'salary' ? (
//                     <Select
//                         onChange={cellValueChangeHandler}
//                         defaultValue={rowData[column.dataIndex]}
//                         options={[2000, 5000, 10000, 20000]}
//                     />
//                 ) : (
//                     <FormItem
//                         style={{
//                             marginBottom: 0
//                         }}
//                         labelCol={{
//                             span: 0
//                         }}
//                         wrapperCol={{
//                             span: 24
//                         }}
//                         initialValue={rowData[column.dataIndex]}
//                         field={column.dataIndex}
//                         rules={[
//                             {
//                                 required: true
//                             }
//                         ]}
//                     >
//                         <Input ref={refInput} onPressEnter={cellValueChangeHandler} />
//                     </FormItem>
//                 )}
//             </div>
//         );
//     }

//     return (
//         <div
//             className={column.editable ? `editable-cell ${className}` : className}
//             onClick={() => column.editable && setEditing(!editing)}
//         >
//             {children}
//         </div>
//     );
// }
const url = `http://47.108.221.20:2333/problem/search`
async function getMyPro(id, url) {
    const data = await (
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: id
            }),
        })
    ).json();
    if (data.status === 10000) {
        Message.error('用户无数据')
        return []
    }
    return data.data
}
function MyProTable({ id }) {
    const [data, setData] = useState([])
    const [isEdit, setIsEdit] = useState(false)

    const user_id = id - 0
    console.log(user_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const fetchData = async () => {
            let count = 0
            try {
                const oldData = await getMyPro(user_id, url);
                const newData = oldData.map(item => ({
                    ...item,
                    key: count++
                }));
                setData(newData);
                console.log(newData);
            } catch (error) {
                // 错误处理逻辑
                console.error("发生错误:", error);
            }
        };

        fetchData();
    }, []);
    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
        },
        {
            title: '题号',
            dataIndex: 'problem_id',
        },
        {
            title: '删除',
            dataIndex: 'delete',
            render: (_, record) => (
                <Button
                    onClick={() => removeRow(record.key, record.problem_id)}
                    type='primary'
                    status='danger'
                >
                    Delete
                </Button>
            )
        },
        {
            title: '编辑',
            dataIndex: 'edit',
            render: (_, record) => (
                <Button
                    onClick={() => {
                        console.log(record)
                        setIsEdit(record)
                    }}
                    type='primary'
                >
                    编辑
                </Button>
            )
        }
    ];
    async function delete_data(url) {
        const data = await (
            await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
        ).json();
        console.log(data);
        return data;
    }
    async function removeRow(key, id) {
        setData(data.filter(item => item.key !== key));
        const res = await delete_data(`http://47.108.221.20:2333/problem/delete/${id}`)
        console.log(res);
        if (res.status === 200) {
            Message.success('删除成功')
        } else {
            Message.error('删除失败')
        }
    }



    return (
        <>
            {!isEdit ? (
                <Table
                    data={data}
                    columns={columns}
                    className='table-demo-editable-cell'
                />
            ) : (
                <UpdataPro data={isEdit}></UpdataPro>
            )}
        </>
    );
}

export default MyProTable;