import {http, HttpResponse} from "msw";
import { posts, lives } from "@/mocks/data";

export const handlers = [
  http.get('/posts', () => {
    return HttpResponse.json({resultData: posts});
  }),

  http.get('/posts/:id', ({params}) => {
    const post = posts.find((post) => Number(params.id) === post.id);
    return HttpResponse.json({resultData: post});
  }),

  http.get('/lives', () => {
    return HttpResponse.json({resultData: lives});
  }),
];