import { ViteDevServer, PluginOption } from "vite";

interface LoggerConfig {
  msg: string;
  logLevel: LogLevel;
  excludeReqType: Array<ReqType>;
}

type LogLevel = "info" | "warn" | "error";
type ReqType = "get" | "post" | "patch" | "put" | "delete";

const vitePluginLogger = (config: LoggerConfig): PluginOption => {
  return {
    enforce: "post",
    name: "vite-logger",
    apply: "serve",
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        // ignore for requests specified in excludeReqType
        if (
          req.method &&
          config.excludeReqType.find(
            (type) => type === req.method?.toLowerCase()
          )
        ) {
          return;
        }

        const logLevel: LogLevel = config.logLevel ? config.logLevel : "info";

        if (logLevel === "info") {
          server.config.logger.info(config.msg);
        } else if (logLevel === "warn") {
          server.config.logger.warn(config.msg);
        } else if (logLevel === "error") {
          server.config.logger.error(config.msg);
        }
      });
    },
  };
};

export default vitePluginLogger;
