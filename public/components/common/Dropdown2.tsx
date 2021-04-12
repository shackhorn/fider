import React, { useState } from "react"

interface Dropdown2Item {
  value: any
  label: string
  render?: JSX.Element
}

interface Dropdown2Props {
  children: React.ReactNode
  items?: DropDownItem[]
}

export const Dropdown2 = (props: Dropdown2Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggle}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        {props.children}
      </button>

      <div
        className={`${
          !isOpen && "hidden"
        } origin-top-right absolute right-0 mt-2 z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Account settings</span>
        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Support</span>
        <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">License</span>
      </div>
    </div>
  )
}
