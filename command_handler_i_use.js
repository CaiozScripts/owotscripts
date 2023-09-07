OWOT.on("chat", msg => {       
    if(msg.dataObj.message.includes("!help")) {
		api_chat_send("commands: me ")
	}
})
