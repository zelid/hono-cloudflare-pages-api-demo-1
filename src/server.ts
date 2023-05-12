import { Hono } from "hono";
const app = new Hono();

app.get("/", (ctx) => {
  const api = new ChatGPTAPI({
    apiKey: (ctx?.env?.OPENAI_API_KEY || "") as string,
    debug: false,
  });

  return ctx.json({
    status: "ok",
    message: "Here should come ChatGPT API response",
  });
});

// app.get("/public/*", async (ctx) => {
//   return await ctx.env.ASSETS.fetch(ctx.req);
// });

export default app;
