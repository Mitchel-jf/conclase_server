import ValidatorTemplate from './_template';
let validate = new ValidatorTemplate();

validate.setRules({
    firstName: 'required|string',
    lastName: 'required|string',
    email: 'required|email',
});

export default function (req, res, next) {
    validate.validate(req.body) ?
        next() : res.status(validate.apiResp.code).send(validate.apiResp);
}