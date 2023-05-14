import React from 'react'
import MonacoEditor from 'react-monaco-editor';
import './MyCodeMirror.css'
export default function MyCodeMirror() {
  const options = {
    selectOnLineNumbers: true
  };
  const language = [

  ]
  return (
    <MonacoEditor
      width="600"
      height="600"
      language={`javascript`}
      theme="vs-dark"
      value={'code'}
      options={options}
    />
  )
}
