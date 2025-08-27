import baseApi from "@/shared/api/baseApi";
import type { ISkillsResponse } from "../model/types";

const skillsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getSkills: builder.query<ISkillsResponse[], void>({
      query: () => "/skills",
      transformResponse: (response: { data: ISkillsResponse[] }) => response.data,
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;