import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Error = ({ children }: Props) => {
  return (
    <p className="text-red-600 font-bold pt-2">{children}</p>
  )
}

export default Error