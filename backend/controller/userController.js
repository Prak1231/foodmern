const User = require('./../models/userModel')

exports.userRegister = async (req, res) => {
  const { name, email, password } = req.body

  const newuser = new User({ name, email, password })
  try {
    newuser.save()
    res.send('user registered succesfully ')
  } catch (err) {
    res.send(err)
  }
}

exports.loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.find({ email, password })

    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      }
      res.send(currentUser)
    } else {
      return res.status(400).json({
        message: 'User Login Failed',
      })
    }
  } catch (err) {
    res.send(err)
  }
}
