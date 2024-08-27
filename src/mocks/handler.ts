import {http, HttpResponse} from "msw";
import { posts } from "./data/posts";

export const handlers = [
  http.get('/posts', () => {
    return HttpResponse.json({resultData: posts});
  }),
];