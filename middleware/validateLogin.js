const { check, validationResult } = require('express-validator');

exports.validateLogin = [
    check('email', 'Invalid email').isEmail().normalizeEmail,
    check('password', 'Password must include one lowercase character, one uppercase character, a number, and a special character.').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/, "i"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];
