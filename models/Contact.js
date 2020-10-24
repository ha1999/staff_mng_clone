const mongoose = require('mongoose')
const { isEmail } = require('validator')

const Contact = new mongoose.Schema({
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
    permanent_address: {
        type: String,
        required: true
    },
    residential_address: {
        type: String,
        required: true
    },
    home_phone:{
        type: String,
        required: true,
        unique: [true, 'homePhone is exists']
    },
    work_phone: {
        type: String,
        required: true,
        unique: [true, 'workPhone is exists']
    },
    work_email: {
        type: String,
        required: true,
        validate: [isEmail, 'invalid email'],
        unique: [true, 'workEmail is exists']
    },
    private_email: {
        type: String,
        required: true,
        validate: [isEmail, 'invalid email'],
        unique: [true, 'privateEmail is exists']
    },
    contact_emergency: {
        type: String,
        required: true,
    },
    create_at: {
        type: Date,
        default: new Date()
    }
})



class contactClass{
    static async addContact({ id, user_id, permanent_address, residential_address, home_phone, work_phone, work_email, private_email, contact_emergency}) {
        try {
            return await this.create({ id, user_id, permanent_address, residential_address, home_phone, work_phone, work_email, private_email, contact_emergency})
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
    static async updateById({ id, user_id, permanent_address, residential_address, home_phone, work_phone, work_email, private_email, contact_emergency}) {
        try {
            return await this.updateOne({id},{ id, user_id, permanent_address, residential_address, home_phone, work_phone, work_email, private_email, contact_emergency})
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


Contact.loadClass(contactClass)


module.exports = mongoose.model('contact',Contact)