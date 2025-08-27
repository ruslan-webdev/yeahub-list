import type { ISkillsResponse } from "@/entities/skills/model/types";
import type { IQuestion } from "../../questionItem/model/types";

export interface IQuestionsResponse {
  data: IQuestion[];
  page: number;
  limit: number;
  total: number;
}

export interface IQuestionsQueryParams {
  page: number;
  limit: number;
  title: string | null;
  specialization: number | null;
  skills: number[];
  rate: number[];
}

export interface IQuestionResponse {
  id: number;
  title: string;
  description: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  rate: number;
  complexity: number;
  questionSkills: ISkillsResponse[];
}

export interface IQuestionQueryParams {
  id: string | undefined;
}