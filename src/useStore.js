import { create } from "zustand";
import { increment } from "./counterSlice";

export const useStore = create((set)=>({
    count: 0,
    increment:()=>set((state)=>({count: state.count+1}))
}))