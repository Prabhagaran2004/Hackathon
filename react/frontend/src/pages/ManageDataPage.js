import React from 'react';
import { useParams, Link } from 'react-router-dom';


const ManageDataPage = () => {
    const { entityType } = useParams();
    const entityTypePlural = `${entityType}s`;

    const getEntities = async () => {
        switch (entityType) {
            case 'farmer': return apiService.getFarmers();
            case 'input': return apiService.getInputs();
            case 'batch': return apiService.getBatches();
            default: return Promise.resolve([]);
        }
    };

    const { data, loading, error } = useFetchData(getEntities, [entityType]);

    if (loading) return <p>Loading {entityTypePlural}...</p>;
    if (error) return <p>Error loading {entityTypePlural}: {error.message}</p>;

    let columns = [];
    switch (entityType) {
        case 'farmer':
            columns = [
                { header: 'Farmer ID', key: 'farmerId' },
                { header: 'Name', key: 'name' },
                { header: 'Contact', key: 'contactInfo.phone' },
            ];
            break;
        case 'input':
            columns = [
                { header: 'Input ID', key: 'inputId' },
                { header: 'Name', key: 'name' },
                { header: 'Category', key: 'category' },
            ];
            break;
        case 'batch':
            columns = [
                { header: 'Batch ID', key: 'batchId' },
                { header: 'Harvest ID', key: 'harvestId' },
                { header: 'Quantity', key: 'quantity' },
                // Add more batch-specific columns
            ];
            break;
        default:
            columns = [];
            break;
    }

    return (
        <div>
            <h2>Manage {entityTypePlural.charAt(0).toUpperCase() + entityTypePlural.slice(1)}</h2>
            <Link to={`/create/${entityType}`}>Add New {entityType.charAt(0).toUpperCase() + entityType.slice(1)}</Link>
            {data && data.length > 0 ? (
                <DataTable columns={columns} data={data} onRowClick={(item) => navigate(`/details/${entityType}/${item.id || item.farmerId || item.inputId || item.batchId}`)} />
            ) : (
                <p>No {entityTypePlural} available.</p>
            )}
        </div>
    );
};

export default ManageDataPage;