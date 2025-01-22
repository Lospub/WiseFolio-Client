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
        const response = await apiClient.post<User>('/users/signup', { email, name, password });
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
        const response = await apiClient.post<LoginResponse>('/users/login', { email, password });
        return response.data.idToken;
    } catch (error: any) {
        throw error.response?.data?.message || error.message;
    }
};

// Decode ID token
export const decodeIdToken = async (idToken: string): Promise<String> => {
    try {
        const response = await apiClient.post<any>('/users/decode-token', { idToken });
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || error.message;
    }
};

// Fetch user data by ID
export const fetchUserData = async (userId: string): Promise<User> => {
    try {
        const response = await apiClient.get<User>(`/users/${userId}`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || error.message;
    }
};

// Update user data
export const updateUserData = async (
    userId: string,
    newName?: string,
    newPassword?: string
): Promise<User> => {
    try {
        const response = await apiClient.put<User>(
            '/users/update',
            { userId, newName, newPassword }
        );
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || error.message;
    }
};