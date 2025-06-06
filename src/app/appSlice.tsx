import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";
// import { RenderModal } from "@/utils/renderHelper";

interface reducerState {
  refresh: boolean;
  isLogin: boolean;
  loadingLogin: boolean;
  loading: number;
  nameAccount: string;
  playingSong: any;
}

const initialState: reducerState = {
  refresh: true,
  isLogin: false,
  loadingLogin: true,
  loading: 0,
  nameAccount: "",
  playingSong: null,
};

let setTime1: any;
let setTime2: any;
let setTime3: any;
let setTime4: any;
let setTime5: any;
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    loadingCallAPI: (state) => {
      setTime1 = setTimeout(() => {
        state.loading = 25;
      }, 200);
      setTime2 = setTimeout(() => {
        state.loading = 50;
      }, 400);
      setTime3 = setTimeout(() => {
        state.loading = 75;
      }, 600);
      setTime4 = setTimeout(() => {
        state.loading = 90;
      }, 800);
      setTime5 = setTimeout(() => {
        state.loading = 100;
      }, 20000);
    },
    finishLoad: (state) => {
      clearTimeout(setTime1);
      clearTimeout(setTime2);
      clearTimeout(setTime3);
      clearTimeout(setTime4);
      clearTimeout(setTime5);
      state.loading = 100;
    },
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
    },
    loadingLoginAPI: (state, action: PayloadAction<boolean>) => {
      state.loadingLogin = action.payload;
    },
    setNameAccount: (state, action: PayloadAction<string>) => {
      state.nameAccount = action.payload;
    },
    setPlayingSong: (state, action: PayloadAction<any>) => {
      state.playingSong = action.payload;
    },
  },
});

export default appSlice;
