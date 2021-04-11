import React, { useState } from "react"
import { PostStatus, UserStatus } from "@fider/models"
import {
  Heading,
  Button,
  UserName,
  Toggle,
  Avatar,
  ShowTag,
  Segment,
  Segments,
  ShowPostStatus,
  Moment,
  Loader,
  Form,
  Input,
  TextArea,
  RadioButton,
  Select,
  Field,
  SelectOption,
  ButtonClickEvent,
  Message,
  Hint,
} from "@fider/components"
import { User, UserRole, Tag } from "@fider/models"
import { notify, Failure } from "@fider/services"
import { DropDown, DropDownItem } from "@fider/components"
import { FaSearch, FaRegLightbulb, FaCogs } from "react-icons/fa"

const jonSnow: User = {
  id: 0,
  name: "Jon Snow",
  role: UserRole.Administrator,
  status: UserStatus.Active,
  avatarURL: "/avatars/letter/0/Jon%20Snow",
}

const aryaStark: User = {
  id: 0,
  name: "Arya Snow",
  role: UserRole.Visitor,
  status: UserStatus.Active,
  avatarURL: "/avatars/letter/0/Arya%20Snow",
}

const easyTag: Tag = { id: 2, slug: "easy", name: "easy", color: "FB3A62", isPublic: true }
const hardTag: Tag = { id: 3, slug: "hard", name: "hard", color: "fbca04", isPublic: false }

const visibilityPublic = { label: "Public", value: "public" }
const visibilityPrivate = { label: "Private", value: "private" }

const UIToolkitPage = () => {
  const [error, setError] = useState<Failure | undefined>(undefined)

  const notifyError = async () => {
    notify.error("Something went wrong...")
  }

  const notifySuccess = async () => {
    notify.success("Congratulations! It worked!")
  }

  const notifyStatusChange = (opt?: SelectOption) => {
    if (opt) {
      notify.success(opt.value)
    }
  }

  const showLoading = async (e: ButtonClickEvent) => {
    return e.preventEnable()
  }

  const forceError = async () => {
    setError({
      errors: [
        { field: "title", message: "Title is mandatory" },
        { field: "description", message: "Error #1" },
        { field: "description", message: "Error #2" },
        { field: "status", message: "Status is mandatory" },
      ],
    })
  }

  const renderText = (item?: DropDownItem) => {
    if (item) {
      return `${item.label} (value: ${item.value})`
    }
    return <span>No country is selected</span>
  }

  const renderControl = (item?: DropDownItem) => {
    if (item) {
      return item.render
    }
    return <span>...</span>
  }

  return (
    <div id="p-ui-toolkit" className="page container">
      <h2 className="text-2xl mb-6 font-medium">Colors</h2>

      <div className="mb-2 flex space-x-1">
        <div className="w-8 h-8 rounded-md bg-gray-900" />
        <div className="w-8 h-8 rounded-md bg-gray-800" />
        <div className="w-8 h-8 rounded-md bg-gray-700" />
        <div className="w-8 h-8 rounded-md bg-gray-600" />
        <div className="w-8 h-8 rounded-md bg-gray-500" />
        <div className="w-8 h-8 rounded-md bg-gray-400" />
        <div className="w-8 h-8 rounded-md bg-gray-300" />
        <div className="w-8 h-8 rounded-md bg-gray-200" />
        <div className="w-8 h-8 rounded-md bg-gray-100" />
        <div className="w-8 h-8 rounded-md bg-gray-50" />
      </div>
      <div className="mb-2 flex space-x-1">
        <div className="w-8 h-8 rounded-md bg-green-900" />
        <div className="w-8 h-8 rounded-md bg-green-800" />
        <div className="w-8 h-8 rounded-md bg-green-700" />
        <div className="w-8 h-8 rounded-md bg-green-600" />
        <div className="w-8 h-8 rounded-md bg-green-500" />
        <div className="w-8 h-8 rounded-md bg-green-400" />
        <div className="w-8 h-8 rounded-md bg-green-300" />
        <div className="w-8 h-8 rounded-md bg-green-200" />
        <div className="w-8 h-8 rounded-md bg-green-100" />
        <div className="w-8 h-8 rounded-md bg-green-50" />
      </div>
      <div className="mb-2 flex space-x-1">
        <div className="w-8 h-8 rounded-md bg-red-900" />
        <div className="w-8 h-8 rounded-md bg-red-800" />
        <div className="w-8 h-8 rounded-md bg-red-700" />
        <div className="w-8 h-8 rounded-md bg-red-600" />
        <div className="w-8 h-8 rounded-md bg-red-500" />
        <div className="w-8 h-8 rounded-md bg-red-400" />
        <div className="w-8 h-8 rounded-md bg-red-300" />
        <div className="w-8 h-8 rounded-md bg-red-200" />
        <div className="w-8 h-8 rounded-md bg-red-100" />
        <div className="w-8 h-8 rounded-md bg-red-50" />
      </div>
      <div className="mb-2 flex space-x-1">
        <div className="w-8 h-8 rounded-md bg-blue-900" />
        <div className="w-8 h-8 rounded-md bg-blue-800" />
        <div className="w-8 h-8 rounded-md bg-blue-700" />
        <div className="w-8 h-8 rounded-md bg-blue-600" />
        <div className="w-8 h-8 rounded-md bg-blue-500" />
        <div className="w-8 h-8 rounded-md bg-blue-400" />
        <div className="w-8 h-8 rounded-md bg-blue-300" />
        <div className="w-8 h-8 rounded-md bg-blue-200" />
        <div className="w-8 h-8 rounded-md bg-blue-100" />
        <div className="w-8 h-8 rounded-md bg-blue-50" />
      </div>
      <div className="mb-2 flex space-x-1">
        <div className="w-8 h-8 rounded-md bg-yellow-900" />
        <div className="w-8 h-8 rounded-md bg-yellow-800" />
        <div className="w-8 h-8 rounded-md bg-yellow-700" />
        <div className="w-8 h-8 rounded-md bg-yellow-600" />
        <div className="w-8 h-8 rounded-md bg-yellow-500" />
        <div className="w-8 h-8 rounded-md bg-yellow-400" />
        <div className="w-8 h-8 rounded-md bg-yellow-300" />
        <div className="w-8 h-8 rounded-md bg-yellow-200" />
        <div className="w-8 h-8 rounded-md bg-yellow-100" />
        <div className="w-8 h-8 rounded-md bg-yellow-50" />
      </div>

      <h2 className="text-2xl mt-16 mb-6 font-medium">Font Sizes</h2>

      <div className="flex flex-y space-y-2">
        <span className="text-xs">text-xs</span>
        <span className="text-sm">text-sm</span>
        <span className="text-base">text-base</span>
        <span className="text-lg">text-lg</span>
        <span className="text-xl">text-xl</span>
        <span className="text-2xl">text-2xl</span>
      </div>

      <h2 className="text-2xl mt-16 mb-6 font-medium">Segment</h2>

      <Segment>
        <p>Single Segment</p>
      </Segment>

      <Segments>
        <Segment>
          <p>First Segment</p>
        </Segment>
        <Segment>
          <p>Second Segment</p>
        </Segment>
        <Segment>
          <p>Third Segment</p>
        </Segment>
      </Segments>

      <h2 className="text-2xl mt-16 mb-6 font-medium">Avatar</h2>

      <div className="flex flex-y space-y-2 mb-2 mt-2">
        <div className="flex space-x-2">
          <Avatar user={jonSnow} size="large" />
          <Avatar user={jonSnow} size="normal" />
          <Avatar user={jonSnow} size="small" />
        </div>
      </div>

      <h2 className="text-2xl mt-16 mb-6 font-medium">User Name</h2>

      <div className="flex flex-y space-y-2 mb-2 mt-2">
        <div className="flex space-x-2">
          <Avatar user={jonSnow} /> <UserName user={jonSnow} />
        </div>
        <div className="flex space-x-2">
          <Avatar user={aryaStark} /> <UserName user={aryaStark} />
        </div>
      </div>

      <h2 className="text-2xl mt-16 mb-6 font-medium">Heading</h2>

      <Heading title="Page Heading" icon={FaCogs} subtitle="This is a page heading" />

      <h2 className="text-2xl mt-16 mb-6 font-medium">Buttons</h2>

      <div className="flex flex-y space-y-2 mb-2 mt-2">
        <div className="flex space-x-2 mb-2 mt-2">
          <Button size="large">
            <FaRegLightbulb /> Large Icon
          </Button>
          <Button size="large">Large Default</Button>
          <Button color="positive" size="large">
            Large Positive
          </Button>
          <Button color="danger" size="large">
            Large Danger
          </Button>
          <Button color="cancel" size="large">
            Large Cancel
          </Button>
        </div>

        <div className="flex space-x-2 mb-2 mt-2">
          <Button size="normal">
            <FaRegLightbulb /> Normal Icon
          </Button>
          <Button size="normal">Normal Default</Button>
          <Button color="positive" size="normal">
            Normal Positive
          </Button>
          <Button color="danger" size="normal">
            Normal Danger
          </Button>
          <Button color="cancel" size="normal">
            Normal Cancel
          </Button>
        </div>

        <div className="flex space-x-2 mb-2 mt-2">
          <Button size="small">
            <FaRegLightbulb /> Small Icon
          </Button>
          <Button size="small">Small Default</Button>
          <Button color="positive" size="small">
            Small Positive
          </Button>
          <Button color="danger" size="small">
            Small Danger
          </Button>
          <Button color="cancel" size="small">
            Small Cancel
          </Button>
        </div>

        <div className="flex space-x-2 mb-2 mt-2">
          <Button size="tiny">
            <FaRegLightbulb /> Tiny Icon
          </Button>
          <Button size="tiny">Tiny Default</Button>
          <Button color="positive" size="tiny">
            Tiny Positive
          </Button>
          <Button color="danger" size="tiny">
            Tiny Danger
          </Button>
          <Button color="cancel" size="tiny">
            Tiny Cancel
          </Button>
        </div>

        <div className="flex space-x-2 mb-2 mt-2">
          <Button size="mini">
            <FaRegLightbulb /> Mini Icon
          </Button>
          <Button size="mini">Mini Default</Button>
          <Button color="positive" size="mini">
            Mini Positive
          </Button>
          <Button color="danger" size="mini">
            Mini Danger
          </Button>
          <Button color="cancel" size="mini">
            Mini Cancel
          </Button>
        </div>

        <div className="flex space-x-2 mb-2 mt-2">
          <Button href="#">
            <FaRegLightbulb /> Link
          </Button>
          <Button href="#">Link</Button>
          <Button href="#" color="positive">
            Link
          </Button>
          <Button href="#" color="danger">
            Link
          </Button>
        </div>

        <div className="flex space-x-2 mb-2 mt-2">
          <Button disabled={true}>
            <FaRegLightbulb /> Default
          </Button>
          <Button disabled={true}>Default</Button>
          <Button disabled={true} color="positive">
            Positive
          </Button>
          <Button disabled={true} color="danger">
            Danger
          </Button>
        </div>

        <div className="flex space-x-2 mb-2 mt-2">
          <Button onClick={showLoading}>
            <FaRegLightbulb /> Loading
          </Button>
          <Button onClick={showLoading}>Loading</Button>
          <Button color="positive" onClick={showLoading}>
            Loading
          </Button>
          <Button color="danger" onClick={showLoading}>
            Loading
          </Button>
        </div>
      </div>

      <h2 className="text-2xl mt-16 mb-6 font-medium">Toggle</h2>

      <div className="flex flex-y space-y-2 mb-2 mt-2">
        <Toggle active={true} label="Active" />
        <Toggle active={false} label="Inactive" />
        <Toggle active={true} disabled={true} label="Disabled" />
      </div>

      <h2 className="text-2xl mt-16 mb-6 font-medium">Statuses</h2>

      <div className="flex flex-y space-y-2 mb-2 mt-2">
        <ShowPostStatus status={PostStatus.Open} />
        <ShowPostStatus status={PostStatus.Planned} />
        <ShowPostStatus status={PostStatus.Started} />
        <ShowPostStatus status={PostStatus.Duplicate} />
        <ShowPostStatus status={PostStatus.Completed} />
        <ShowPostStatus status={PostStatus.Declined} />
      </div>

      <h2 className="text-2xl mt-16 mb-6 font-medium">Tags</h2>

      <div className="flex space-x-2 mb-2 mt-2">
        <ShowTag tag={easyTag} />
        <ShowTag tag={hardTag} />
        <ShowTag tag={easyTag} circular={true} />
        <ShowTag tag={hardTag} circular={true} />
      </div>

      <h2 className="text-2xl mt-16 mb-6 font-medium">Notification</h2>

      <div className="flex space-x-2 mb-2 mt-2">
        <Button onClick={notifySuccess}>Success</Button>
        <Button onClick={notifyError}>Error</Button>
      </div>

      <h2 className="text-2xl mt-16 mb-6 font-medium">Date/Time</h2>

      <div className="flex flex-y space-y-2 mb-2 mt-2">
        <div>
          Relative: <Moment date="2017-06-03T16:55:06.815042Z" format="relative" />
        </div>
        <div>
          Short: <Moment date="2017-06-03T16:55:06.815042Z" format="short" />
        </div>
        <div>
          Full: <Moment date="2017-06-03T16:55:06.815042Z" format="full" />
        </div>
      </div>

      <h2 className="text-2xl mt-16 mb-6 font-medium">Loader</h2>

      <Loader />

      <h2 className="text-2xl mt-16 mb-6 font-medium">Message Box</h2>

      <Message showIcon={true} type="error">
        Something went wrong.
      </Message>
      <Message showIcon={true} type="warning">
        Be careful!
      </Message>
      <Message showIcon={true} type="success">
        Your order has been confirmed.
      </Message>

      <h2 className="text-2xl mt-16 mb-6 font-medium">Hints</h2>

      <Hint permanentCloseKey="ui-toolkip-example">Did you know that you can close this permanently?</Hint>
      <Hint>You can&apos;t close this one :)</Hint>

      <h2 className="text-2xl mt-16 mb-6 font-medium">Form</h2>

      <Form error={error}>
        <Input label="Title" field="title">
          <p className="info">This is the explanation for the field above.</p>
        </Input>
        <Input field="search" placeholder="Search..." icon={FaSearch} />
        <Input label="Disabled!" field="unamed" disabled={true} value={"you can't change this!"} />
        <Input label="Name" field="name" placeholder={"Your name goes here..."} />
        <Input label="Subdomain" field="subdomain" suffix="fider.io" />
        <Input label="Email" field="email" suffix={<Button color="positive">Sign in</Button>} />
        <TextArea label="Description" field="description" minRows={5}>
          <p className="info">This textarea resizes as you type.</p>
        </TextArea>
        <Input field="age" placeholder="This field doesn't have a label" />

        <div className="row">
          <div className="col-md-3">
            <Input label="Title1" field="title1" />
          </div>
          <div className="col-md-3">
            <Input label="Title2" field="title2" />
          </div>
          <div className="col-md-3">
            <Input label="Title3" field="title3" />
          </div>
          <div className="col-md-3">
            <RadioButton label="Visibility" field="visibility" defaultOption={visibilityPublic} options={[visibilityPrivate, visibilityPublic]} />
          </div>
        </div>

        <Select
          label="Status"
          field="status"
          options={[
            { value: "open", label: "Open" },
            { value: "started", label: "Started" },
            { value: "planned", label: "Planned" },
          ]}
          onChange={notifyStatusChange}
        />

        <Field label="Number">
          <DropDown
            items={[
              { label: "One", value: "1" },
              { label: "Two", value: "2" },
              { label: "Three", value: "3" },
            ]}
            defaultValue={"1"}
            placeholder="Select a number"
          />
        </Field>

        <Field label="Country (custom render text)">
          <DropDown
            items={[
              { label: "Brazil", value: "br" },
              { label: "United States", value: "us" },
              { label: "Ireland", value: "ie" },
            ]}
            defaultValue={"1"}
            renderText={renderText}
            placeholder="Select a number"
          />
        </Field>

        <Field label="Color (custom render control)">
          <DropDown
            items={[
              { label: "Green", value: "green", render: <span style={{ color: "green" }}>Green</span> },
              { label: "Red", value: "red", render: <span style={{ color: "red" }}>Red</span> },
              { label: "Blue", value: "blue", render: <span style={{ color: "blue" }}>Blue</span> },
            ]}
            placeholder="Select a color"
            inline={true}
            style="simple"
            header="What color do you like the most?"
            renderControl={renderControl}
          />
        </Field>

        <Button onClick={forceError}>Save</Button>
      </Form>
    </div>
  )
}

export default UIToolkitPage
