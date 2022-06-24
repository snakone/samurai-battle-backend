import Server from './classes/server';
// import morgan from 'morgan';
import ROUTES from "./routes/routes.index";

// Server
const server = Server.instance;

// Middlewares
// server.app.use(morgan('dev'));

// Routes
server.app.use(ROUTES);

server.listen(() => {
  console.log('\nNode/Express: \x1b[96m%s\x1b[0m', 'ONLINE');
  console.log('Port: \x1b[93m%s\x1b[0m', + server.app.get('port'));
});