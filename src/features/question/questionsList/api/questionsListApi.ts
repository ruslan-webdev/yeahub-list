import baseApi from "@/shared/api/baseApi";
import type { IQueryParams, IQuestionsResponse } from "../model/types";

const questionsListApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getQuestions: builder.query<IQuestionsResponse, IQueryParams>({
      query: ({ page, limit, title, specialization, rate, skills, complexity }) => ({
        url: "/questions/public-questions",
        params: {
          page,
          limit,
          ...(title && { title }),
          ...(specialization && { specialization }),
          ...(rate && rate.length > 0 && { rate }),
          ...(skills && skills.length > 0 && { skills }),
          ...(complexity && complexity.length > 0 && { complexity }),
        },
      }),
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsListApi;
