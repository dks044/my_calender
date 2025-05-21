import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { DateState } from "../types/date";

const initialState: DateState = {
  currentDate: dayjs().format("YYYY-MM-DD"),
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.currentDate = action.payload;
    },
    movePrevWeek: (state) => {
      state.currentDate = dayjs(state.currentDate)
        .subtract(7, "day")
        .format("YYYY-MM-DD");
    },
    moveNextWeek: (state) => {
      state.currentDate = dayjs(state.currentDate)
        .add(7, "day")
        .format("YYYY-MM-DD");
    },
    moveToday: (state) => {
      state.currentDate = dayjs().format("YYYY-MM-DD");
    },
  },
});

export const { setDate, movePrevWeek, moveNextWeek, moveToday } =
  dateSlice.actions;
export default dateSlice.reducer;
