import Server from 'socket.io';

export default function startServer(store) {
  const port = 8090;
  const io = new Server().attach(port);
  
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );
  
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispach.bind(store));
  });
  
  console.log('Socket.io server running on port: ', port);
  
}