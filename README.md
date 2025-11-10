# Team Collaboration Board (MERN Stack)
(Master Branch)
A basic Trello/Asana clone built with MERN stack for managing team boards and tasks.

## Features

- **Boards**: Create and manage multiple boards (e.g., "Frontend Tasks", "Marketing Plan")
- **Tasks**: Each task includes title, description, status, priority, assigned to, and due date
- **Task Management**: Create, edit, delete tasks within boards
- **Status Columns**: Tasks are grouped by status ("To Do", "In Progress", "Done")
- **Priority Badges**: Color-coded priority indicators (Low, Medium, High)

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js, Axios, React Router
- **Styling**: CSS

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Backend Setup
1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory:
   ```
   MONGO_URI=mongodb://localhost:27017/mern_task
   PORT=5000
   ```

3. Start the backend server:
   ```
   npm start
   ```
   The server will run on http://localhost:5000

### Frontend Setup
1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```
   The app will open in your browser at http://localhost:3000

## API Endpoints

### Boards
- `GET /api/boards` - List all boards
- `POST /api/boards` - Create a new board

### Tasks
- `GET /api/tasks/boards/:boardId` - Get tasks for a specific board
- `POST /api/tasks/boards/:boardId` - Create a new task in a board
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Usage

1. Create a new board from the home page
2. Click on a board to view its tasks
3. Use the "Create Task" button to add new tasks
4. Edit or delete tasks using the buttons on each task card
5. Tasks are automatically grouped by status columns

## Project Structure

```
mern_developer_task/
├── models/
│   ├── Board.js
│   └── Task.js
├── routes/
│   ├── boardRoutes.js
│   └── taskRoutes.js
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BoardList.js
│   │   │   ├── BoardView.js
│   │   │   ├── TaskCard.js
│   │   │   └── TaskModal.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server.js
├── package.json
└── README.md
```

## Future Enhancements

- Drag and drop functionality for moving tasks between status columns
- User authentication and authorization
- Search and filter capabilities
- Due date notifications
- Task comments and attachments
- Board sharing and collaboration features

## License

This project is licensed under the ISC License.
