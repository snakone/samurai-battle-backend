import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export default class Sockets {

  constructor() { }

  public static start(client: Socket, io: socketIO.Server): void {
    console.log('\x1b[95m%s\x1b[0m', 'Client Connected: ' + client.id);
    this.key(client, io);
    this.disconnect(client, io);
  }

  public static disconnect(client: Socket, io: socketIO.Server): void {
    client.on('disconnect', async () => {
      console.log('\x1b[91m%s\x1b[0m', 'Client Disconnected: ' + client.id + '\n');
    })
  }

  public static key(client: Socket, io: socketIO.Server): void {
    client.on('keyDown', async (key: string) => {
      io.emit('onKeyDown', key)
    });

    client.on('keyUp', async (key: string) => {
      io.emit('onKeyUp', key)
    });
  }

}