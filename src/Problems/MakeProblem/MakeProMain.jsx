import React, { useState } from 'react';
import {
    Button,
    Message,
    Typography,
    Grid,
    Input,
    Select
} from '@arco-design/web-react';

const { TextArea } = Input;
const { Row, Col } = Grid;
const { Option } = Select;
const options = ['极易', '容易', '中等', '困难', '极难'];

export default function MPP({ admId }) {
    const id = admId - 0
    const [formData, setFormData] = useState({
        user_id: id,
        title: '',
        description: '',
        description_input: '',
        description_output: '',
        sample_input: '',
        sample_output: '',
        level: ''
    });

    const url = 'http://47.108.221.20:2333/problem/add';

    const handleSubmit = async () => {
        console.log(formData);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log(data);

            if (data.status === 200) {
                Message.success('题目上传成功')
            } else {
                Message.error('题目上传失败')
            }
            // Process the response data as needed
        } catch (error) {
            Message.error('题目发送失败')
        }
    };

    const handleInputChange = (name, value) => {

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value

        }));
        console.log(formData);
    };

    return (
        <>
            <Row style={{ marginBottom: 16, textAlign: 'start' }}>
                <Typography.Title style={{ margin: 0, color: '#3a3f63' }} heading={2}>
                    发布题目
                </Typography.Title>
            </Row>

            <Row style={{ marginBottom: 16, textAlign: 'start', color: '#707070' }} gutter={24}>
                <Col span={2}>用户ID</Col>
                <Col span={2}>{admId}</Col>
            </Row>

            <Row style={{ marginBottom: 16, textAlign: 'start', color: '#707070' }} gutter={24}>
                <Col span={12}>
                    题目标题
                    <TextArea
                        placeholder="题目标题"
                        style={{ marginLeft: 36, minHeight: 128, resize: 'none', width: 350 }}
                        onChange={(ev, e) => handleInputChange('title', ev)}
                    />
                </Col>
                <Col span={12}>
                    题目描述
                    <TextArea
                        placeholder="题目描述"
                        style={{ marginLeft: 36, minHeight: 128, resize: 'none', width: 350 }}
                        onChange={(ev, e) => handleInputChange('description', ev)}
                    />
                </Col>
            </Row>

            <Row style={{ marginBottom: 16, textAlign: 'start', color: '#707070' }} gutter={24}>
                <Col span={12}>
                    输入描述
                    <TextArea
                        placeholder="输入描述"
                        style={{ marginLeft: 36, minHeight: 128, resize: 'none', width: 350 }}
                        onChange={(ev, e) => handleInputChange('description_input', ev)}
                    />
                </Col>
                <Col span={12}>
                    输出描述
                    <TextArea
                        placeholder="输出描述"
                        style={{ marginLeft: 36, minHeight: 128, resize: 'none', width: 350 }}
                        onChange={(ev, e) => handleInputChange('description_output', ev)}
                    />
                </Col>
            </Row>

            <Row style={{ marginBottom: 16, textAlign: 'start', color: '#707070' }} gutter={24}>
                <Col span={12}>
                    输入样例
                    <TextArea
                        placeholder="输入样例"
                        style={{ marginLeft: 36, minHeight: 128, resize: 'none', width: 350 }}
                        onChange={(ev, e) => handleInputChange('sample_input', ev)}
                    />
                </Col>
                <Col span={12}>
                    输出样例
                    <TextArea
                        placeholder="输出样例"
                        style={{ marginLeft: 36, minHeight: 128, resize: 'none', width: 350 }}
                        onChange={(ev, e) => handleInputChange('sample_output', ev)}
                    />
                </Col>
            </Row>

            <Row style={{ marginBottom: 16, textAlign: 'start', color: '#707070' }} justify="space-between">
                <Col span={14}>
                    难度选择
                    <Select
                        placeholder="难度选择"
                        style={{ width: 160, marginLeft: 36 }}
                        onChange={(value, e) => handleInputChange('level', value)}
                    >
                        {options.map((option, index) => (
                            <Option key={option} value={option}>
                                {option}
                            </Option>
                        ))}
                    </Select>
                </Col>
                <Col span={8}>
                    <Button
                        style={{ borderRadius: 10, width: 100, height: 50, fontSize: 24 }}
                        type="primary"
                        onClick={handleSubmit}
                    >
                        发布
                    </Button>
                </Col>
            </Row>
        </>
    );
}