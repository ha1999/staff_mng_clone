const mongoose = require('mongoose')

const Action = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: [true, 'id is exists']
    },
    name: {
        type: String,
        required: true,
        uppercase: true,
        unique: [true, 'name is exists']
    },
    create_at: {
        type: Date,
        default: new Date()
    }
})


class actionClass{
    static async addAction({ id, name}) {
        try {
            return await this.create({ id, name })
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
    static async updateById({id, name}) {
        try {
            return await this.updateOne({id}, {id, name})
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


Action.loadClass(actionClass)


module.exports = mongoose.model('action',Action)