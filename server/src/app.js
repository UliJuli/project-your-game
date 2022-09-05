require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const dbConnectionCheck = require('../db/dbConnectCheck');

const { PORT, SESSION_SECRET } = process.env;

const app = express();
dbConnectionCheck();

// Подключаем роуты
const RegistrationRouter = require('./routes/register')
const statsRoutes = require('./routes/stats')
const answer = require('./routes/question-route');

// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/'))); // для подключения «клиентских» файлов, хранящихся в / public
app.use(express.urlencoded({ extended: true })); // Для того, чтобы обрабатывать тела запросов, которые через метод POST
app.use(express.json());

// Конфиг для корса

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000', // адрес сервера React
};
app.use(cors(corsOptions));

// КОНФИГ ДЛЯ КУКИ
const sessionConfig = {
  name: 'login', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? 'shamil', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};
// подключение мидлвара для куки
app.use(session(sessionConfig));

// Подключаем use для router
app.use ('/auth', RegistrationRouter)
app.use('/stats', statsRoutes)
app.use('/', answer);

app.listen(PORT ?? 3000, () => {
  console.log(`Сервер запущен! на ${PORT} порту`);
});
