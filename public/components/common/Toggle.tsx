import "./Toggle.scss"

import React, { useState } from "react"
import { classSet } from "@fider/services"

interface ToggleProps {
  label?: string
  active: boolean
  disabled?: boolean
  onToggle?: (active: boolean) => void
}

export const Toggle: React.StatelessComponent<ToggleProps> = (props) => {
  const [active, setActive] = useState(props.active)

  const toggle = () => {
    if (props.disabled) {
      return
    }

    const newActive = !active
    setActive(newActive)
    if (props.onToggle) {
      props.onToggle(newActive)
    }
  }

  const className = classSet({
    "c-toggle": true,
    "cursor-pointer": !props.disabled,
    "cursor-not-allowed": props.disabled,
  })

  const labelClassName = classSet({
    "align-middle bg-gray-300 inline-block w-8 h-4 rounded-full": true,
    "cursor-pointer": !props.disabled,
    "cursor-not-allowed": props.disabled,
  })

  return (
    <span className={className} onClick={toggle}>
      <input className="hidden" type="checkbox" checked={active} readOnly={true} />
      <label className={labelClassName}>
        <span className="switch shadow-md absolute rounded-full bg-gray-100 w-3 h-3 ml-0.5 mt-0.5" />
      </label>
      <span className="ml-2 align-middle">{!!props.label && props.label}</span>
    </span>
  )
}
