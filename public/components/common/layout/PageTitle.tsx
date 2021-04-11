import React from "react"

interface PageTitleProps {
  title: string
  subtitle: string
}

export const PageTitle = (props: PageTitleProps) => {
  return (
    <>
      <h2 className="text-display1">{props.title}</h2>
      <p className="text-gray-600">{props.subtitle}</p>
    </>
  )
}
