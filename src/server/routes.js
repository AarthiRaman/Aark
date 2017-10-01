import { Router } from 'express';
import Content from '../pages/home';

const router = new Router();

router.route('/login').get(<Content />);