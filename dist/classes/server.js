"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_config_1 = require("../config/server.config");
const http_1 = __importDefault(require("http"));
const socket_1 = __importDefault(require("./socket"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.port = server_config_1.PORT;
        this.app = (0, express_1.default)();
        this.app.set('port', this.port);
        this.server = new http_1.default.Server(this.app);
        this.io = require('socket.io')(this.server, {
            cors: {
                origin: "https://samurai-battle.netlify.app",
                methods: ["GET"]
            }
        });
        this.app.use(express_1.default.urlencoded({ extended: false })); // Body Parse
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    listen(callback) {
        this.server.listen(this.app.get('port'), callback);
        this.io.on('connection', client => socket_1.default.start(client, this.io));
    }
}
exports.default = Server;
