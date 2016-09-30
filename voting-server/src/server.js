import Server from 'socket.io';

export default function startServer() {
  const port = process.env.PORT;
  const io = new Server().attach(port);
  console.log('Socket.io server running on port: ', port);
}