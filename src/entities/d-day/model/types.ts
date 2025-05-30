export enum Emoji {
  HEART = "HEART",
  CALENDAR = "CALENDAR",
  CAKE = "CAKE",
  TRAVEL = "TRAVEL",
}

export interface Dday {
  id: string;
  emoji: Emoji;
  title: string;
  anniversaryDate: string;
}

// API 함수에 필요한 타입
export interface DdayRequst {
  id: string | null;
  title: string;
  date: string;
}

export interface NewDdayResponse {
  result: boolean;
}

export interface DeleteDdayResponse {
  result: boolean;
}

export interface DDayListResponse {
  data: Dday[];
  after: number;
  count: number;
  isLastPage: boolean;
}

export interface MainDdayListResponse {
  result: Dday[];
}
