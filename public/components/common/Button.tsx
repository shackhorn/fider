import React from "react"
import { classSet } from "@fider/services"

interface ButtonProps {
  className?: string
  disabled?: boolean
  href?: string
  rel?: "nofollow"
  type?: "button" | "submit"
  color?: "positive" | "danger" | "default" | "cancel"
  fluid?: boolean
  size?: "small" | "default" | "large"
  onClick?: (event: ButtonClickEvent) => Promise<any>
}

interface ButtonState {
  clicked: boolean
}

export class ButtonClickEvent {
  private shouldEnable = true
  public preventEnable(): void {
    this.shouldEnable = false
  }
  public canEnable(): boolean {
    return this.shouldEnable
  }
}

export class Button extends React.Component<ButtonProps, ButtonState> {
  private unmounted = false

  public static defaultProps: Partial<ButtonProps> = {
    size: "default",
    fluid: false,
    color: "default",
    type: "button",
  }

  public constructor(props: ButtonProps) {
    super(props)
    this.state = {
      clicked: false,
    }
  }

  public componentWillUnmount() {
    this.unmounted = true
  }

  public click = async (e?: React.SyntheticEvent<HTMLElement>) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }

    if (this.state.clicked) {
      return
    }

    const event = new ButtonClickEvent()
    this.setState({ clicked: true })
    if (this.props.onClick) {
      await this.props.onClick(event)
      if (!this.unmounted && event.canEnable()) {
        this.setState({ clicked: false })
      }
    }
  }

  public render() {
    const isDisabled = this.state.clicked || this.props.disabled
    const isLoading = this.state.clicked

    const className = classSet({
      "c-button": true,
      "w-full": this.props.fluid,
      "c-button__positive": this.props.color === "positive",
      "c-button__danger": this.props.color === "danger",
      "c-button__default": this.props.color === "default",
      "c-button__cancel": this.props.color === "cancel",
      "c-button__loading": isLoading,
      "px-2.5 py-1.5 text-xs": this.props.size === "small",
      "px-3 py-1.5 text-sm": this.props.size === "default",
      "px-4 py-2": this.props.size === "large",
      "opacity-50": isDisabled,
      [this.props.className || ""]: this.props.className,
    })

    if (this.props.href) {
      return (
        <a href={this.props.href} rel={this.props.rel} className={className}>
          {this.props.children}
        </a>
      )
    } else if (this.props.onClick) {
      return (
        <button type={this.props.type} disabled={isDisabled} className={className} onClick={this.click}>
          {this.props.children}
        </button>
      )
    } else {
      return (
        <button type={this.props.type} disabled={isDisabled} className={className}>
          {this.props.children}
        </button>
      )
    }
  }
}
