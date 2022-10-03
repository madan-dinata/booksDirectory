import { server } from './routes/index.router.js';
import path from 'path';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve('src');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI);

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Dashboard' });
});

app.get('/login', (req, res) => {
  res.render('pages/login', { title: 'Login' });
});

app.get('/register', (req, res) => {
  res.render('pages/register', { title: 'Register' });
});

app.use('/api/v1', server);

app.get('*', (req, res) => {
  res.render('pages/404', { title: 'Page Not Found' });
});

app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`));
