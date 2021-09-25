const mongoose = require('mongoose');

module.exports = mongoose.model('users', new mongoose.Schema([{
    email: { type: String, lowercase: true, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    region: { type: String, required: true },
    currency: { type: String, required: true },
    commissionRate: { type: String },
    contactNumber: { type: Number, min: 10, required: true, unique: true },
    language: { type: String },
    type: { type: String, enum: ['ADMIN', 'AGENT', 'CUSTOMER'], required: true },
    admin_id: { type: String },
    agent_id: { type: String },
    isActive: { type: Boolean, required: true }
}], {
    collection: 'users',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}
));