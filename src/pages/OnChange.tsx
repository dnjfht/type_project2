import {ChangeEvent} from 'react'

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()

    console.log('onChangeValue', e.target.value)
  }

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()

    console.log('onChangeValue', e.target.checked)
  }

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()

    console.log('onChangeValue', e.target.files)
  }

  return (
    <div>
      <p>OnChange</p>

      <input
        type="text"
        onChange={onChangeValue}
        placeholder="type some text"
        defaultValue="hello"
      />
      <input
        type="checkbox"
        onChange={onChangeChecked}
        placeholder="type some text"
        defaultChecked
      />
      <input type="file" onChange={onChangeFiles} multiple accept="images/*" />
    </div>
  )
}