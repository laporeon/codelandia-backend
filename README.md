<h1 align="center">Codelândia Blog API</h1>

## 📋 About

This is a project inspired by one of <a href="https://discord.com/invite/QevDJqCzaY">Codelândia</a>'s challenges. 
The original challenge is to code a solution for the following <a href="https://www.figma.com/file/Yb9IBH56g7T1hdIyZ3BMNO/Codel%C3%A2ndia-Desafios?node-id=0%3A1">mockup</a>, using any front-end techs we wanted. 
As a personal challenge to practice some backend, I made a fake API to simulate a real management system for a blog. 

--- 
### 🚀 Technologies
- Node.js
- Express
- MongoDB
- Mongoose

--- 

### 🛠️ Install
```bash
# Clone the repository
git clone https://github.com/laporeon/codelandia-backend

# Navigate to project folder
cd codelandia-backend

# Install the dependencies
npm i

# Start server
npm run dev

```
Server will start at port :3001 - access `http://localhost:3001/posts`

--- 

### 📌 Routes

**[GET]** / : Lists all the posts stored at database.

**[POST]** /create : Create and store a new post at database.

**[PUT]** /edit/:_id : Edit informations from a stored post based on its ID.

**[DELETE]** /delete/:_id : Delete a post from the database using its ID as a parameter.

--- 
