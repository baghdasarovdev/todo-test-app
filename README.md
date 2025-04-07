# 📝 To-Do List App

A minimal yet robust full-stack to-do list application built with:

- **Next.js + TypeScript**
- **tRPC** for typesafe backend communication
- **MongoDB** for persistent storage
- **Docker** for development and deployment

---

## ⚙️ Tech Stack

- **Frontend & Backend**: [Next.js](https://nextjs.org/), [tRPC](https://trpc.io/), TypeScript
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Containerization**: [Docker](https://www.docker.com/)
- **Testing**: [Jest](https://jestjs.io/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/banzai/next-trpc-todo.git
cd next-trpc-todo
```

### 2. Create Environment File

```bash
cp .env.example .env
```

Then update your `.env` file with your MongoDB URI:

```
MONGODB_URI=mongodb://localhost:27017/todos
```

---

## 🧑‍💻 Run Locally (Without Docker)

```bash
npm install
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🐳 Run with Docker (Recommended)

### Dev Mode (with Hot Reload)

```bash
docker-compose up --build
```

- App: [http://localhost:3000](http://localhost:3000)
- MongoDB: `mongodb://localhost:27017`

### Production Build

1. Build production image:

```bash
docker build -t todo-app-prod .
```

2. Run it:

```bash
docker run -p 3000:3000 todo-app-prod
```

> Make sure `MONGODB_URI` is correctly set in your Docker image/environment.

---

## ✅ Run Tests

```bash
npm run test
```

---

## 📁 Project Structure

```
.
├── src/
│   ├── app/            # Next.js App Router views and routes
│   ├── server/         # tRPC routers and database logic
│   └── ui/             # Reusable UI components
├── public/             # Static assets
├── .env.example        # Example environment variables
├── Dockerfile          # Production Dockerfile
├── Dockerfile.dev      # Development Dockerfile
├── docker-compose.yml  # Dev setup with MongoDB
└── ...
```

---

## 🛡 License

MIT © 2025 Norayr
