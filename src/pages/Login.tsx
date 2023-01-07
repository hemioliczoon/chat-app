import { ChangeEvent, useState } from "react"
import AuthInput from "../components/AuthInput"
import { Props as AuthProps } from "../components/AuthInput"

import "./Login.scss"

function Login() {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "" 
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget as HTMLInputElement

    setUserInput(prev => { return { ...prev, [target.name]: target.value}})
  }

  const handleSubmit = () => {
    // todo: send to the server
  }

  const inputs: AuthProps[] = [
    {
      displayName: "username",
      name: "username",
      type: "text",
      value: userInput.username,
      handleChange,
      pattern: undefined,
      errorMessage: undefined,
      last: undefined,
    },
    {
      displayName: "password",
      name: "password",
      type: "password",
      value: userInput.password,
      handleChange,
      pattern: undefined,
      errorMessage: undefined,
      last: undefined,
    },
  ]
  return(
  <div className="Login">
    <form onSubmit={handleSubmit}>
    <h3>Login</h3>
      { inputs.map((input) => {
        return(
          <AuthInput {...input} />
        )
      })}

      <button type="submit">Login</button>
    </form>
  </div>
  )
}

export default Login
