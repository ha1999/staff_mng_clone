const mongoose = require('mongoose')

const Role = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: [true, 'id is exists']
    },
    code: {
        type: String,
        required: true,
        uppercase: true,
        unique: [true, 'code is exists']
    },
    name: {
        type: String,
        required: true,
        unique: [true, 'name is exists']
    },
    create_at: {
        type: Date,
        default: new Date()
    }
})



class roleClass{
    static async addRole({ id, code, name}) {
        try {
            return await this.create({ id, code, name })
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
    static async getAll() {
        try {
            return await this.find({})
        } catch (err) {
            return err
        }
    }
    static async updateById({id, code, name}) {
        try {
            return await this.updateOne({id}, {id, code, name})
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


Role.loadClass(roleClass)


module.exports = mongoose.model('role',Role)