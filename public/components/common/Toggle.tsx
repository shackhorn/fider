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
    "c-toggle relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full transition-colors ease-in-out duration-200": true,
    "bg-gray-200": !active,
    "bg-green-500": active,
    "cursor-pointer": !props.disabled,
    "cursor-not-allowed": props.disabled,
  })

  const switchClassName = classSet({
    " pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200": true,
    "translate-x-0": !active,
    "translate-x-5": active,
  })

  return (
    <div className="flex items-center">
      <button onClick={toggle} type="button" className={className}>
        <span aria-hidden="true" className={switchClassName}></span>
      </button>
      <span className="ml-3" id="annual-billing-label">
        {!!props.label && props.label}
      </span>
    </div>
  )
}
