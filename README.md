# Friends API Backend

This is the backend part of the Simple CRUD Friends app built with **Node.js**, **Express**, and **MongoDB**. It provides RESTful API endpoints to manage friends data.

## 🚀 Features

- Create a new friend (POST)
- Read all friends (GET)
- Update a friend (PUT)
- Delete a friend (DELETE)
- Connected with MongoDB Atlas

---

## 📁 Project Structure

```
.
├── index.js            # Main server file
├── package.json        # Project dependencies and scripts
└── ...
```

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- CORS & Express Middleware

---

## 🔧 Setup & Run Locally

1. **Clone the Repository**

```bash
git clone https://github.com/mahii060/simple-crud-client-friends.git
cd simple-crud-client-friends
git checkout backend
```

2. **Install Dependencies**

```bash
npm install
```

3. **Add `.env` File**

```env
PORT=5000
MONGODB_URI=your_mongo_connection_string
```

4. **Start the Server**

```bash
npm run dev
```

> Your API will run on `http://localhost:5000`

---

## 📬 API Endpoints

| Method | Route              | Description           |
|--------|--------------------|-----------------------|
| GET    | /friends           | Get all friends       |
| POST   | /friends           | Add a new friend      |
| DELETE | /friends/:id       | Delete a friend       |
| PUT    | /friends/:id       | Update a friend       |

---

## 🙌 Author

- [@mahii060](https://github.com/mahii060)

---

## 📄 License

This project is open-source and free to use.
