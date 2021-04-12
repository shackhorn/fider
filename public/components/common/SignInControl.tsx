import React, { useState } from "react"
import { SocialSignInButton, Form, Button, Input, Message } from "@fider/components"
import { device, actions, Failure, isCookieEnabled } from "@fider/services"
import { useFider } from "@fider/hooks"

interface SignInControlProps {
  useEmail: boolean
  redirectTo?: string
  onEmailSent?: (email: string) => void
}

export const SignInControl: React.FunctionComponent<SignInControlProps> = (props) => {
  const fider = useFider()
  const [email, setEmail] = useState("")
  const [error, setError] = useState<Failure | undefined>(undefined)

  const signIn = async () => {
    const result = await actions.signIn(email)
    if (result.ok) {
      setEmail("")
      setError(undefined)
      if (props.onEmailSent) {
        props.onEmailSent(email)
      }
    } else if (result.error) {
      setError(result.error)
    }
  }

  const providersLen = fider.settings.oauth.length

  if (!isCookieEnabled()) {
    return (
      <Message type="error">
        <h3>Cookies Required</h3>
        <p>Cookies are not enabled on your browser. Please enable cookies in your browser preferences to continue.</p>
      </Message>
    )
  }

  return (
    <div>
      {providersLen > 0 && (
        <>
          <div className={fider.settings.oauth.length % 2 === 0 ? "grid gap-4 grid-cols-2" : "grid gap-4 grid-cols-3"}>
            {fider.settings.oauth.map((o) => (
              <React.Fragment key={o.provider}>
                <SocialSignInButton option={o} redirectTo={props.redirectTo} />
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs mt-2">We will never post to these accounts on your behalf.</p>
        </>
      )}

      {providersLen > 0 && <div className="c-divider">OR</div>}

      {props.useEmail && (
        <>
          <p>Enter your email address to sign in.</p>
          <Form error={error}>
            <Input
              field="email"
              value={email}
              autoFocus={!device.isTouch()}
              onChange={setEmail}
              placeholder="yourname@example.com"
              suffix={
                <Button type="submit" color="positive" disabled={email === ""} onClick={signIn}>
                  Sign in
                </Button>
              }
            />
          </Form>
        </>
      )}
    </div>
  )
}
