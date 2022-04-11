/**
 * These are the shapes of the external grocer service', the return values and the
 * functions. Don't change these. In various IDEs, such as vscode, this will add
 * type information on the fly
 */

type GrocerQuery = {
  fruit: string;
  quantity: number;
};

type GrocerOnSuccess = (quantityOrdered: number) => unknown

type GrocerOnError = (errorMessage: string) => unknown

type FruitPickerSuccess = {
  message: 'SUCCESS'
}

type FruitPickerError = {
  message: 'ERROR'
}

type FruitPickerSuccessCallback = () => SuccessResult;

type FruitPickerErrorCallback = () => ErrorResult;
