const fs = require('fs')
const jsonServer = require('json-server')
// const jwt = require('jsonwebtoken')
const path = require('path')

const server = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use((req, res, next) => {
  // Разрешаем доступ с localhost:3000
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  
  // Добавляем разрешенные методы
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  
  // Разрешить авторизационные хедеры и куки
  res.header("Access-Control-Allow-Credentials", true);
  
  // Заголовки запросов
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === 'OPTIONS') {
    return res.status(200).send(); // Обрабатываем предварительные запросы
  }

  next();
});

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800)
    })
    next();
})

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({message: 'AUTH ERROR'})
    }

    next();
});

server.use(jsonServer.defaults());
// Боди парсер, без которого тело POST запроса не прочтется
server.use(jsonServer.bodyParser);

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        )

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
})

server.use(router)

// Запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port')
})