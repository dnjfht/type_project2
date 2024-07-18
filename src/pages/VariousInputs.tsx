import {ChangeEvent, useState} from 'react'

export default function VariousInputs() {
  const [text, setText] = useState<string>('hello')

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <p>VariousInputs</p>
      <p>{text}</p>

      <div>
        <input
          type="text"
          placeholder="enter some texts"
          onChange={onChangeText}
          value={text}
          // defaultValue="hello"
        />
        <input type="password" placeholder="enter your password" />
        <input type="email" placeholder="enter email address" />
        <input type="range" />
        <input type="button" value="I'm a button" />
        <input type="checkbox" value="I'm a checkbox" defaultChecked />
        <input type="radio" value="I'm a radio" defaultChecked />
        <input type="file" />
      </div>
    </div>
  )
}
