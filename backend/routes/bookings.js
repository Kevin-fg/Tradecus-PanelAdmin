import express from 'express';
import { createBooking, getAllBooking, getBooking, getBookingCount } from '../controllers/bookingController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyUser, createBooking);
router.get('/:id', verifyUser, getBooking);
router.get('/', verifyAdmin, getAllBooking);

//recien agregado
router.get('/count/:tourId', getBookingCount);

export default router;