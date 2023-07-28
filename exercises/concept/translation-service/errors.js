export class NotAvailable extends Error {
  constructor(text) {
    super(
      `
The requested text "${text}" has not been translated yet.
    `.trim(),
    );
  }
}

export class AbusiveClientError extends Error {
  constructor() {
    super(
      `
Your client has been rejected because of abusive behaviour.

naDevvo’ yIghoS!
    `.trim(),
    );
  }
}

export class Untranslatable extends Error {
  constructor() {
    super('jIyajbe’');
  }
}
