import React from "react"
import { Post, Tag, CurrentUser } from "@fider/models"
import { ShowTag, ShowPostResponse, VoteCounter, MultiLineText } from "@fider/components"
import { FaRegComments } from "react-icons/fa"
import { VStack } from "@fider/components/common/layout"

interface ListPostsProps {
  posts?: Post[]
  tags: Tag[]
  emptyText: string
}

const ListPostItem = (props: { post: Post; user?: CurrentUser; tags: Tag[] }) => {
  return (
    <div className="flex">
      <VoteCounter post={props.post} />
      <div className="self-center">
        <div className="flex flex-x justify-between">
          <a className="text-gray-900 hover:text-primary text-lg font-medium" href={`/posts/${props.post.number}/${props.post.slug}`}>
            {props.post.title}
          </a>
          {props.post.commentsCount > 0 && (
            <div className="info">
              {props.post.commentsCount} <FaRegComments />
            </div>
          )}
        </div>
        <MultiLineText className="mt-2" maxLength={300} text={props.post.description} style="plainText" />
        <ShowPostResponse showUser={false} status={props.post.status} response={props.post.response} />
        {props.tags.map((tag) => (
          <ShowTag key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
  )
}

export const ListPosts = (props: ListPostsProps) => {
  if (!props.posts) {
    return null
  }

  if (props.posts.length === 0) {
    return <p className="center">{props.emptyText}</p>
  }

  return (
    <VStack spacing={8}>
      {props.posts.map((post) => (
        <ListPostItem key={post.id} post={post} tags={props.tags.filter((tag) => post.tags.indexOf(tag.slug) >= 0)} />
      ))}
    </VStack>
  )
}
