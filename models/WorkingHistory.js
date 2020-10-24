const mongoose = require('mongoose')

const WorkingHistory = new mongoose.Schema({
    id: {
        type: Number,
        unique: [true, 'id is exists']
    },
    user_id: {
        type: Number,
        required: true,
    },
    position:{
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    from_date: {
        type: Date,
        required: true
    },
    to_date: {
        type: Date,
        required: true
    },
    create_at: {
        type: Date,
        default: new Date()
    }

})



class workingHistoryClass{
    static async addWH({ id, user_id, position, content, from_date, to_date }) {
        try {
            return await this.create({ id, user_id, position, content, from_date, to_date })
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
    static async updateById({ id, user_id, position, content, from_date, to_date }) {
        try {
            return await this.updateOne({id}, { user_id, position, content, from_date, to_date })
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


WorkingHistory.loadClass(workingHistoryClass)


module.exports = mongoose.model('working_history',WorkingHistory)