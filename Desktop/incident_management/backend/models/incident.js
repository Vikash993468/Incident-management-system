const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Incident', incidentSchema);
