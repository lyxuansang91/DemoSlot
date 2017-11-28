var ByteBuffer = require("bytebuffer.js");

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

        var ByteBuffer = require("bytebuffer");
        var bb = new ByteBuffer()
            .writeIString("Hello world!")
            .flip();
        console.log(bb.readIString()+" from bytebuffer.js");

        var bb = new ByteBuffer().writeIString("Hello, World").flip();
        console.log(bb.readIString()+" from bytebuffer.js");
        
        var ws = new WebSocket("ws://14.225.2.111:1280/megajackpot");

        ws.onopen = function (event) {
            console.log("Web socket");
        };
        ws.onclose = function (event) {
            console.log("Websocket instance was closed");
        };

        ws.onmessage = function (event) {
            console.log("response text msg:" + event.data);
        };

        setTimeout(function () {
            if(ws.readyState == WebSocket.OPEN) {
                ws.send("1234432");
            } else {
                console.log("Web socket instance wasn't ready");
                }
        }, 3);
    },

    playgame: function() {

    },
    playgame2: function() {

    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
