export type HttpResponse<T = any> = {
  body: T;
  statusCode: number;
};

export interface HttpClient {
  get(
    url: String,
    headers?: Map<String, String>,
    queryParameters?: Map<String, String>
  ): Promise<HttpResponse>;
}
