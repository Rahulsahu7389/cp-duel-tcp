how to run the servers:-
backened:-
requirement/libraries:-
1.express
2.jsonwebtoken
3.bcrypt
4.body-parser
5.dotenv
6.mongoose
7.joi
8.cors

steps:-
1.first make sure you have mongodb installed in your system.
2.now make env file in backened having keys
    PORT = 
    MONGO_URI=
    JWT_SECRET=

3.for mongo uri you can also use mongodb atlas for permanent link for your database or just paste link of your localhost 
    eg. mongodb://localhost:<port>/<database-name>
4.inside the database make colletion name 'admins'
5.now go to backened directory and use command `nodemon index.js`


frontend:-
requirement:-
1.react-router-dom
2.react-toastify

steps:-
1.go to the frontend directory
2.use command `npm run dev` to run the server 
