interface IQuestionSkills {
  id: number;
  title: string;  
}

interface IQuestionCreatedBy {
  username: string;
}

export interface IQuestionAnswerResponse {
  id: number;
  title: string;
  description: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  complexity: number;
  rate: number;
  questionSkills: IQuestionSkills[];
  createdBy: IQuestionCreatedBy;
}

export interface IQuestionAnswerQueryParams {
  id: string | undefined;
}

export interface TitleAnswerProps {
  title: string;
  description: string;
}

export interface ShortAnswerProps {
  shortAnswer: string;
}

export interface DetailedAnswerProps {
  longAnswer: string;
}

export interface MetaInfoProps {
  rate: number;
  complexity: number;
  questionSkills: IQuestionSkills[];
  keywords: string[];
  createdBy: string;
}