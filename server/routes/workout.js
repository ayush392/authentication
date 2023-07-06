const express = require('express');
const requireAuth = require('../middleware/requireAuth');
// const { loginUser, signupUser } = require('../controllers/userController')


const router = express.Router();
router.use(requireAuth);

// try {
//     const user = await User.login(email, password)

//     //create token
//     const token = createToken(user._id)

//     res.status(200).json({ email, token })
// } catch (error) {
//     res.status(400).json({ error: error.message })
// }

//home page
router.get('/', (req, res) => {
    res.status(200).json({ msg: 'This is the secret page'})
});


module.exports = router 