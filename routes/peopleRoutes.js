import express from 'express';
import { saveToEmail } from '../controller/emailController.js';
import { addPeople, deletePeople, editPeople, getAllPeople } from '../controller/peopleControler.js';

const routes = express.Router();

routes.get('/get',getAllPeople);
routes.post('/add',addPeople);
routes.post('/delete',deletePeople);
routes.post('/edit',editPeople)

routes.post('/save',saveToEmail)

export default routes;
