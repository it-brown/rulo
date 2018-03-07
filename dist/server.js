"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var sourceMapSupport = require("source-map-support");
var server = express();
var port = 3000;
// このディレクトリ以下を公開するサーバーを起動
sourceMapSupport.install();
server.use(express.static("./"));
server.listen(port, null);
//# sourceMappingURL=server.js.map