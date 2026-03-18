
import EventEmitter from 'events';

const event = new EventEmitter();

event.on("greet", () => {
    console.log("Node Event");
});

event.emit("greet");