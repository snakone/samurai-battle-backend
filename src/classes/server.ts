import express from 'express';
import { PORT } from '../config/server.config';
import http from 'http';
import socketIO from 'socket.io';
import Sockets from './socket';
import cors from 'cors';

export default class Server {
  public static _instance: Server;
  public app: express.Application;
  public port = PORT;
  public io: socketIO.Server;
  private server: http.Server;

  constructor() {
    this.app = express();
    this.app.set('port', this.port);
    this.server = new http.Server(this.app);
    this.io = require('socket.io')(this.server, {
      cors: {
        origin: "https://samurai-battle.netlify.app",
        methods: ["GET"]
      }
    })
    this.app.use(express.urlencoded({ extended: false }));  // Body Parse
    this.app.use(express.json());
    this.app.use(cors()); 
  }

  public static get instance(): Server {
    return this._instance || (this._instance = new this());
  }

  public listen(callback: () => void) {
    this.server.listen(this.app.get('port'), callback);
    this.io.on('connection', client => Sockets.start(client, this.io));
  }
}