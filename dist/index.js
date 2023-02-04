"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var vite_plugin_logger_exports = {};
__export(vite_plugin_logger_exports, {
  default: () => vite_plugin_logger_default
});
module.exports = __toCommonJS(vite_plugin_logger_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
