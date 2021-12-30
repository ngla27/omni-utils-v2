"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTimestamp = void 0;
/**
 * Creates the timestamp for the current day
 *
 * @return {*}  {number}
 */
const generateTimestamp = () => {
    return Date.now();
};
exports.generateTimestamp = generateTimestamp;
