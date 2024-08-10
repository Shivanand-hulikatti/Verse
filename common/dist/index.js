"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostInput = exports.createPostInput = exports.signInInput = exports.signUpInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string(),
});
exports.signInInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.createPostInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    publishedDate: zod_1.default.string(),
});
exports.updatePostInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.string(),
});
