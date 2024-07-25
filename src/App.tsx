// import DispatchEvent from './pages/event/DispatchEvent'
import DragDrop from './pages/event/DragDrop'
import EventBubbling from './pages/event/EventBubbling'
// import EventListener from './pages/event/EventListener'
import FileDrop from './pages/event/FileDrop'
import FileInput from './pages/event/FileInput'
import OnChange from './pages/event/OnChange'
// import OnClick from './pages/event/OnClick'
// import ReactOnClick from './pages/event/ReactOnClick'
import StopPropagation from './pages/event/StopPropagation'
import VariousInputs from './pages/event/VariousInputs'
import BootStrap from './pages/style/BootStrap'
import Icon from './pages/style/Icon'
import Style from './pages/style/Style'
import UsingIcon from './pages/style/UsingIcon'
import UsingIconWithCSSClass from './pages/style/UsingIconWithCSSClass'

const App = (): JSX.Element => {
  // window.addEventListener('click', (e: Event) => console.log('mouse click occurs.'))

  // document.getElementById('root')?.addEventListener('click', (e: Event) => {
  //   const {isTrusted, target, bubbles} = e
  //   console.log('mouse click occurs.', isTrusted, target, bubbles)
  // })

  return (
    <div>
      {/*<FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      <DispatchEvent />
      <ReactOnClick />
      <OnClick />
      <EventListener /> */}

      <UsingIconWithCSSClass />
      <UsingIcon />
      <Style />
      <Icon />
      <BootStrap />
    </div>
  )
}

export default App
