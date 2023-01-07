import { ChangeEvent, useState } from "react"
import AuthInput from "../components/AuthInput"
import { Props as AuthProps } from "../components/AuthInput"

import "./Register.scss"

function Register() {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    confirmPasword: ""
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
      pattern: "[a-zA-Z0-9]{3,}",
      errorMessage: "username should contain at least 3 characters",
      last: "confirmPasword"
    },
    {
      displayName: "password",
      name: "password",
      type: "password",
      value: userInput.password,
      handleChange,
      pattern: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{14,}$`,
      errorMessage: "password should have at least 1 number, 1 uppercase and 1 lowercase letter and be 14 characters long",
      last: "confirmPasword"
    },
    {
      displayName: "confirm password",
      name: "confirmPasword",
      type: "password",
      value: userInput.confirmPasword,
      handleChange,
      pattern: userInput.password,
      errorMessage: "passowrd don't match",
      last: "confirmPasword"
    },
  ]
  return(
  <div className="Register">
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>
      { inputs.map((input) => {
        return(
          <AuthInput {...input} />
        )
      })}

      <button type="submit">Register</button>
    </form>
  </div>
  )
}

export default Register
