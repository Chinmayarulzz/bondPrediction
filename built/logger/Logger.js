"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const fs = require('fs');
const fsPromises = fs.promises;
class ILogger {
    constructor() {
        this.today = new Date();
    }
    error(log) {
        const fileName = "logs/" + "development/" + this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate() + ".txt";
        log = "" + new Date() + '\n' + JSON.stringify(log) + '\n\n';
        fsPromises.appendFile(fileName, log)
            .then(() => {
            console.log(log);
        })
            .catch((e) => {
            console.error(e);
            this.error(e);
        });
    }
    log(log = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = "logs/" + "development/" + this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate() + ".txt";
            log = "" + new Date() + '\n' + JSON.stringify(log) + '\n\n';
            yield fsPromises.appendFile(fileName, log)
                .then(() => {
                console.log(log);
            })
                .catch((e) => {
                this.error("" + new Date() + '\n' + e + '\n');
            });
        });
    }
}
exports.Logger = new ILogger();
