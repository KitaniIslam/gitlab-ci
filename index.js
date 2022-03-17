const fs = require("fs");

let rawdata = fs.readFileSync(process.env.TRIGGER_PAYLOAD);
let webhook_event = JSON.parse(rawdata);
console.log("=======> env: ", { webhook_event });
