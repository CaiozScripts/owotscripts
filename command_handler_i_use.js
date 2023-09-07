OWOT.on("chat", msg => {       
    if(msg.dataObj.message.includes("jau!help")) {
		api_chat_send("some help command lol")
	}
})
