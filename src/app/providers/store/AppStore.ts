import { configureStore } from "@reduxjs/toolkit";

import baseApi from "@/shared/api/baseApi";
import filtersReducer from "@/widgets/question/questionsFilters/model/filtersSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
