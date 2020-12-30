/**
 * These are the shapes of the external grocer service', the return values and the
 * functions. Don't change these. In various IDEs, such as vscode, this will add
 * type information on the fly
 */

type Status = 'OFFLINE' | 'ONLINE';
type AvailabilityAction = 'NOOP' | 'PURCHASE';

interface CheckStatus {
  callback: StatusCallback;
}

type StatusCallback = (response: Status) => boolean;

interface CheckInventory {
  query: GrocerQuery;
  callback: InventoryCallback;
}

type GrocerQuery = {
  variety: string;
  quantity: number;
};

type InventoryCallback = (
  err: string | null,
  isAvailable: boolean
) => AvailabilityAction;
