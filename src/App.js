import './App.css';
import axios from "axios"
import React, {useState,useEffect} from "react"
import Output from "./components/Output"
import Select from "./components/Select"
import Text from "./components/Text"

function App() {
  const [paras, setParas] = useState(2);
  const [sentences, setSentences] = useState(4);
  const [wrap, setWrap] = useState(true);
  const [text,setText] = useState('');

  useEffect(() => {
    getSampleText()
  }, [wrap,sentences,paras])

  const getSampleText = () =>{
    
    axios.get(`http://metaphorpsum.com/paragraphs/${paras}/${sentences + ((wrap===true)?"?p=true":"")}`)
      .then(response=>setText(response.data))
      .catch(err => console.log(err))
  }

  return (
    <div >
      <h1 className="heading">Text Generator</h1>
      <Text paras={paras} setParas={setParas} sentences={sentences} setSentences={setSentences}/>
      <span style={{textAlign:"center",margin:"auto",display:"block"}}>HTML Wrap:</span> <Select wrap={wrap} setWrap={setWrap}/>
      <Output data={text}/>

    </div>
  );
}

export default App;
