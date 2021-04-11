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
    "c-avatar rounded-full inline-block": true,
    "w-6 h-6": size === "small",
    "w-8 h-8": size === "normal",
    "w-10 h-10": size === "large",
  })

  return <img className={className} alt={props.user.name} src={`${props.user.avatarURL}?size=50`} />
}
