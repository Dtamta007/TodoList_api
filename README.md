# TodoList
- Run **npm i** to install the dependencies
- After all the dependencies are installed run **npm start** to run the project.
- Use postman to hit the required routes
  - ***/todo*** route will fetch all the todos, provide page and limit in the query like ***http://localhost:8800/todo?page=1&limit=3***, the results will be retured as per the limit given.
  - ***/add*** route adds new todos to the DB, give the todo in the request body, refer to the Todo Schema to see how to write todo.
