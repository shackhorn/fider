import "./Avatar.scss"

import React from "react"
import { classSet } from "@fider/services"

interface AvatarProps {
  user: {
    avatarURL: string
    name: string
  }
  size?: "small" | "normal" | "large"
}

export const Avatar = (props: AvatarProps) => {
  const size = props.size || "normal"

  const className = classSet({
    "c-avatar": true,
    "c-avatar__small": size === "small",
    "c-avatar__normal": size === "normal",
    "c-avatar__large": size === "large",
  })

  return <img className={className} alt={props.user.name} src={`${props.user.avatarURL}?size=50`} />
}
