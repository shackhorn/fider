import React from "react"
import { classSet } from "@fider/services"
import { HiOutlineExclamationCircle, HiOutlineExclamation, HiOutlineCheckCircle } from "react-icons/hi"
import { HStack } from "./layout"

interface MessageProps {
  type: "success" | "warning" | "error"
  showIcon?: boolean
}

export const Message: React.FunctionComponent<MessageProps> = (props) => {
  const className = classSet({
    "c-message p-3 mb-4 border-l-2": true,
    [`c-message__${props.type}`]: true,
    "text-green-700 bg-green-50 border-green-500": props.type === "success",
    "text-yellow-700 bg-yellow-50 border-yellow-500": props.type === "warning",
    "text-red-700 bg-red-50 border-red-500": props.type === "error",
  })

  const icon =
    props.type === "error" ? (
      <HiOutlineExclamationCircle className="h-8" />
    ) : props.type === "warning" ? (
      <HiOutlineExclamation className="h-8" />
    ) : (
      <HiOutlineCheckCircle className="h-8" />
    )

  return (
    <HStack spacing={2} center={true} className={className}>
      {props.showIcon === true && icon}
      <span>{props.children}</span>
    </HStack>
  )
}
