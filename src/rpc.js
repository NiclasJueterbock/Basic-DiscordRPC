var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "DETAILS",
            state: "STATE",
            assets : {
                large_image : "IMAGE_NAME",
                large_text : "YOUR_TEXT",
                small_image : "IMAGE_NAME",
                small_text : "YOUR_TEXT"
            }, buttons : [
                    {label : "YOUR_LABEL" , url : "YOUR_URL"},
                    {label : "YOUR_LABEL" , url : "YOUR_URL"}
            ]
        }
    })
})
client.login({ clientId : "YOUR_CLIENT_ID" }).catch(console.error);
console.log("DiscordRPC Started!");