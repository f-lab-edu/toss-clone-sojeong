import {http, HttpResponse} from "msw";
import { posts, lives } from "@/mocks/data";

export const handlers = [
  http.get('/posts', () => {
    return HttpResponse.json({resultData: posts});
  }),
  http.get('/lives', () => {
    return HttpResponse.json({resultData: lives});
  }),
];