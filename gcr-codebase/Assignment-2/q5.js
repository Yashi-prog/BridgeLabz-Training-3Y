let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check security conditions
let isHomeSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

if (isHomeSecure) {
    console.log("Home is Secure");
} else {
    console.log("Home is Not Secure");
}

// Testing another condition
isDoorLocked = false;

isHomeSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

console.log("After Unlocking Door:", isHomeSecure);