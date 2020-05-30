import { Application, Router } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";
import { quotes } from "./data/quotes.ts";

import { serve } from "https://deno.land/std@v0.50.0/http/server.ts";
import * as flags from "https://deno.land/std@v0.50.0/flags/mod.ts";

const DEFAULT_PORT = 8080;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)) {
  console.error("Port is not a number.");
  Deno.exit(1);
}

const app = new Application();

const router = new Router();

app.use("/api",router);

app.get("/",(ctx)=>{
    return "Deno Quotes API"
});


//Routes

//All Quotes
// 
router.get("/quotes", (ctx) => {
  return { "data": quotes };
});
// Random Quotes
router.get("/random", (ctx) => {
  var randomnum = Math.round(Math.random() * (quotes.length));
  return { "data": quotes[randomnum] };
});
// Quotes limit
router.get("/quotes/:limt",(ctx)=>{
    const count = ctx.req.params.limt > quotes.length ? quotes.length : ctx.req.params.limt;
    const items = [...quotes].sort(() => 0.5 - Math.random()).slice(0, Number(count));
    return {"data":items}
});

await app.run();