import React, { useState } from 'react';

const TraceabilityPage = () => {
    const [batchId, setBatchId] = useState('');
    const [traceabilityData, setTraceabilityData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setBatchId(event.target.value);
    };

    const handleTrackBatch = async () => {
        setLoading(true);
        setError(null);
        setTraceabilityData(null);
        try {
            const data = await fetchBatchTraceability(batchId);
            setTraceabilityData(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Track Produce Batch</h2>
            <div>
                <label htmlFor="batchId">Enter Batch ID:</label>
                <input
                    type="text"
                    id="batchId"
                    value={batchId}
                    onChange={handleInputChange}
                />
                <button onClick={handleTrackBatch} disabled={loading}>
                    {loading ? 'Tracking...' : 'Track'}
                </button>
            </div>

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {loading && <p>Loading traceability information...</p>}

            {traceabilityData && (
                <div>
                    <h3>Traceability Information for Batch ID: {traceabilityData.batch?.batchId}</h3>
                    {traceabilityData.harvest && (
                        <div>
                            <h4>Harvest Information</h4>
                            <p>Farmer ID: {traceabilityData.harvest.farmerId}</p>
                            <p>Crop Type: {traceabilityData.harvest.cropType}</p>
                            {/* Display other harvest details */}
                        </div>
                    )}
                    {traceabilityData.transferEvents && traceabilityData.transferEvents.length > 0 && (
                        <div>
                            <h4>Transfer Events</h4>
                            <ul>
                                {traceabilityData.transferEvents.map(event => (
                                    <li key={event.eventId}>
                                        Transferred from {event.fromPartyId} ({event.fromPartyType}) to {event.toPartyId} ({event.toPartyType}) on {new Date(event.transferDate).toLocaleDateString()}
                                        {/* Display other transfer event details */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {/* Display other relevant traceability data (processing, sales, etc.) */}
                </div>
            )}
        </div>
    );
};

export default TraceabilityPage;