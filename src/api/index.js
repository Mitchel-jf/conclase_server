import { Router } from 'express';
import RESPONSE from '../helpers/@response';
import createUser from '../service/test_data';
export default () => {
    let api = Router();
    let apiResp;
    api.post('/create/user', function (req, res) {
        createUser(req.body)
            .then(data => { apiResp = RESPONSE.passed(data); res.status(apiResp.code).json(apiResp); })
            .catch(err => { apiResp = RESPONSE.failed(err); res.status(apiResp.code).json(apiResp); })
    });
    return api;
}