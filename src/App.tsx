export default function App() {
  // const texts = [<p key="1">hello</p>, <p key="2">world!</p>]

  const texts = ['hello', 'world', 'ok?', "I'm very happy"].map((text, index) => (
    <p key={index}>{text}</p>
  ))
  return <div>{texts}</div>
}
