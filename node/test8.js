var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on("testEvent", function() {
    console.log("testEvent");
});
event.addEvent("test2Event", function() {
    console.log("test2Event");
});
setTimeout(function() {
    event.emit("testEvent");
}, 1000);
setTimeout(function() {
    event.emit("test1Event");
}, 2000);
/*
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on("event1", function() {
    console.log("event1");
});
event.on("event1", function() {
    console.log("event2");
});

event.emit("event1");
//event.emit("event1");
console.log(EventEmitter.listenerCount(event,"event1"));
*/

//事件
/*
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.addListener("testEvent", function() {
    console.log("testEvent");
});
event.addListener("testEvent", function() {
    console.log("testEvent");
});

var l2 = function() {
    console.log("testEvent");
};
event.on("testEvent", l2);


event.emit("testEvent");
console.log(EventEmitter.listenerCount(event, "testEvent"));

event.removeListener("testEvent", l2);
console.log(EventEmitter.listenerCount(event, "testEvent"));*/