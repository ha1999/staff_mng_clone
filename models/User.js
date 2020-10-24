const mongoose = require('mongoose')
const { isEmail } = require('validator')

const User = new mongoose.Schema({
    id:  Number,
    username: {
        type: String,
        required: true,
        unique: [true, 'username is exists']
    },
    passwd:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'invalid email']
    },
    role_id: {
        type: Number,
        required: true
    },
    join_date: {
        type: Date,
        default: Date.now
    },
    is_active: {
        type: Boolean,
        default: 1
    },
    move_date: {
        type: Date,
        default: null
    }
})



class userClass{
    static async addUser({ id, username, passwd, email, role_id }) {
        try {
            return await this.create({ id, username, passwd, email, role_id })
        } catch (err) {
            return err
        }
    }
    static async getById({id}) {
        try {
            return await this.findOne({id})
        } catch (err) {
            return err
        }
    }
    static async getAuth({username, passwd}) {
        try {
            return await this.findOne({username, passwd})
        } catch (err) {
            return err
        }
    }
    static async getAll() {
        try {
            return await this.find({})
        } catch (err) {
            return err
        }
    }
    static async updateById({id, passwd, role_id, is_active, move_date}) {
        try {
            return await this.updateOne({id}, {passwd, role_id, is_active, move_date})
        } catch (err) {
            return err
        }
    }
    static async delete({id}) {
        try {
            return await this.deleteOne({id})
        } catch (err) {
            return err
        }
    }
}


User.loadClass(userClass)


module.exports = mongoose.model('user',User)