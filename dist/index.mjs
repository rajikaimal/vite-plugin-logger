// index.ts
var vitePluginLogger = (config) => {
  return {
    enforce: "post",
    name: "vite-logger",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method && config.excludeReqType.find(
          (type) => {
            var _a;
            return type === ((_a = req.method) == null ? void 0 : _a.toLowerCase());
          }
        )) {
          return;
        }
        const logLevel = config.logLevel ? config.logLevel : "info";
        if (logLevel === "info") {
          server.config.logger.info(config.msg);
        } else if (logLevel === "warn") {
          server.config.logger.warn(config.msg);
        } else if (logLevel === "error") {
          server.config.logger.error(config.msg);
        }
      });
    }
  };
};
var vite_plugin_logger_default = vitePluginLogger;
export {
  vite_plugin_logger_default as default
};
