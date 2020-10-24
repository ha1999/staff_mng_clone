const mongoose = require('mongoose')

const Family = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: [true, 'id is exists']
    },
    user_id:{
        type: Number,
        required: true,
        unique: [true, 'user_id is exists']
    },
    family_type: {
        type: String,
        required: true,
    },
    father_info: {
        type: String,
        required: true,
    },
    mother_info: {
        type: String,
        required: true,
    },
    sibling_info: {
        type: [{ name: String, age: Number, major: String }],
        default: undefined
    },
    spouse_info: {
        type: [{ name: String, age: Number, major: String }],
        default: undefined
    },
    children_info: {
       type: [{ name: String, age: Number, major: String }],
       default: undefined
    },
    create_at: {
        type: Date,
        default: new Date()
    }
})


class familyClass{
    static async addFamily({ id, user_id, family_type, father_info, mother_info, sibling_info, spouse_info, children_info}) {
        try {
            return await this.create({ id, id, user_id, family_type, father_info, mother_info, sibling_info, spouse_info, children_info })
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
    static async updateById({id, user_id, family_type, father_info, mother_info, sibling_info, spouse_info, children_info}) {
        try {
            return await this.updateOne({id}, {id, user_id, family_type, father_info, mother_info, sibling_info, spouse_info, children_info})
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


Family.loadClass(familyClass)


module.exports = mongoose.model('family',Family)