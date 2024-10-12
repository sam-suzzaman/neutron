### Project Overview:

This application has been created so that a user can manage his/her daily used important contacts very easily through this application. Contacts are displayed on the website as a list. He/She can add, update, delete the contact list as they want.

-   Live Site:

### Run Project locally:

-   Clone repo: `git clone https://github.com/sam-suzzaman/neutron.git`
-   Install Dependencies: `npm install`
-   Run application: `npm run fast`

### Env file:

```
DB_URL=
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
```

### Key Features:

-   Manage Contact (CRUD operation)
-   Add contact to favourite list

### Used Technologies:

-   NextJS
-   Redux
-   React hot toast
-   React hook form
-   React responsive modal
-   React Icons
-   React Loading Skeleton
-   Framer motion
-   mongoose
-   joi
-   dotenv

### API Endpoints:

-   Base URL: `/api/v1`
-   Get Contacts List: `get: /contacts`
-   Add New Contact: `post: /contacts`
-   Delete Contact: `delete: /contacts/id`
-   Get Favourite Contact List: `get: /favourites`
-   Add contact to Favourite List: `post: /favourites/id`
-   Remove contact from Favourite list: `delete: /favourite/id`
