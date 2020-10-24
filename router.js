const express = require('express')
const router = express.Router()

const {
    userApi,
    authApi,
    roleApi,
    actionApi,
    workingHistoryApi,
    eduApi,
    contactApi,
    bankInfoApi,
    familyApi,
    privateDataApi
} = require('./api')

router.use('/user', userApi)
router.use('/auth', authApi)
router.use('/role', roleApi)
router.use('/action', actionApi)
router.use('/working-history', workingHistoryApi)
router.use('/education', eduApi)
router.use('/contact', contactApi)
router.use('/bank-info', bankInfoApi)
router.use('/family', familyApi)
router.use('/private-data', privateDataApi)

module.exports = router
