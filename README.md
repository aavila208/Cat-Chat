# **Cat Chat** [IN-Progress]

Cat Chat is a chat application that integrates a frontend React app with a backend Node.js/Express API and a PostgreSQL database. This social media app provides 
who may have a hard time communicating a space were they can slowly but surely make connection with one another with features such as an interactive leveling system
simple UI, progressive social interaction space but allow user to start their social media account without giving out to much information about themselves.

CHAT-BOT [NOTE] The idea with the login system for this app was to present a new way for users to be introduced to the social media but not through an original login/ registering space, but a chat between the website and the user. The idea with the chat is that any information given by the user would be processed and then if correct, put into the database as a legit users to use the application.

---

## **Features** [IDEA]

- **User Authentication**: Secure login with hashed passwords using `bcrypt`.
- **RESTful API**: Backend endpoints for user management.
- **Real-Time Chat**: Communication via `Socket.IO`.
- **Frontend**: Built with React and styled using `TailwindCSS` and `Bootstrap`.
- **Database Integration**: PostgreSQL database for persistent user and chat data storage.

---

### **Frontend**
- React
- TailwindCSS
- Bootstrap
- Vite [Had issues with version compatibility so Vite was used to mitigate this from happening]

### **Backend**
- Node.js
- Express
- bcrypt for password hashing
- JSON Web Tokens (JWT) for secure authentication
- PostgreSQL

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/aavila208/Cat-Chat.git
cd cat-chat