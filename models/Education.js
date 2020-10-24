const mongoose = require('mongoose')

const Education = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: [true, 'id is exists']
    },
    user_id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    major: {
        type: String,
        required: true
    },
    from_date: {
        type: Date,
        required: true
    },
    to_date: {
        type: Date,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: new Date()
    }
})


class educationClass{
    static async addEdu({ id, user_id, name, major, from_date, to_date, link}) {
        try {
            return await this.create({ id, user_id, name, major, from_date, to_date, link})
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
    static async updateById({ id, user_id, name, major, from_date, to_date, link}) {
        try {
            return await this.updateOne({id}, {user_id, name, major, from_date, to_date, link})
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


Education.loadClass(educationClass)


module.exports = mongoose.model('education',Education)