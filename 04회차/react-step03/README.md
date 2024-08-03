## 1. 리코일 설치
npm i recoil

## 2. 리코일 세팅

index.js 에서
1. import {RecoilRoot} from 'recoil';

2.
<RecoilRoot>
<App/>
</RecoilRoot>

## 3. 리코일 상태 생성
js파일 생성해서 atom(상태) 생성

import { atom } from "recoil";

export const counterState = atom({
    key : 'counterState', // 고유한 ID (다른 atom이랑 중복되지 않게)
    default : 0, // 초기 상태 값 
});

## 4. 사용할 컴포넌트에서 import하여 사용