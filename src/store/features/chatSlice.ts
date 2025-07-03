import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Message } from "@/models/types";

// const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/chat`;
const API_URL = '/api/chat';

interface ChatState {
  messages: Message[];
  draft: string;
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  messages: [{ role: "bot", text: "Hola, hazme una pregunta" }],
  draft: "",
  loading: false,
  error: null,
};

export const sendMessage = createAsyncThunk<string, string>(
  "chat/sendMessage",
  async (userMessage) => {
    const response = await axios.post(API_URL, { query: userMessage });
    return response.data.answer as string;
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addUserMessage: (state, action: PayloadAction<string>) => {
      state.messages.push({ role: "user", text: action.payload });
    },
    setDraft: (state, action: PayloadAction<string>) => {
      state.draft = action.payload;
    },
    clearChat: (state) => {
      state.messages = [];
      state.draft = "";
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.messages.push({ role: "bot", text: action.payload });
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error desconocido";
      });
  },
});

export const { addUserMessage, setDraft, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
