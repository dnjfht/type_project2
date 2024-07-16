import P from './P'
import DispatchEvent from './pages/DispatchEvent'
import DragDrop from './pages/DragDrop'
import EventBubbling from './pages/EventBubbling'
import EventListener from './pages/EventListener'
import FileDrop from './pages/FileDrop'
import FileInput from './pages/FileInput'
import OnChange from './pages/OnChange'
import OnClick from './pages/OnClick'
import ReactOnClick from './pages/ReactOnClick'
import StopPropagation from './pages/StopPropagation'
import VariousInputs from './pages/VariousInputs'

const App = (): JSX.Element => {
  // window.addEventListener('click', (e: Event) => console.log('mouse click occurs.'))

  // document.getElementById('root')?.addEventListener('click', (e: Event) => {
  //   const {isTrusted, target, bubbles} = e
  //   console.log('mouse click occurs.', isTrusted, target, bubbles)
  // })

  return (
    <div>
      <FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      {/* <DispatchEvent />
      <ReactOnClick />
      <OnClick />
      <EventListener /> */}
    </div>
  )
}

export default App
