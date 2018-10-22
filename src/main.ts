#!/usr/bin/env screen node

import * as moment from "moment";
import { off, on } from "./notification";

const argc = process.argv.splice(2);

if (argc.length < 1) {
  console.log("invalid argumets");
  process.exit(1);
}

const time = argc[0];
const unit = argc[1] as moment.DurationInputArg2;

if (!/^\d+$/.test(time)) {
  console.error(`Invalid input ${time}`);
  process.exit(1);
}

const parsedTime = parseInt(time);

const duration = moment.duration(parsedTime, unit);
const durationInMilliseconds = duration.as("millisecond");

// Make sure notification is off first
off();

console.log(
  `"DO NOT DISTURB" mode activated
    You will not receive notification for the next ${time} ${unit}.
    After that, your notification will be turned on again.
    ${duration}

    You can also close this terminal if you want`
);

// Turn on the notification back after x minutes
setTimeout(on, durationInMilliseconds);
