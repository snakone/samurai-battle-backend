"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
// import morgan from 'morgan';
const routes_index_1 = __importDefault(require("./routes/routes.index"));
// Server
const server = server_1.default.instance;
// Middlewares
// server.app.use(morgan('dev'));
// Routes
server.app.use(routes_index_1.default);
server.listen(() => {
    console.log('\nNode/Express: \x1b[96m%s\x1b[0m', 'ONLINE');
    console.log('Port: \x1b[93m%s\x1b[0m', +server.app.get('port'));
});
