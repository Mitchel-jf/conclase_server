require('dotenv').config();
import { Router } from 'express';
import ValidateRequestBody from './body_validation/create_user';
export default () => {
    let routes = Router();
    routes.post('/create/user', ValidateRequestBody);
    return routes;
}