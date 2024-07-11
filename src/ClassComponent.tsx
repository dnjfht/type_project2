import {Component} from 'react'

type ClassComponentProps = {
  href: string
  text: string
}

export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    // const href = this.props.href
    // const text = this.props.text

    // 비구조화 할당 구문(구조분해 할당)을 통하여 좀 더 간략하게 코드 작성.
    const {href, text} = this.props

    return (
      <li>
        <a href={href} />
        <p>{text}</p>
      </li>
    )
  }
}
