import React from 'react'
import { Button, Modal } from 'antd';

export default (props) => {
    const modalTitle = {
        'add' : '新增任务',
        'edit' : '编辑任务'
    }
    const {isModalOpen , setIsModalOpen , modaltype} = props
    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }
  return (
    <div>
      <Modal title={modalTitle[modaltype]} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        基本配置项
      </Modal>
    </div>
  )
}
