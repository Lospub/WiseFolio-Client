import apiClient from './apiClient';

export const createSaving = async (saving: {
    user_id: string;
    goal_name: string;
    target_amount: number;
    start_date: string;
    end_date: string;
}) => {
    const response = await apiClient.post('/saving', saving);
    return response.data;
};

export const getSavingsByUserId = async (userId: string) => {
    const response = await apiClient.get(`/saving/user/${userId}`);
    return response.data;
};

export const getSavingById = async (id: string) => {
    const response = await apiClient.get(`/saving/${id}`);
    return response.data;
};

export const updateSaving = async (
    id: string,
    updates: Partial<{
        goal_name: string;
        target_amount: number;
        start_date: string;
        end_date: string;
    }>
) => {
    const response = await apiClient.put(`/saving/${id}`, updates);
    return response.data;
};

export const deleteSaving = async (id: string) => {
    await apiClient.delete(`/saving/${id}`);
};

export const calculateSavedAmount = async (id: string) => {
    const response = await apiClient.get(`/saving/${id}/saved`);
    return response.data;
};
