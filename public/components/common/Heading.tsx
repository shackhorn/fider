import "./Heading.scss"

import React from "react"
import { IconType } from "react-icons"

interface HeadingLogo {
  title: string
  icon: IconType
  subtitle: string
}

export const Heading = (props: HeadingLogo) => {
  return (
    <div className="c-heading">
      <div className="c-heading-icon">{React.createElement(props.icon)}</div>
      <div className="c-heading-content">
        <h2 className="text-2xl font-medium">{props.title}</h2>
        <div className="c-heading-subtitle">{props.subtitle}</div>
      </div>
    </div>
  )
}
