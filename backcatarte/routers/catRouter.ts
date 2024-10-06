import { Router } from 'express';
import { deleteMeme, getAllMemes, createMeme, putMeme } from  '../controllers/catController.js';

export const router = Router();

router.get('/', getAllMemes);

router.post('/', createMeme);

router.delete('/:id', deleteMeme);

router.put('/:id', putMeme);