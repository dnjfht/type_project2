import P from './P'

export default function App() {
  const texts = ['hello', 'world', 'ok?', "I'm very happy"].map((text, index) => (
    <P key={index} children={text} />
  ))
  return <div children={texts} />
}
