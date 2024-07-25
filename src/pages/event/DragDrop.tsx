import {DragEvent} from 'react'

export default function DragDrop() {
  const onDragStart = (e: DragEvent<HTMLElement>) => {
    console.log('OnDragStart', e.dataTransfer)
  }

  const onDragEnd = (e: DragEvent<HTMLElement>) => {
    console.log('OnDragEnd', e.dataTransfer)
  }

  const onDragOver = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    console.log('OnDragOver', e.dataTransfer)
  }

  const onDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    console.log('OnDrop', e.dataTransfer)
  }

  return (
    <div>
      <p>DragDrop</p>

      <div draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
        <h1>Drag Me</h1>
      </div>

      <div draggable onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drag over Me</h1>
      </div>
    </div>
  )
}
