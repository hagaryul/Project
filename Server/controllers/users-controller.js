const bcrypt = require('bcrypt'); // npm install bcrypt
const db = require('../database/db');  //improt db connectoin


const register = async (req, res) => {
    console.log(req.body);

    const {
        firstname,
        lastname,
        password,
        email,
        bio,
        profile_picture_url,
        country,
        birth_date,
        gender,
    } = req.body;

    const password_hash = encryptPass(password);
    const username = `${firstname}_${lastname}`; // Generate a username based on first and last name

    const user = {
        username,
        email,
        password_hash, // You can hash the password here using a library like bcrypt
        full_name: `${firstname} ${lastname}`,
        bio,
        profile_picture_url,
        country,
        birth_date,
        gender,
    };

    db.query('INSERT INTO Users SET ?', user, (err, results, fields) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ error: 'Error registering user', details: err.message });
        } else {
            console.log('User registered successfully!');
            res.status(201).json({ message: 'User registered successfully!' });
        }
    });

};

// used to encrypt the password before uploading to database
const encryptPass = (password) =>{
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};


module.exports = {
    register
};