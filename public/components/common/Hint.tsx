import React, { useState } from "react"

import { cache } from "@fider/services"
import { HiOutlineInformationCircle, HiOutlineX } from "react-icons/hi"
import { HStack } from "./layout"

interface HintProps {
  permanentCloseKey?: string
  condition?: boolean
}

export const Hint: React.FC<HintProps> = (props) => {
  const cacheKey: string | undefined = props.permanentCloseKey ? `Hint-Closed-${props.permanentCloseKey}` : undefined
  const [isClosed, setIsClosed] = useState<boolean>(cacheKey ? cache.local.has(cacheKey) : false)

  const close = () => {
    if (cacheKey) {
      cache.local.set(cacheKey, "true")
    }
    setIsClosed(true)
  }

  if (props.condition === false || isClosed) {
    return null
  }

  return (
    <HStack spacing={2} center={true} className="c-hint p-3 mb-4 border-l-2 text-blue-900 bg-blue-50 border-blue-900">
      <HiOutlineInformationCircle className="h-8" />
      <span className="flex-grow">{props.children}</span>
      {cacheKey && <HiOutlineX className="h-4 text-blue-900 cursor-pointer" onClick={close} />}
    </HStack>
  )
}
