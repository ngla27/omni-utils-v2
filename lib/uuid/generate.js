"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUUID = exports.generateBuffer = void 0;
const binary_uuid_1 = __importDefault(require("binary-uuid"));
/**
 * Generates new buffer
 *
 * @return {*}  {Buffer}
 */
const generateBuffer = () => {
    return (0, binary_uuid_1.default)().buffer;
};
exports.generateBuffer = generateBuffer;
/**
 * Generates new uuid
 *
 * @return {*}  {string}
 */
const generateUUID = () => {
    return (0, binary_uuid_1.default)().uuid;
};
exports.generateUUID = generateUUID;
