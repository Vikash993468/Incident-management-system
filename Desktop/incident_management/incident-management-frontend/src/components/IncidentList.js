// src/components/IncidentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IncidentList({ onSelectIncident }) {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        fetchIncidents();
    }, []);

    const fetchIncidents = async () => {
        try {
            const response = await axios.get('/api/incidents');
            setIncidents(response.data);
        } catch (error) {
            console.error('Error fetching incidents:', error);
        }
    };

    return (
        <div>
            <h2>Incident List</h2>
            <ul>
                {incidents.map((incident) => (
                    <li key={incident._id} onClick={() => onSelectIncident(incident)}>
                        {incident.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IncidentList;
