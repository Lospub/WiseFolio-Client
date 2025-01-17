import apiClient from './apiClient';

interface User {
    id: string;
    email: string;
    name: string;
}

interface LoginResponse {
    idToken: string;
}

// Log in a user
export const loginUser = async (
    email: string,
    password: string
): Promise<string> => {
    try {
        const response = await apiClient.post<LoginResponse>('/login', { email, password });
        return response.data.idToken;
    } catch (error: any) {
        throw error.response?.data?.message || error.message;
    }
};
