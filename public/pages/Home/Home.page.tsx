import NoDataIllustration from "@fider/assets/images/undraw-no-data.svg"

import React, { useState } from "react"
import { Post, Tag, PostStatus } from "@fider/models"
import { MultiLineText, Hint } from "@fider/components"
import { useFider } from "@fider/hooks"
import { PostInput, PoweredByFider, SimilarPosts, PostsContainer } from "./components"

export interface HomePageProps {
  posts: Post[]
  tags: Tag[]
  countPerStatus: { [key: string]: number }
}

export interface HomePageState {
  title: string
}

const Lonely = () => {
  const fider = useFider()

  return (
    <div className="text-center">
      <Hint permanentCloseKey="at-least-3-posts" condition={fider.session.isAuthenticated && fider.session.user.isAdministrator}>
        It&apos;s recommended that you post <strong>at least 3</strong> suggestions here before sharing this site. The initial content is key to start the
        interactions with your audience.
      </Hint>
      <img alt="No Posts" className="inline h-32" src={NoDataIllustration} />
      <p>No posts have been created yet.</p>
    </div>
  )
}

const defaultWelcomeMessage = `We'd love to hear what you're thinking about. 

What can we do better? This is the place for you to vote, discuss and share ideas.`

const HomePage = (props: HomePageProps) => {
  const fider = useFider()
  const [title, setTitle] = useState("")

  const isLonely = () => {
    const len = Object.keys(props.countPerStatus).length
    if (len === 0) {
      return true
    }

    if (len === 1 && PostStatus.Deleted.value in props.countPerStatus) {
      return true
    }

    return false
  }

  return (
    <div id="p-home" className="page container">
      <div className="row">
        <div className="col-md-4">
          <MultiLineText text={fider.session.tenant.welcomeMessage || defaultWelcomeMessage} style="full" />
          <PostInput placeholder={fider.session.tenant.invitation || "Enter your suggestion here..."} onTitleChanged={setTitle} />
          <PoweredByFider />
        </div>
        <div className="col-md-8">
          {isLonely() ? (
            <Lonely />
          ) : title ? (
            <SimilarPosts title={title} tags={props.tags} />
          ) : (
            <PostsContainer posts={props.posts} tags={props.tags} countPerStatus={props.countPerStatus} />
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage
