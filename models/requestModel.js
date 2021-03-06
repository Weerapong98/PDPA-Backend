const mongoose = require('mongoose')
const schema = mongoose.Schema

const requestSchema = new schema({
    requester: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            default: undefined
        }
    },
    folder: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    },
    reason: {
        type: String,
        default: ""
    },
    note: {
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

const request = mongoose.model("request", requestSchema, "request")
module.exports = request