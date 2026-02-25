const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema(
    {
        childname: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true
        },
        audioUrl: {
            type: String //opcional para ver si guardo en cloud
        },
        template: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Template',
            required: true
        },
        recipientEmail: {
            type: String,
            required: true,
            match: [/^\S+@\S+\.\S+$/, 'Email inválido'],
        },
        status: {
            type: String,
            enum: ['draft', 'sent', 'failed'],
            default: 'draft'
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model('Letter', letterSchema);