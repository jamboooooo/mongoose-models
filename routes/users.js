const {Router} = require('express')
const User = require('../models/User')
const router = Router()

router.get('/', async (req,res)=>{
    const users = await User.find();
    res.json(users)
})

router.get('/:id', async (req,res)=>{
    const users = await User.findById(req.params.id)
    res.json(users)
})

router.post('/', async (req, res)=>{
    const user = await new User({
        first_name: 'Alvi',
        last_name: 'Ivanov',
        age: 23,
        city: 'Grozny',
        email: 'hes@mail.ru',
        lived: false
    })
    user.save()
    res.json('user added')
})

router.delete('/:id', async (req,res)=>{
    const user = await User.findById(req.params.id)
    user.delete()
    res.json('user deleted')
})

router.patch('/:id', async (req,res)=>{
    const user = await User.findById(req.params.id)
    user.first_name = 'Tashu-Hadji'
    user.last_name = 'Soltamuradov'
    user.age = 25
    user.save()
    res.json(user)
})

module.exports = router