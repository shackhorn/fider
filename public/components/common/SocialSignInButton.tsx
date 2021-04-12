import React from "react"
import { Button, OAuthProviderLogo } from "@fider/components/common"

interface SocialSignInButtonProps {
  option: {
    displayName: string
    provider?: string
    url?: string
    logoBlobKey?: string
    logoURL?: string
  }
  redirectTo?: string
}

export const SocialSignInButton = (props: SocialSignInButtonProps) => {
  const redirectTo = props.redirectTo || window.location.href
  const href = props.option.url ? `${props.option.url}?redirect=${redirectTo}` : undefined

  return (
    <Button href={href} rel="nofollow" fluid={true}>
      <div className="h-6 mr-2">
        {props.option.logoURL ? (
          <img className="h-full" alt={props.option.displayName} src={props.option.logoURL} />
        ) : (
          <OAuthProviderLogo option={props.option} />
        )}
      </div>
      <span>{props.option.displayName}</span>
    </Button>
  )
}
