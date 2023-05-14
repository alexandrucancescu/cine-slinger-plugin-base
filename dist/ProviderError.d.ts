interface ProviderErrorConstr {
    message: string;
    displayMessage: string;
}
export default class ProviderError extends Error {
    readonly displayMessage: string;
    readonly isProviderError = true;
    constructor({ message, displayMessage }: ProviderErrorConstr);
}
export {};
