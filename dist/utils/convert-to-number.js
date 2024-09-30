"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToNumber = convertToNumber;
function convertToNumber(input) {
    const number = +input;
    return isNaN(number) ? undefined : number;
}
//# sourceMappingURL=convert-to-number.js.map