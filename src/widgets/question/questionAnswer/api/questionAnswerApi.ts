import baseApi from "@/shared/api/baseApi";
import type { IQuestionAnswerQueryParams, IQuestionAnswerResponse } from "../model/types";

const questionAnswerApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAnswer: builder.query<IQuestionAnswerResponse, IQuestionAnswerQueryParams>({
      query: ({ id }) => `/questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetAnswerQuery } = questionAnswerApi;
