import React, { useState } from 'react'
import { Tabs, Modal , Form , Input} from 'antd';
export default (props) => {
    const { chatlist, setChatlist, setMessageKey } = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const onEdit = (targetKey, action: 'add' | 'remove') => {
        if (action === 'add') {
            setIsModalOpen(true)
        }
    };
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form
        .validateFields()
        .then(values => {
          form.resetFields();
          setChatlist([...chatlist , values.chatname || '新聊天'])
        })
        .catch(info => {
          console.log('Validate Failed:', info);
        });
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Tabs
                style={{ height: '100%', width: '100%' }}
                tabPosition={'left'}
                type="editable-card"
                items={
                    chatlist?.map((item, index) => {
                        return {
                            label: item,
                            key: index,
                            closable: false,
                        }
                    })
                }
                onEdit={onEdit}
                onTabClick={(key) => setMessageKey(key)}
            />
            <Modal title="新增聊天" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                    style={{ flexGrow: 1, marginRight: 10 }}
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete="off"
                >
                    <Form.Item
                       label="name"
                        name="chatname"
                        rules={[{ required: true, message: '请输入名称!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
