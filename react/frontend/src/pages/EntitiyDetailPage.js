import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EntityDetailPage = () => {
    const { entityType, id } = useParams();
    const navigate = useNavigate();
    const [entityData, setEntityData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isCreate = !id;

    useEffect(() => {
        const fetchEntity = async () => {
            setLoading(true);
            setError(null);
            try {
                let data;
                switch (entityType) {
                    case 'farmer': data = await apiService.getFarmerById(id); break;
                    case 'input': data = await apiService.getInputById(id); break;
                    case 'batch': data = await apiService.getBatchById(id); break;
                    default: setError('Invalid entity type'); setLoading(false); return;
                }
                setEntityData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        if (id) {
            fetchEntity();
        } else {
            setEntityData({});
            setLoading(false);
        }
    }, [entityType, id]);

    const handleSubmit = async (formData) => {
        try {
            let response;
            switch (entityType) {
                case 'farmer': response = isCreate ? await apiService.createFarmer(formData) : await apiService.updateFarmer(id, formData); break;
                case 'input': response = isCreate ? await apiService.createInput(formData) : await apiService.updateInput(id, formData); break;
                case 'batch': response = isCreate ? await apiService.createBatch(formData) : await apiService.updateBatch(id, formData); break;
                default: throw new Error('Invalid entity type for submission');
            }
            console.log('Success:', response);
            navigate(`/manage/${entityType}s`);
        } catch (err) {
            setError(err.message);
            console.error('Error:', err);
        }
    };

    if (loading) return <p>Loading {entityType} details...</p>;
    if (error) return <p>Error loading {entityType} details: {error.message}</p>;

    let formFields = [];
    switch (entityType) {
        case 'farmer':
            formFields = [
                { label: 'Farmer ID', key: 'farmerId', type: 'text' },
                { label: 'Name', key: 'name', type: 'text' },
                { label: 'Address', key: 'address', type: 'text' },
                { label: 'Phone', key: 'contactInfo.phone', type: 'text' },
                { label: 'Email', key: 'contactInfo.email', type: 'email' },
            ];
            break;
        case 'input':
            formFields = [
                { label: 'Input ID', key: 'inputId', type: 'text' },
                { label: 'Name', key: 'name', type: 'text' },
                { label: 'Category', key: 'category', type: 'select', options: ['Seed', 'Fertilizer', 'Pesticide', 'Other'] },
                { label: 'Brand', key: 'brand', type: 'text' },
            ];
            break;
        case 'batch':
            formFields = [
                { label: 'Batch ID', key: 'batchId', type: 'text' },
                { label: 'Harvest ID', key: 'harvestId', type: 'text' },
                { label: 'Quantity', key: 'quantity', type: 'text' },
                { label: 'Packaging Info', key: 'packagingInfo', type: 'text' },
            ];
            break;
        default:
            formFields = [];
            break;
    }

    return (
        <div>
            <h2>{isCreate ? `Create New ${entityType.charAt(0).toUpperCase() + entityType.slice(1)}` : `View/Edit ${entityType.charAt(0).toUpperCase() + entityType.slice(1)}`}</h2>
            {isCreate || entityData ? (
                <EntityForm fields={formFields} initialValues={entityData} onSubmit={handleSubmit} />
            ) : (
                <p>No data available.</p>
            )}
            {id && entityData && <EntityDetails entityType={entityType} data={entityData} />}
        </div>
    );
};

export default EntityDetailPage;