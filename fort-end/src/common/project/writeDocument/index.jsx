import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Button } from 'antd';
import { SnippetsOutlined, CheckOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
// import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

export default () => {
  const [editor, setEditor] = useState(null)
  const [sendEditor, setSendEditor] = useState(false)
  // 编辑器内容
  const [html, setHtml] = useState('')
  // 工具栏配置
  const toolbarConfig = {}

  // 编辑器配置
  const editorConfig = {
    placeholder: '请输入内容...',
  }
  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])
  const sendhand = () => {
    setTimeout(() => {
      console.log(editor.getHtml())
      setSendEditor(true)
    } , 1000)
  }
  useEffect(() => {
    setSendEditor(false)
  } , [html])
  return (
    <div>
     <Button type="primary" icon={sendEditor ? <CheckOutlined /> : <SnippetsOutlined />} onClick={sendhand}/>
      <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={editor => setHtml(editor.getHtml())}
          mode="default"
          style={{ height: '500px', overflowY: 'hidden' }}
        />
      </div>
    </div>
  )
}
