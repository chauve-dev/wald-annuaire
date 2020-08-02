export default [
    {path: "/", controller: "indexController", type: "get"},
    {path: "/login", controller: "loginController", type: "get"},
    {path: "/login", controller: "loginController", type: "post"},
    {path: "/logout", controller: 'logoutController', type: "get"},
    {path: "/contacts", controller: 'contactsController', type: "post"},

    {path: "/addContact", controller: 'addContactController', type: "post"},
    {path: "/register", controller: 'addUserController', type: "post"},
]