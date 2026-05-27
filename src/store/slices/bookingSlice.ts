import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BookingState, Tour } from "@/types";

const initialState: BookingState = {
  step: "select",
  selectedTour: null,
  date: null,
  participants: 1,
  notes: "",
  totalPrice: 0,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    selectTour(state, action: PayloadAction<Tour>) {
      state.selectedTour = action.payload;
      state.step = "date";
      state.totalPrice = action.payload.price;
    },
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
      state.step = "participants";
    },
    setParticipants(state, action: PayloadAction<number>) {
      state.participants = action.payload;
      state.totalPrice = state.selectedTour
        ? state.selectedTour.price * action.payload
        : 0;
      state.step = "confirm";
    },
    setNotes(state, action: PayloadAction<string>) {
      state.notes = action.payload;
    },
    confirmBooking(state) {
      state.step = "success";
    },
    resetBooking() {
      return initialState;
    },
  },
});

export const {
  selectTour,
  setDate,
  setParticipants,
  setNotes,
  confirmBooking,
  resetBooking,
} = bookingSlice.actions;
export default bookingSlice.reducer;
