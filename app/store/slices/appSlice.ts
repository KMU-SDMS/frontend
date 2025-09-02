import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppState = {
  theme: "light" | "dark" | "system";
  userName?: string;
};

const initialState: AppState = {
  theme: "system",
  userName: undefined,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<AppState["theme"]>) {
      state.theme = action.payload;
    },
    setUserName(state, action: PayloadAction<string | undefined>) {
      state.userName = action.payload;
    },
  },
});

export const { setTheme, setUserName } = appSlice.actions;
export default appSlice.reducer;
