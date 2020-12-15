export class ResponseModel<T> {
  data: T[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}
