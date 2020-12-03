var websocketGame = {
}
// init script when the DOM is ready.
var supportsWebSockets = 'WebSocket' in window || 'MozWebSocket' in window;
$(() => {
 // check if existence of WebSockets in browser
 if (supportsWebSockets) {

 // create connection
 websocketGame.socket = new WebSocket("ws://127.0.0.1:8000");

 // on open event
 websocketGame.socket.onopen = e => {
 console.log('WebSocket connection established.');
 };

 // on close event
 websocketGame.socket.onclose = e => {
 console.log('WebSocket connection closed.');
 };
 //on message event
 websocketGame.socket.onmessage = function(e) {
  console.log(e.data);
 };
 }
});

