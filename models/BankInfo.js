const mongoose = require('mongoose')

const BankInfo = new mongoose.Schema({
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
    bank_name: {
        type: String,
        required: true
    },
    account_number: {
        type: String,
        required: true,
        unique: [true, 'account is exists']
    },
    branch:{
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    account_holder: {
        type: String,
        required: true,
    },
    account_type: {
        type: String,
        required: true,
    },
    text_code: {
        type: String,
        required: true,
    },
    insurance_book_number: {
        type: String,
        required: true,
    },
    health_insurance_no: {
        type: String,
        required: true,
    },
    create_at: {
        type: Date,
        default: new Date()
    }
})



class bankInfoClass{
    static async addBankInfo({ id, user_id, bank_name, account_number, branch, link, account_holder, account_type, text_code, insurance_book_number, health_insurance_no }) {
        try {
            return await this.create({ id, user_id, bank_name, account_number, branch, link, account_holder, account_type, text_code, insurance_book_number, health_insurance_no })
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
    static async updateById({ id, user_id, bank_name, account_number, branch, link, account_holder, account_type, text_code, insurance_book_number, health_insurance_no}) {
        try {
            return await this.updateOne({id},{ id, user_id, bank_name, account_number, branch, link, account_holder, account_type, text_code, insurance_book_number, health_insurance_no})
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


BankInfo.loadClass(bankInfoClass)


module.exports = mongoose.model('bank_info',BankInfo)