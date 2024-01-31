import { rest } from "msw/node";

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ id: 1 }]));
  }),
];
