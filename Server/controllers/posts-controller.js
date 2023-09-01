const bcrypt = require('bcrypt'); // npm install bcrypt
const db = require('../database/db');  //improt db connectoin

const feed = async (req, res) => {
    const {userCountry } = req.body; // Assuming you receive the input 'country' in the request body
    //alert(req.body);
    console.log(userCountry);

    // Check if the 'country' input is provided
    if (!userCountry) {
    
        return res.status(400).json({ message: 'Country input is required.' });
    }

    try {
        // Assuming you have a 'posts' table with a 'country' column
        const posts = await db.promise().query(
            'SELECT users.full_name,posts.* FROM posts JOIN users ON users.user_id = posts.user_id WHERE posts.user_Id IN (SELECT user_id FROM users WHERE users.country != ?)',
            [userCountry]
        );
        res.status(200).json(posts[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



module.exports = {
    feed
};