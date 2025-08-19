export interface IButton {
  children: string;
  variant?: "primary" | "transparent";
}

export interface IQuestion {
  id?: number;
  title: string;
  rate: number;
  complexity: number;
  shortAnswer: string;
}