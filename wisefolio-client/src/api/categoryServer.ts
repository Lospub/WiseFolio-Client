import apiClient from './apiClient';

export const getCategories = async (): Promise<{ id: string; name: string }[]> => {
    const response = await apiClient.get('/categories');
    return response.data;
};

export const getCategoryById = async (id: string): Promise<{ id: string; name: string }> => {
    const response = await apiClient.get(`/categories/${id}`);
    return response.data;
};

export const createCategory = async (category: { id: string; name: string }) => {
    const response = await apiClient.post('/categories', category);
    return response.data;
};

export const updateCategory = async (
    id: string,
    name: string
): Promise<{ id: string; name: string }> => {
    const response = await apiClient.put(`/categories/${id}`, { name });
    return response.data;
};

export const deleteCategory = async (id: string): Promise<void> => {
    await apiClient.delete(`/categories/${id}`);
};
