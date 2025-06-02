/**
 * These are the shapes of the external service', the return values and the
 * functions. Don't change these. In various IDEs, such as vscode, this will add
 * type information on the fly
 */

interface ExternalApi {
  fetch: fetchTranslation;
  request: requestTranslation;
}

interface Translation {
  translation: string;
  quality: number;
}

type fetchTranslation = (text: string) => Promise<Translation>;
type requestTranslation = (
  text: string,
  callback: (err?: Error) => void,
) => void;
