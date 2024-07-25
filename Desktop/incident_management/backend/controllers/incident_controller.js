const Incident = require('../models/Incident');

exports.getIncidents = async (req, res) => {
    try {
        const incidents = await Incident.find();
        res.json(incidents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createIncident = async (req, res) => {
    const incident = new Incident(req.body);
    try {
        const newIncident = await incident.save();
        res.status(201).json(newIncident);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateIncident = async (req, res) => {
    try {
        const updatedIncident = await Incident.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedIncident);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteIncident = async (req, res) => {
    try {
        await Incident.findByIdAndDelete(req.params.id);
        res.json({ message: 'Incident deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
