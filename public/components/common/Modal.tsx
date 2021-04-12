import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import { classSet } from "@fider/services"

interface ModalWindowProps {
  className?: string
  isOpen: boolean
  canClose?: boolean
  onClose: () => void
}

interface ModalFooterProps {
  align?: "center" | "right"
  children?: React.ReactNode
}

const ModalWindow: React.FunctionComponent<ModalWindowProps> = (props) => {
  const root = useRef<HTMLElement>(document.getElementById("root-modal"))

  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", keyDown, false)
    } else {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", keyDown, false)
    }
  }, [props.isOpen])

  const swallow = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation()
  }

  const keyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      // ESC
      close()
    }
  }

  const close = () => {
    if (props.canClose) {
      props.onClose()
    }
  }

  if (!props.isOpen || !root.current) {
    return null
  }

  const className = classSet({
    "c-modal": true,
    [`${props.className}`]: !!props.className,
  })

  return ReactDOM.createPortal(
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div aria-disabled={true} className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity overflow-y-scroll" onClick={close}>
        <div className={className} onClick={swallow}>
          {props.children}
        </div>
      </div>
    </div>,
    root.current
  )
}

ModalWindow.defaultProps = {
  canClose: true,
}

const Header = (props: { children: React.ReactNode }) => <div className="c-modal__header">{props.children}</div>
const Content = (props: { children: React.ReactNode }) => <div className="c-modal__content">{props.children}</div>
const Footer = (props: ModalFooterProps) => {
  const align = props.align || "right"
  const className = classSet({
    "c-modal__footer": true,
    "justify-end": align === "right",
    "justify-center": align === "center",
  })
  return <div className={className}>{props.children}</div>
}

export const Modal = {
  Window: ModalWindow,
  Header,
  Content,
  Footer,
}
