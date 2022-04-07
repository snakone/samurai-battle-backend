"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Sockets {
    constructor() { }
    static start(client, io) {
        console.log('\x1b[95m%s\x1b[0m', 'Client Connected: ' + client.id);
        this.key(client, io);
        this.disconnect(client, io);
    }
    static disconnect(client, io) {
        client.on('disconnect', () => __awaiter(this, void 0, void 0, function* () {
            console.log('\x1b[91m%s\x1b[0m', 'Client Disconnected: ' + client.id + '\n');
        }));
    }
    static key(client, io) {
        client.on('keyDown', (key) => __awaiter(this, void 0, void 0, function* () {
            io.emit('onKeyDown', key);
        }));
        client.on('keyUp', (key) => __awaiter(this, void 0, void 0, function* () {
            io.emit('onKeyUp', key);
        }));
    }
}
exports.default = Sockets;
