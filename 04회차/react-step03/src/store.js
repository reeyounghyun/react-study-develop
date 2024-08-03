import { atom } from "recoil";

export const counterState = atom({
    key : 'counterState', // 고유한 ID (다른 atom이랑 중복되지 않게)
    default : 0, // 초기 상태 값 
});