const mongoose = require('mongoose')
const schema = mongoose.Schema

const personalDataSchema = new schema({
    requester: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            default: ""
        }
    },
    documents: [],
    folder: {
        type: String,
        default: ""
    },
    createdAt: { type: Date, default: Date.now },
    expiredAt: { type: Date, default: undefined },
    status: {
        type: String,
        default: "pending"
    },
})

const personalData = mongoose.model("personal_data", personalDataSchema, "personal_data")
module.exports = personalData