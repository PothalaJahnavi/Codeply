import './App.css';
import Editor from './Editor';
import { useState,useEffect } from 'react';
function App() {
  const [html,setHtml]=useState()
  const [css,setCss]=useState()
  const [javascript,setJavascript]=useState()
  const [srcDoc,setSrcDoc]=useState()

  useEffect(
    ()=>{
     setTimeout(()=>{
      setSrcDoc(`<html>${html}</html>
      <style>${css}</style>
      <script>${javascript}</script>`)
     },250)
    },[html,css,javascript]
  )

  
   console.log(html,css,javascript)
  return (
    <div className="App">
      <div className='heading'><h1 style={{color:"black",textAlign:"center"}}>EDITOR</h1>
</div>
      <div className='pane sandbox'>
      <Editor title="HTML" 
      language="html"
      value={html}
      onChange={setHtml}
      />
      <Editor title="CSS" 
      language="css"
      value={css}
      onChange={setCss}
      />
      <Editor title="JAVASCRIPT" 
      language="javascript"
      value={javascript}
      onChange={setJavascript}
      />
      </div>
      <h1 style={{color:"black",textAlign:"center"}}>Output</h1>

      <div className='pane output'>
       <iframe 
       srcDoc={srcDoc}
       title='output'
       sandbox='allow-scripts'
       width='100%'
       height='100%'
       frameBorder="0"
       />
      </div>

    </div>
  );
}

export default App;
