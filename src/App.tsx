function App() {
  const arr = [
    <li>
      <a href="http://www.google.com" target="_blank">
        <p>go to Google</p>
      </a>
    </li>,
    <li>
      <a href="http://www.facebook.com" target="_blank">
        <p>go to Facebook</p>
      </a>
    </li>,
    <li>
      <a href="http://www.twitter.com" target="_blank">
        <p>go to Twitter</p>
      </a>
    </li>
  ]

  return (
    <div>
      <ul>{arr}</ul>
    </div>
  )
}

export default App
