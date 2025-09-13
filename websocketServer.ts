import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("Client connected");

  ws.on("message", function message(data) {
    console.log("received:", data.toString());

    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(data.toString()); // ✅ send the received message, not the function
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });

  // Send a welcome message to the newly connected client
  ws.send("Welcome to the WebSocket server!");
});

console.log("WebSocket server started on ws://localhost:8080");
