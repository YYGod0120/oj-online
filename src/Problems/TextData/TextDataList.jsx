import React, {
    useState,
    useRef,
    useEffect,
    useContext,
    useCallback
} from 'react';
import { Button, Table, Input, Select, Form, Grid, Message } from '@arco-design/web-react';
import { search_data } from './TextDataGet'
const Row = Grid.Row
const Col = Grid.Col


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

function EditableTable() {
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
            editable: true
        },
        {
            title: '测试数据编号',
            dataIndex: 'test_id',
            editable: true

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
                    onClick={() => removeRow(record.key)}
                    type='primary'
                    status='danger'
                >
                    Delete
                </Button>
            )
        }
    ];

    function handleSave(row) {
        const newData = [...data];
        const index = newData.findIndex(item => row.key === item.key);
        newData.splice(index, 1, { ...newData[index], ...row });
        setData(newData);
    }

    function removeRow(key) {
        setData(data.filter(item => item.key !== key));
    }
    async function getRow(id) {
        try {
            const url = url_get + '/' + id;
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
    function addRow() {
        setCount(count + 1);
        setData(
            data.concat({
                key: `${count + 1}`,
                problem_id: 0,
                text_id: 0,
                input: '',
                output: ''
            })
        );
    }

    return (
        <>
            <Row>
                <Col span={12}>
                    <Button
                        style={{
                            marginBottom: 10
                        }}
                        type='primary'
                        onClick={addRow}
                    >
                        添加测试数据
                    </Button>
                </Col>
                <Col span={12}>
                    <InputSearch
                        searchButton='查找'
                        defaultValue=''
                        placeholder='输入数据编号'
                        style={{ width: 230, marginLeft: 100 }}
                        onSearch={(v) => {
                            getRow(v)
                        }}
                    />
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

