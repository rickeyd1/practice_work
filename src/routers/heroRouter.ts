import express from 'express';
import { heroes } from '../state';

export const heroRouter = express.Router();

/**
 * Finds and returns all heroes
 * endpoint: /heroes
 * method: GET
 */

 heroRouter.get('', async (req, res) => {
     console.log('Retrieving users...');
     const user = heroes;
     res.json(heroes);

 });