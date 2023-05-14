"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProviderError extends Error {
    displayMessage;
    isProviderError = true;
    constructor({ message, displayMessage }) {
        super(message);
        this.name = 'ProviderError';
        this.displayMessage = displayMessage;
    }
}
exports.default = ProviderError;
//# sourceMappingURL=ProviderError.js.map