import {http, HttpResponse} from "msw";
import { posts } from "./data/posts";

export const handlers = [
  http.get('http://localhost:3000/posts', () => {
    return HttpResponse.json(posts);
  }),
];