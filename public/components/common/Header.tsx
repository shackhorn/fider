import React, { useState, useEffect } from "react"
import { SignInModal, DevBanner, Avatar, TenantLogo } from "@fider/components"
import { actions } from "@fider/services"
import { useFider } from "@fider/hooks"
import { HStack } from "./layout"

export const Header = () => {
  const fider = useFider()
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [unreadNotifications, setUnreadNotifications] = useState(0)

  useEffect(() => {
    if (fider.session.isAuthenticated) {
      actions.getTotalUnreadNotifications().then((result) => {
        if (result.ok && result.data > 0) {
          setUnreadNotifications(result.data)
        }
      })
    }
  }, [fider.session.isAuthenticated])

  const showModal = () => {
    if (!fider.session.isAuthenticated) {
      setIsSignInModalOpen(true)
    }
  }

  const hideModal = () => setIsSignInModalOpen(false)

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen)
  }

  const items = isUserMenuOpen && (
    <div className="origin-top-right absolute text-left right-0 mt-2 z-10 rounded-md shadow-lg bg-white divide-y">
      <div>
        <div className="text-sm px-4 py-2 font-medium text-gray-900 truncate">
          <span>{fider.session.user.name}</span>
        </div>
        <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
          Settings
        </a>
      </div>
      <div>
        {fider.session.user.isCollaborator && [
          <div key={1} className="text-sm px-4 py-2 font-medium text-gray-900 truncate">
            <span>Administration</span>
          </div>,
          <a key={2} href="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Site Settings
          </a>,
        ]}
      </div>
      <a href="/signout?redirect=/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 signout">
        Sign out
      </a>
    </div>
  )

  return (
    <>
      <DevBanner />
      <div className="shadow">
        <div className="container">
          <SignInModal isOpen={isSignInModalOpen} onClose={hideModal} />
          <div className="flex justify-between p-2">
            <a href="/" className="flex">
              <HStack center={true} className="h-10">
                <TenantLogo size={100} />
                <h1 className="text-xl font-semibold text-gray-700">{fider.session.tenant.name}</h1>
              </HStack>
            </a>
            {fider.session.isAuthenticated && (
              <HStack center={true}>
                <a href="/notifications" className="bg-white p-1 rounded-full text-gray-500 hover:text-gray-700">
                  <div className="inline-block relative align-middle">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                    {unreadNotifications > 0 && (
                      <span className="absolute animate-pulse top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-600"></span>
                    )}
                  </div>
                </a>
                <div>
                  <button className="rounded-full cursor-pointer" onClick={toggleUserMenu}>
                    <Avatar user={fider.session.user} />
                  </button>
                  {items}
                </div>
              </HStack>
            )}
            {!fider.session.isAuthenticated && !fider.session.tenant.isPrivate && (
              <div onClick={showModal} className="flex items-center">
                {!fider.session.isAuthenticated && <span className="font-medium cursor-pointer text-sm uppercase align-middle">Sign in</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
