
# MERN BLOG

Fullstack open source blogging application made with MongoDB, Express, React & Nodejs (MERN)

## Configuration and Setup
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

* Open the project in your prefered code editor.
* Go to terminal -> New terminal (If you are using VS code)
* Split your terminal into two (run the Frontend on one terminal and the Backend on the other terminal)

In the first terminal
~~~~
$ cd client
$ npm install (to install frontend-side dependencies)
$ npm run dev (to start the frontend)
~~~~

In the second terminal

* cd server and Set environment variables in config.env under ./config
* Create your mongoDB connection url, which you'll use as your MONGO_URI
* Supply the following credentials

~~~~
#  --- .env  ---
MONGO_URI =
JWT_SECRET =
~~~~

~~~~
# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm run dev (to start the backend)
~~~~
## Features

- Light/dark mode toggle
- User registration and login
- Authentication using JWT Tokens
- CRUD operations (Post,User & comment create, read, update and delete)
- Upload user ımage and post ımage to the server
- Commenting on the post
- Liking comment
- Responsive Design


## Technologies used
This project was created using the following technologies.

#### Frontend
- [Reactjs](https://react.dev/)
- [React Hooks](https://legacy.reactjs.org/docs/hooks-intro.html)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-quill](https://www.npmjs.com/package/react-quill)
- [flowbite react](https://flowbite-react.com/)
- [redux, redux-toolkit & redux-persist](https://redux.js.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [react-icons](https://react-icons.github.io/react-icons/)
- [tailwind css](https://tailwindcss.com/)
- [moment](https://www.npmjs.com/package/moment)
- [react-spinners](https://www.npmjs.com/package/react-spinners)
#### Backend
- [Nodejs](https://nodejs.org/en)
- [Expressjs](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
#### Database
- [Mongodb](https://www.mongodb.com/)

## Screenshots

![Home](https://res.cloudinary.com/dbk1x83kg/image/upload/v1712389047/mern-blog%20preview%20images/Screenshot_2024-04-06_143433_fnzuio.png)

![Signin](https://res.cloudinary.com/dbk1x83kg/image/upload/v1712389046/mern-blog%20preview%20images/Screenshot_2024-04-06_143407_kzhtpq.png)

![Signup](https://res.cloudinary.com/dbk1x83kg/image/upload/v1712389046/mern-blog%20preview%20images/Screenshot_2024-04-06_143417_nyog39.png)

![Comment](https://res.cloudinary.com/dbk1x83kg/image/upload/v1712389046/mern-blog%20preview%20images/Screenshot_2024-04-06_143510_hbewr2.png)

![Dashboard](https://res.cloudinary.com/dbk1x83kg/image/upload/v1712389651/mern-blog%20preview%20images/Screenshot_2024-04-06_144718_u3hvlf.png)

![ListBlogs](https://res.cloudinary.com/dbk1x83kg/image/upload/v1712389047/mern-blog%20preview%20images/Screenshot_2024-04-06_143451_ggi41f.png)



## Authors

- Github: [Chaobanh27](https://github.com/Chaobanh27)
- Email: chaobanhnguyen@gmail.com

