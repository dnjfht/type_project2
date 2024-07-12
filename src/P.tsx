import {FC, ReactNode} from 'react'

export type PProps = {
  children?: ReactNode
}

const P: FC<PProps> = (props): JSX.Element => {
  const {children} = props

  return (
    <div>
      <p>{children}</p>
      <p>야호!</p>
    </div>
  )
}

export default P
