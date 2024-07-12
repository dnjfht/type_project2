import {FC, PropsWithChildren} from 'react'

// PropsWithChildren을 사용하면 props에 children을 추가하는 번거로움을 덜 수 있음.
export type PProps = {}

// {...props} => props에 담긴 다양한 속성을 마치 전개 연산자처럼 한꺼번에 전달.
const P: FC<PropsWithChildren<PProps>> = (props): JSX.Element => {
  return <p {...props} />
}

export default P
