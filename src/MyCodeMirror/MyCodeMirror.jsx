import React from 'react'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import './MyCodeMirror.css'
export default function MyCodeMirror({ language }) {


  return (
    <AceEditor
      mode={{ language }}
      theme='monokai'
      fontSize={16}
      showPrintMargin={false}
      name="UNIQUE_ID_OF_DIV"
      style={{ width: '700px', height: '600px' }}
    />
  )
}
