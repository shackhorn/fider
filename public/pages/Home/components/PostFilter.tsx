import React from "react"
import { PostStatus } from "@fider/models"
import { DropDown, DropDownItem } from "@fider/components"
import { useFider } from "@fider/hooks"

interface PostFilterProps {
  activeView: string
  countPerStatus: { [key: string]: number }
  viewChanged: (name: string) => void
}

export const PostFilter = (props: PostFilterProps) => {
  const fider = useFider()

  const handleChangeView = (item: DropDownItem) => {
    props.viewChanged(item.value as string)
  }

  const options: DropDownItem[] = [
    { value: "trending", label: "Trending" },
    { value: "recent", label: "Recent" },
    { value: "most-wanted", label: "Most Wanted" },
    { value: "most-discussed", label: "Most Discussed" },
  ]

  if (fider.session.isAuthenticated) {
    options.push({ value: "my-votes", label: "My Votes" })
  }

  PostStatus.All.filter((s) => s.filterable && props.countPerStatus[s.value]).forEach((s) => {
    options.push({
      label: s.title,
      value: s.value,
      render: (
        <>
          {s.title} <span className="bg-gray-200 text-2xs px-2 ml-2 text-center inline-block rounded-full">{props.countPerStatus[s.value]}</span>
        </>
      ),
    })
  })

  const viewExists = options.filter((x) => x.value === props.activeView).length > 0
  const activeView = viewExists ? props.activeView : "trending"

  return (
    <>
      <span className="uppercase text-xs text-gray-700 font-medium">View</span>
      <DropDown header="What do you want to see?" inline={true} style="simple" items={options} defaultValue={activeView} onChange={handleChangeView} />
    </>
  )
}
