
interface ProviderErrorConstr {
   message: string;
   displayMessage: string;
}

export default class ProviderError extends Error {
   public readonly displayMessage: string;
   public readonly isProviderError = true;

   constructor({message, displayMessage}: ProviderErrorConstr ) {
      super(message);
      this.name = 'ProviderError';
      this.displayMessage = displayMessage;
   }
}