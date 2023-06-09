import React from 'react'
import { Modal, Form, Input } from 'antd';

export default (props) => {
  const [form] = Form.useForm();
  const modalTitle = {
    'add': '新增任务',
    'edit': '编辑任务'
  }
  const { isModalOpen, setIsModalOpen, modaltype } = props
  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        console.log(values)
        form.resetFields();
        setIsModalOpen(false)
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <div>
      <Modal title={modalTitle[modaltype]} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          autoComplete="off"
        >
          <Form.Item
            label="项目名称"
            name="ptname"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="负责人"
            name="principal"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="原型地址"
            name="prototypeurl"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="状态"
            name="ptstatus"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="开始时间"
            name="startTime"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="结束时间"
            name="endTime"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
