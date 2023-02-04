# vite-plugin-logger

## Install

```
$ npm i -D vite-plugin-logger
```

## Usage

```js
import { defineConfig } from "vite";
import { vitePluginLogger } from "vite-plugin-logger";

export default defineConfig({
  plugins: [
    viteLogger({
      msg: "LOG",
      logLevel: "info",
      excludeReqType: ["DELETE"],
    }),
  ],
});
```

MIT
