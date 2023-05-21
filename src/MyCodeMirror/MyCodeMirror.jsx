import React, { useRef } from 'react'
import Editor from '@monaco-editor/react';
import AceEditor from "react-ace";
import { Ref, useEffect } from 'react';

import './MyCodeMirror.css'
export default function MyCodeMirror({ language, onChange }) {
  console.log(language);

  return (

    <Editor height="90vh" width='600px' language={language} defaultValue="" onChange={onChange} theme='vs-dark' />
  )
}
