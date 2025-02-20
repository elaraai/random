"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../validation");
exports.default = (random, min = 0, max = 1) => {
    if (max === undefined) {
        max = min === undefined ? 1 : min;
        min = 0;
    }
    (0, validation_1.numberValidator)(min).isInt();
    (0, validation_1.numberValidator)(max).isInt();
    return () => {
        return Math.floor(random.next() * (max - min + 1) + min);
    };
};
