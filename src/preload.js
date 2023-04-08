const { contextBridge } = require("electron");
const elec = require("electron")
const fs = require('fs')

contextBridge.exposeInMainWorld(
    "api", {
        fs
    }
)

console.log(elec)