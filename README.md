# Deno Quotes API
> *"Nature takes away any faculty that is not used ~ William R. Inge"*

Simple Deno API to return motivational quotes.Built with Denotrain.


## API

Quotes are returned in the following format:

```
{"data":[
  {
    "quoteText": "...",
    "quoteAuthor": "..."
  }
]}
```

### `GET /quotes`

Returns an array of all quotes.

    https://localhost:3000/api/quotes

### `GET /quotes/random`

Returns a single random quote.

    http://localhost:3000/api/random

### `GET /quotes/{num}`

Returns an array of quotes (which are randomized) with length {num}.

    http://localhost:3000/api/quotes/10
(returns 10 random quotes)

## 🚀 Local Development

Start the dev server:

`deno run  --allow-net main.ts`

## Made With ❤️

- [Deno](https://deno.land/)
