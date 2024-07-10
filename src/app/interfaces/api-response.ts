export interface ApiResponse<T> {
    items: T[];
    hasNext: boolean;
  }