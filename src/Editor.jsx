import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { xcodeLight, xcodeLightInit, xcodeDark, xcodeDarkInit } from '@uiw/codemirror-theme-xcode';
import './Editor.css'
const Editor = (props) => {
  const{
    title,
    language,
    value,onChange
  }=props
  
return (
    <div className='edit-interface'>
      <div className="title">
        <h2>{title}</h2>
        {/* <button style={{textAlign:"right"}} onClick={()=>setOpen(!open)}>open</button> */}
      </div>
      <div className="main">
      <CodeMirror
      value={value}
      height="50vh"
      theme={xcodeLightInit({
        settings: {
          caret: '#c6c6c6',
          fontFamily: 'monospace',
        }
      })}      
      mode={language}
      // extensions={extensions}
      onChange={(editor,change)=>{
        onChange(editor)
      }}
    />
      </div>
    </div>
  )
}

export default Editor
