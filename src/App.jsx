import React, { useState } from 'react'

const emojiDictionary={
  happy: "😄",
  love: "❤️",
  angry: "😡",
  hello: "👋",
  fire: "🔥",
  sad: "😢",
  cool: "😎",
  wow: "😲",
  sleep: "😴",
  ok: "👌"
}

const App = () => {
  
  const [input, setInput] = useState("")
  const [translated, setTranslated] = useState("")

  const handleChange=(e)=>{
    const text = e.target.value.toLowerCase();
    setInput(text);

    const words=text.split(" ");
    const result=words.map((word)=>emojiDictionary[word] || word).join(" ");
    setTranslated(result);
  }
  return (
    <div className='App'>
    <h1>😊 Emoji Translator</h1>
    <input className='input' type="text" placeholder='Type : Happy, Love, Fire, Angry' value={input} onChange={handleChange}/>
    <p>{translated}</p>
    </div>
  )
}

export default App