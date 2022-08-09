const { check, validationResult } = require('express-validator');

const validateRegister = ([
    check('name', 'Name feild should not be empty').not().isEmpty().trim(),
    check('email', 'Invalid email').isEmail().normalizeEmail,
    check('password', 'Password must include one lowercase character, one uppercase character, a number, and a special character.').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/, "i"),
    check('mobile').not().isEmpty().trim().isLength({ min: 11, max: 11 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    },
]);

module.exports = validateRegister;