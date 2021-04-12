import React from "react"
import { useFider } from "@fider/hooks"

export const DevBanner = () => {
  const fider = useFider()

  if (fider.isProduction()) {
    return null
  }

  return <div className="text-red-700 border-2 z-50 border-red-700 bg-red-50 text-xs p-2 fixed top-2 left-2">DEV</div>
}
