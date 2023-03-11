import axios from "axios";
import {
  HttpClient,
  HttpResponse,
} from "../../../data/contracts/http_client/http_client.contract";

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly baseUrl: string) {}

  async get(
    url: string,
    headers?: Object,
    queryParameters?: Object
  ): Promise<HttpResponse> {
    const endpointUrl = `${this.baseUrl}${url}`;
    const requestData = {
      method: "GET",
      url: endpointUrl,
      params: queryParameters ?? {},
      headers: headers ?? {},
    };
    const response = await this.doRequest(requestData);
    return response;
  }

  private async doRequest(options: Object): Promise<HttpResponse> {
    const response = await axios.request(options);
    return { body: response.data, statusCode: response.status };
  }
}
