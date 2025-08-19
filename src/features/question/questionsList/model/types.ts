import type { IQuestion } from "@/shared/model/types";

export interface IQuestionsResponse {
  data: IQuestion[];
  page: number;
  limit: number;
  total: number;
}

export interface IQueryParams {
  page: number;
  limit: number;
  title: string;
  specialization: number | null;
  rate: number[];
  skills: number[];
  complexity: string[];
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}