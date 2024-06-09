import { create } from 'zustand';

type User = {
    created_at: string;
    email: string;
    first_name: string;
    last_name: string;
    has_verified_bvn: boolean;
    has_verified_license: boolean;
    id_number: string;
    is_verified: boolean;
    phone_number: string;
    profile_img_url: string;
    updated_at: string;
    isLoggedIn: boolean;
    setAll: (data: Partial<User>) => void;
}

export const useUserDetails = create<User>((set) => ({
    created_at: '',
    email: '',
    first_name: '',
    last_name: '',
    has_verified_bvn: false,
    has_verified_license: false,
    id_number: '',
    is_verified: false,
    phone_number: '',
    profile_img_url: '',
    updated_at: '',
    isLoggedIn: false,
    setAll: (data) => set((state) => ({ ...state, ...data }))
}))