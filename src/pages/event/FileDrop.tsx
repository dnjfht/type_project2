import {DragEvent} from 'react'

export default function FileDrop() {
  const onDragOver = (e: DragEvent) => {
    e.preventDefault()

    console.log('dragOVer', e.dataTransfer)
  }

  const onDrop = (e: DragEvent) => {
    e.preventDefault()

    const files = e.dataTransfer?.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i) // or file = files[i]
        console.log(`file[${i}] drop!`, file)
      }
    }
  }

  return (
    <div>
      <p>FileDrop</p>

      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop image files over Me!</h1>
      </div>
    </div>
  )
}
