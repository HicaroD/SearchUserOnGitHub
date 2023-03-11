export type HttpResponse<T = any> = {
  body: T;
  statusCode: number;
};

export interface HttpClient {
  get(
    url: String,
    headers?: Object,
    queryParameters?: Object
  ): Promise<HttpResponse>;
}
