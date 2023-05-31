import React, {
    useState,
    useRef,
    useEffect,
    useContext,
    useCallback
} from 'react';
import { Button, Table, Input, Select, Form, Grid, Message } from '@arco-design/web-react';
import { search_data, delete_data, update_data, add_data } from './TextDataGet'
const Row = Grid.Row
const Col = Grid.Col
const user_id = localStorage.getItem('userId') - 0
// console.log(user_id);
const FormItem = Form.Item;
const InputSearch = Input.Search;
const EditableContext = React.createContext({});

function EditableRow(props) {
    const { children, record, className, ...rest } = props;
    const refForm = useRef(null);

    const getForm = () => refForm.current;

    return (
        <EditableContext.Provider
            value={{
                getForm
            }}
        >
            <Form
                style={{
                    display: 'table-row'
                }}
                children={children}
                ref={refForm}
                wrapper='tr'
                wrapperProps={rest}
                className={`${className} editable-row`}
            />
        </EditableContext.Provider>
    );
}

function EditableCell(props) {
    const { children, className, rowData, column, onHandleSave } = props;
    const ref = useRef(null);
    const refInput = useRef(null);
    const { getForm } = useContext(EditableContext);
    const [editing, setEditing] = useState(false);
    const handleClick = useCallback(
        e => {
            if (
                editing &&
                column.editable &&
                ref.current &&
                !ref.current.contains(e.target) &&
                !e.target.classList.contains('js-demo-select-option')
            ) {
                cellValueChangeHandler(rowData[column.dataIndex]);
            }
        },
        [editing, rowData, column]
    );
    useEffect(() => {
        editing && refInput.current && refInput.current.focus();
    }, [editing]);
    useEffect(() => {
        document.addEventListener('click', handleClick, true);
        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [handleClick]);

    const cellValueChangeHandler = value => {
        if (column.dataIndex === 'salary') {
            const values = {
                [column.dataIndex]: value
            };
            onHandleSave && onHandleSave({ ...rowData, ...values });
            setTimeout(() => setEditing(!editing), 300);
        } else {
            const form = getForm();
            form.validate([column.dataIndex], (errors, values) => {
                if (!errors || !errors[column.dataIndex]) {
                    setEditing(!editing);
                    onHandleSave && onHandleSave({ ...rowData, ...values });
                }
            });
        }
    };

    if (editing) {
        return (
            <div ref={ref}>

                <FormItem
                    style={{
                        marginBottom: 0
                    }}
                    labelCol={{
                        span: 0
                    }}
                    wrapperCol={{
                        span: 24
                    }}
                    initialValue={rowData[column.dataIndex]}
                    field={column.dataIndex}
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input ref={refInput} onPressEnter={cellValueChangeHandler} />
                </FormItem>

            </div>
        );
    }

    return (
        <div
            className={column.editable ? `editable-cell ${className}` : className}
            onClick={() => column.editable && setEditing(!editing)}
        >
            {children}
        </div>
    );
}

function EditableTable({ p_id }) {

    const [testId, setTestId] = useState(44)
    const url_get = `http://47.108.221.20:2333/test/search`
    const url_add = 'http://47.108.221.20:2333/test/add'
    const url_update = `http://47.108.221.20:2333/test/update`
    const url_del = `http://47.108.221.20:2333/test/delete`
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const columns = [
        {
            title: '问题题号',
            dataIndex: 'problem_id',

        },
        {
            title: '输入',
            dataIndex: 'input',
            editable: true
        },
        {
            title: '输出',
            dataIndex: 'output',
            editable: true
        },
        {
            title: 'Operation',
            dataIndex: 'op',
            render: (_, record) => (
                <Button
                    onClick={() => removeRow(record.test_id, record.key)}
                    type='primary'
                    status='danger'
                >
                    Delete
                </Button>
            )
        }
    ];
    useEffect(() => {
        getRow(p_id)
    }, [p_id])
    function handleSave(row) {
        const newData = [...data];
        const index = newData.findIndex(item => row.key === item.key);
        newData.splice(index, 1, { ...newData[index], ...row });
        const body = { ...newData[index], problem_id: newData[index].problem_id - 0 }

        delete body.key
        const url = url_update + '/' + body.test_id
        delete body.test_id
        console.log(body);
        update_data(url, body)
        setData(newData);
    }

    function removeRow(id, key) {
        setData(data.filter(item => item.key !== key));
        const url = url_del + '/' + id;
        delete_data(url)
    }
    async function getRow(problem_id) {
        try {
            const url = url_get + '/' + problem_id;
            const data = await search_data(url);
            console.log(data);

            if (!data || data.length === 0) {
                Message.error("No data");
                setData([])
            }

            const newData = data.map((item) => ({
                ...item,
                'key': data.findIndex(x => x === item)
            }));
            setData(newData);
        } catch (error) {
            console.error("An error occurred while getting the row:", error);
            // Handle the error or display an appropriate message to the user
        }
    }
    async function addRow(problem_id) {

        setCount(count + 1);

        const test_id = await add_data(url_add, {
            problem_id: problem_id,
            user_id: user_id,
            input: '请自己修改',
            output: '请自己修改'
        })

        setData(
            data.concat({
                key: `${count + 1}`,
                problem_id: problem_id,
                test_id: test_id,
                input: '请自己修改',
                output: '请自己修改',
                user_id: user_id
            })
        );
        setTestId(testId + 1)
    }
    console.log(data);
    return (
        <>
            <Row>
                <Col span={12}>
                    <Button
                        style={{
                            marginBottom: 10
                        }}
                        type='primary'
                        onClick={() => {
                            addRow(p_id)
                        }}
                    >
                        添加测试数据
                    </Button>
                </Col>

            </Row>


            <Table
                data={data}
                components={{
                    body: {
                        row: EditableRow,
                        cell: EditableCell
                    }
                }}
                columns={columns.map(column =>
                    column.editable
                        ? {
                            ...column,
                            onCell: () => ({
                                onHandleSave: handleSave
                            })
                        }
                        : column
                )}
                className='table-demo-editable-cell'
            />
        </>
    );
}

export default EditableTable;

