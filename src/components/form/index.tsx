import { SubmitHandler } from 'react-hook-form'

interface FormProps {
  children: React.ReactNode
  onSubmit: any
}

const Form = (props: FormProps) => {
  const { children, onSubmit } = props

  // const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return <form onSubmit={onSubmit}>{children}</form>
}

export default Form
