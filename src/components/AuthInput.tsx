import { ChangeEventHandler, useState } from "react"
import "./AuthInput.scss"

export type Props = {
  displayName: string,
  name: string,
  handleChange: ChangeEventHandler,
  value: string,
  pattern: string | undefined,
  type: string,
  errorMessage: string | undefined,
  last: string | undefined,
}

function AuthInput(props: Props) {
  const [beenFocused, setBeenFocused] = useState(false)

  const handleBlur = () => {
    setBeenFocused(true)
  }

  const handleFocus = () => {
    if (props.name === props.last) {
      setBeenFocused(true)
    }
  }

  return(
    <div className="AuthInput">
      <label>{props.displayName}</label>
      <input
        required
        className={beenFocused ? "beenFocused" : ""}
        onChange={props.handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={props.value}
        pattern={props.pattern}
        type={props.type}
        name={props.name}
        id={props.name}
      />
      { beenFocused && props.errorMessage && <span>{props.errorMessage}</span> }
    </div>
  )
}

export default AuthInput
