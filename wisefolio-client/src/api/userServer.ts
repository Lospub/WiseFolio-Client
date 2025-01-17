import apiClient from './apiClient';

interface User {
    id: string;
    email: string;
    name: string;
}

interface LoginResponse {
    idToken: string;
}

// Sign up
export const registerUser = async (
    email: string,
    name: string,
    password: string
): Promise<User> => {
    try {
        const response = await apiClient.post<User>('/signup', { email, name, password });
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || error.message;
    }
};

// Log in
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
