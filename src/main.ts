#!/usr/bin/env node

import { off, on } from "./notification";

const argc = process.argv.splice(2);

if (argc.length != 1) {
  console.log("shit happens");
  process.exit(1);
}

const inputNumber = argc[0];

if (!/^\d+$/.test(inputNumber)) {
  console.error(`Invalid input ${inputNumber}`);
  process.exit(1);
}

const second = 1000; // 1 second = 1000 miliseconds
const minutes = parseInt(inputNumber) * second; //How long in minutes, user want to turn off notifications

// Make sure notification is off first
off();

// Turn on the notification back after x minutes
setTimeout(on, minutes);
