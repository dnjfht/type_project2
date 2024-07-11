import {Component} from 'react'
import ClassComponent from './ClassComponent'

export default class App extends Component {
  render() {
    // const isLoading = true
    // if (isLoading) return <p>loading...</p>

    // 컴포넌트 개념을 도입하면 render 메서드에 JSX 구문 뿐만 아니라 다양한 로직을 JS, TS와 함께 구현할 수 있다.

    // 방법 2. 단축평가
    // const children = (
    //  <li>
    //    <a href="http://www.google.com">
    //      <p>go to Google</p>
    //    </a>
    //  </li>
    // )

    // return (
    //   <div>
    //     {isLoading && <p>loading...</p>}
    //     {!isLoading && <ul>{children}</ul>}
    //   </div>
    //)

    // 방법 3. isLoading 값에 따라 분기하는 JSX문 두 개를 children과 같은 변수에 담아준다.
    // const children = isLoading ? (
    //  <p>loading...<p>
    // ) : (
    // <ul>
    //   <li>
    //     <a href="http://www.google.com">
    //       <p>go to Google</p>
    //     </a>
    //   </li>
    // </ul>
    // )

    // return <div>{children}</div>

    return (
      <ul>
        <ClassComponent />
        <ClassComponent />
      </ul>
    )
  }
}
