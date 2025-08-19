import baseApi from "@/shared/api/baseApi";
import type { ISkill } from "../model/types";

const skillsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getSkills: builder.query<ISkill[], void>({
      query: () => "/skills",
      transformResponse: (response: { data: ISkill[] }) => response.data,
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;