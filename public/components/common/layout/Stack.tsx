import React, { ReactNode } from "react"
import { classSet } from "@fider/services"

type Spacing = 0 | 1 | 2 | 3 | 4 | 6 | 8

interface StackProps {
  spacing?: Spacing
  children: ReactNode
  className?: string
  center?: boolean
}

const vSpacing = {
  0: "",
  1: "space-y-1",
  2: "space-y-2",
  3: "space-y-3",
  4: "space-y-4",
  6: "space-y-6",
  8: "space-y-8",
}

export const VStack = (props: StackProps) => {
  return Stack(props, "flex-col", vSpacing)
}

const hSpacing = {
  0: "",
  1: "space-x-1",
  2: "space-x-2",
  3: "space-x-3",
  4: "space-x-4",
  6: "space-x-6",
  8: "space-x-8",
}

export const HStack = (props: StackProps) => {
  return Stack(props, "flex-row", hSpacing)
}

const Stack = (props: StackProps, direction: string, map: typeof hSpacing | typeof vSpacing) => {
  const className = classSet({
    flex: true,
    [map[props.spacing || 1]]: true,
    "items-center": props.center === true,
    [direction]: direction,
    [props.className || ""]: props.className,
  })

  return <div className={className}>{props.children}</div>
}
