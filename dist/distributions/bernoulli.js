"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../validation");
exports.default = (random, p = 0.5) => {
    (0, validation_1.numberValidator)(p).greaterThanOrEqual(0).lessThan(1);
    return () => {
        return Math.floor(random.next() + p);
    };
};
