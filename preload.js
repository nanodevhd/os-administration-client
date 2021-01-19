const { io } = require("socket.io-client");
const { Server } = require("socket.io");
const port = 35987;
const socket = io("ws://localhost:60371")
const sio = new Server(port, {
    pingInterval: 7500,
    pingTimeout: 17500,
    cors: {
        origin: "*",
        methods: "*"
    }
})
sio.on("connect", (socket) => {
    console.log("User connected")
    socket.on("website", (data) => {
        console.warn(`He's in this website ${data}`)
    })
    socket.on("disconnect", () => {
        console.log("User disconnected!")
    })
})
socket.on("connect", () => {
    console.log(`connected`);
});
socket.on("uuid", (data) => {
    console.log(data)
})
console.log("Working:")
console.warn(socket)