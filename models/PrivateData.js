const mongoose = require('mongoose')

const PrivateData = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: [true, 'id is exists']
    },
    user_id: {
        type: Number,
        required: true,
        unique: [true, 'user_id is exists']
    },
    secret_key: {
        type: String,
        required: true
    },
    secret_key_backup: {
        type: String,
        required: true
    },
    public_key: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: new Date()
    }
})


class privateDataClass{
    static async addPD({ id, user_id, secret_key, secret_key_backup, public_key}) {
        try {
            return await this.create({id, user_id, secret_key, secret_key_backup, public_key})
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
    static async updateById({id, user_id, secret_key, secret_key_backup, public_key}) {
        try {
            return await this.updateOne({id}, {id, user_id, secret_key, secret_key_backup, public_key})
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


PrivateData.loadClass(privateDataClass)


module.exports = mongoose.model('private_data',PrivateData)