"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.momentFormatter = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
/**
 * Converts a moment timestamp to a given format
 *
 * @param {MomentInput} TIMESTAMP
 * @param {string} format
 * @return {*}  {string}
 */
const momentFormatter = (TIMESTAMP, format) => {
    return moment_timezone_1.default.tz(Number(TIMESTAMP), 'Asia/Kuala_Lumpur').format(format);
};
exports.momentFormatter = momentFormatter;
