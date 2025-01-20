import apiClient from './apiClient';

export const createExpense = async (expense: {
    user_id: string;
    description: string;
    amount: number;
    category: string;
    date: string;
}) => {
    const response = await apiClient.post('/expenses', expense);
    return response.data;
};

export const getExpensesByUserId = async (userId: string) => {
    const response = await apiClient.get(`/expenses/user/${userId}`);
    return response.data;
};

export const getExpenseById = async (id: string) => {
    const response = await apiClient.get(`/expenses/${id}`);
    return response.data;
};

export const updateExpense = async (
    id: string,
    updates: Partial<{
        description: string;
        amount: number;
        category: string;
        date: string;
    }>
) => {
    const response = await apiClient.put(`/expenses/${id}`, updates);
    return response.data;
};

export const deleteExpense = async (id: string) => {
    await apiClient.delete(`/expenses/${id}`);
};
