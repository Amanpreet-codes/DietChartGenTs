import {create} from "zustand";
import { persist } from "zustand/middleware";
import type { ActivityLevel } from "./Constants";

type UserData ={
    age: number | null;
    gender: string;
    heightCm: number | null;
    weight: number | null;
    activityLevel: ActivityLevel | null;
    goal: string;
    BMR: number | null;
    goalCals: number | null;
    preference: string;

    setUserData: (data: Omit<UserData, 'setUserData' | 'updateUserData'>) => void;
    updateUserData: (updates: Partial<Omit<UserData, 'setUserData' | 'updateUserData'>>) => void;

}

const useUserData = create<UserData>()(persist(
    (set) => ({
    age: null,
    gender: "",
    heightCm: null,
    weight: null,
    activityLevel: null,
    goal: "",
    BMR: null,
    goalCals: null,
    preference: "",

    setUserData: (data) => set(data),
    updateUserData: (updates) => set((state) => ({...state, ...updates})),
})
,{name: "Tdee"}));

export default useUserData;

