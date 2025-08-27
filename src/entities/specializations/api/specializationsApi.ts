import baseApi from "@/shared/api/baseApi";
import type { ISpecializationsResponse } from "../model/types";

const specializationsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getSpecializations: builder.query<ISpecializationsResponse[], void>({
      query: () => "/specializations",
      transformResponse: (response: { data: ISpecializationsResponse[] }) => response.data,
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
