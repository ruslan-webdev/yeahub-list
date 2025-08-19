import baseApi from "@/shared/api/baseApi";
import type { ISpecialization } from "../model/types";

const specializationsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getSpecializations: builder.query<ISpecialization[], void>({
      query: () => "/specializations",
      transformResponse: (response: { data: ISpecialization[] }) => response.data
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;