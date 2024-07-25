// src/App.js
import React, { useState } from 'react';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import IncidentDetails from './components/IncidentDetails';

function App() {
    const [selectedIncident, setSelectedIncident] = useState(null);

    const handleSelectIncident = (incident) => {
        setSelectedIncident(incident);
    };

    const handleIncidentUpdated = () => {
        setSelectedIncident(null);
    };

    return (
        <div className="App">
            <h1>Incident Management System</h1>
            <IncidentList onSelectIncident={handleSelectIncident} />
            <IncidentForm
                selectedIncident={selectedIncident}
                onIncidentUpdated={handleIncidentUpdated}
            />
            <IncidentDetails incident={selectedIncident} />
        </div>
    );
}

export default App;
