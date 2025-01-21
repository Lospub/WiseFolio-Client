import apiClient from './apiClient';

export const createBudget = async (budget: {
    user_id: string;
    category: string;
    amount: number;
    start_date: string;
    end_date: string;
}) => {
    const response = await apiClient.post('/budgets', budget);
    return response.data;
};

export const getBudgetsByUserId = async (userId: string) => {
    const response = await apiClient.get(`/budgets/user/${userId}`);
    return response.data;
};

export const getBudgetById = async (id: string) => {
    const response = await apiClient.get(`/budgets/${id}`);
    return response.data;
};

export const updateBudget = async (
    id: string,
    updates: Partial<{
        category: string;
        amount: number;
        start_date: string;
        end_date: string;
    }>
) => {
    const response = await apiClient.put(`/budgets/${id}`, updates);
    return response.data;
};

export const deleteBudget = async (id: string) => {
    await apiClient.delete(`/budgets/${id}`);
};

export const calculateBudgetSpent = async (id: string) => {
    const response = await apiClient.get(`/budgets/${id}/spent`);
    return response.data;
};
