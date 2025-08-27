import baseApi from "@/shared/api/baseApi";
import type { IQuestionsQueryParams, IQuestionResponse, IQuestionsResponse, IQuestionQueryParams } from "../model/types";

const questionsListApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getQuestions: builder.query<IQuestionsResponse, IQuestionsQueryParams>({
      query: ({ page, limit, title, specialization, skills, rate }) => ({
        url: "/questions/public-questions",
        params: {
          page,
          limit,
          ...(title && { title }),
          ...(specialization && { specialization }),
          ...(skills && skills.length > 0 && { skills }),
          ...(rate && rate.length > 0 && { rate }),
        },
      }),
    }),
    getQuestion: builder.query<IQuestionResponse, IQuestionQueryParams>({
      query: ({ id }) => `/questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionQuery } = questionsListApi;
