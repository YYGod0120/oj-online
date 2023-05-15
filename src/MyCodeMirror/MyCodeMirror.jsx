import React, { useRef } from 'react'
import Editor from '@monaco-editor/react';
import AceEditor from "react-ace";
import { Ref, useEffect } from 'react';

import './MyCodeMirror.css'
export default function MyCodeMirror({ language }) {
  console.log(language);
  // var editor = monaco.editor.create(document.getElementById("container"), {
  //   value: "// First line\nfunction hello() {\n\talert('Hello world!');\n}\n// Last line",
  //   language: "javascript",

  //   lineNumbers: "off",
  //   roundedSelection: false,
  //   scrollBeyondLastLine: false,
  //   readOnly: false,
  //   theme: "vs-dark",
  // });
  // setTimeout(function () {
  //   editor.updateOptions({
  //     lineNumbers: "on",
  //   });
  // }, 2000);
  return (
    // <AceEditor
    //   mode={{ language }}
    //   theme='monokai'
    //   fontSize={16}
    //   showPrintMargin={false}
    //   highlightActiveLine={true}
    //   name="UNIQUE_ID_OF_DIV"
    //   style={{ width: '700px', height: '600px' }}
    // />
    <Editor height="90vh" width='600px' language={language} defaultValue="" theme='vs-dark' />
  )
}
