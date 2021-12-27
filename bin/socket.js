module.exports = (io) => {    
    io.on('connection', (socket) => {
        console.log('New client connected');

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });

        socket.on('sendMessage', (msg) => {
            io.emit('sendMessage', msg);
            console.log('message received: ' + msg);
        });
    });
}
