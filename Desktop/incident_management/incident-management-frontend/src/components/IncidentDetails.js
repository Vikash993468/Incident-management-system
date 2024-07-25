// src/components/IncidentDetails.js
import React from 'react';

function IncidentDetails({ incident }) {
    if (!incident) {
        return <div>Select an incident to see details</div>;
    }

    return (
        <div>
            <h2>Incident Details</h2>
            <p><strong>Title:</strong> {incident.title}</p>
            <p><strong>Description:</strong> {incident.description}</p>
            <p><strong>Status:</strong> {incident.status}</p>
        </div>
    );
}

export default IncidentDetails;
