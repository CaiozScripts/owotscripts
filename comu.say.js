const old = w.socket.onmessage;
w.broadcastReceive();
 
w.socket.onmessage = (msg) => {
    old(msg);
    var data = JSON.parse(msg.data);
    
    if (data.kind !== "cmd") return;
    var nick = data.username ? data.username : "";
    
    if (data.data === "click") return;
    if (data.data.startsWith("nametag") ) return;
    else if (data.data.startsWith("say") ) {
        api_chat_send(`${data.data.substring(4)}`);
    }
};
