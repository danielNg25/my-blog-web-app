# Trường's blog
 A simple blog web-app with MERN stack (Mongodb - ExpressJS - ReactJS - NodeJS)
## CRUD functionality
* Create blog
* Read blog
* Update blog
* Delete blog

## Other Features
* Upload image to post
* View posts by category
* View posts by created month (On going)
* Login and logout functionality
* User authentication control
* Password protection 


## Routes

- POST /api/auth/register - To register new user
- POST /api/auth/login - To login into app
- POST /api/category - To create new category
- GET /api/category - To get all post category
- POST /api/posts - To add new post (when user is authenticated andauthorized only)
- GET /api/posts/:id - To get a post with specific id
- PUT /api/posts/:id - To update specific post with specific Id
- DELETE /api/posts/:id - To delete specific post with specific Id
- GET /api/posts - To get all post
- POST /api/upload - To upload image

## How to run

- Git clone repository
- Go to server folder
- Then run these commands in terminal/shell
```npm
    npm install
    npm start
```
- Then go to client folder
- Run these commands in terminal/shell
```npm
    npm install
    npm start
```
