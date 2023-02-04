# vite-plugin-logger

## Install

```
$ npm i -D vite-plugin-logger
```

## Usage

```js
import { defineConfig } from "vite";
import viteLogger from "vite-plugin-logger";

export default defineConfig({
  plugins: [
    viteLogger({
      msg: "LOGGING MSG",
      logLevel: "info",
      excludeReqType: ["DELETE"],
    }),
  ],
});
```

MIT
