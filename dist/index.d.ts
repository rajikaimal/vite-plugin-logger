import { ViteDevServer } from 'vite';

interface LoggerConfig {
    msg: string;
    logLevel: LogLevel;
    excludeReqType: Array<ReqType>;
}
type LogLevel = "info" | "warn" | "error";
type ReqType = "get" | "post" | "patch" | "put" | "delete";
declare const vitePluginLogger: (config: LoggerConfig) => {
    enforce: string;
    name: string;
    apply: string;
    configureServer(server: ViteDevServer): void;
};

export { vitePluginLogger as default };
