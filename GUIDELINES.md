# Server Development

**Models Naming**

- `app/models/action.<something>`: actions are based on user interaction for POST/PUT/PATCH requests. Actions map 1-to-1 with an Command. E.g: `action.CreateNewUser`;
- `app/models/dto.<something>`: A simple object used for data transfer between various packages/services. E.g: `dto.NewUserInfo`;
- `app/models/entity.<something>`: An object that is mapped to a database table. E.g: `entity.User`;
- `app/models/cmd.<something>` something that must be done and potentially return some value. E.g.: `cmd.HttpRequest`, `cmd.LogDebug`, `cmd.SendMail`, `cmd.CreateNewUser`;
- `app/models/query.<something>` get some information from somewhere. E.g.: `query.GetUserById`, `query.GetAllPosts`;

# UI Development

## React / CSS / HTML Convention

**Folder Structure**

```javascript
public/components // Shared/Basic Components

public/pages // Pages

public/pages/Home // Home page component folder
	-> index.ts // exporter
	-> Home.page.scss // Page specific styles
	-> Home.page.spec.tsx // Page Component unit tests
	-> Home.page.tsx // Page Component
	-> ./components // Inner components of home page
```

**Design System**

Fider components use BEM naming convention and are built on top of [Tailwind](https://tailwindcss.com/). Visit [https://feedback.fider.io/-/ui](https://feedback.fider.io/-/ui) to see it live.

Each page is built using a combination of Fider Components and Tailwind Utility Classes.
