import express from 'express';
import { sendMessage , getContactMessages , deleteContactMessage } from '../controllers/contactController.js';

const router = express.Router();

// Route for getting all contact messages
router.get('/', getContactMessages);

// Route for deleting a contact message
router.delete('/:id', deleteContactMessage);

// Route for sending a contact message
router.post('/', sendMessage);

export default router;
