class LedgerEntry {
  constructor() {
    this.date = undefined;
    this.description = undefined;
    this.change = undefined;
  }
}

export function createEntry(date, description, change) {
  let entry = new LedgerEntry();
  entry.date = new Date(date);
  entry.description = description;
  entry.change = change;
  return entry;
}

export function formatEntries(currency, locale, entries) {
  let table = '';
  if (locale === 'en-US') {
    // Generate Header Row
    table +=
      'Date'.padEnd(10, ' ') +
      ' | ' +
      'Description'.padEnd(25, ' ') +
      ' | ' +
      'Change'.padEnd(13, ' ') +
      '\n';

    // Sort entries
    entries.sort(
      (a, b) =>
        a.date - b.date ||
        a.change - b.change ||
        a.description.localeCompare(b.description),
    );

    entries.forEach((entry) => {
      // Write entry date to table
      const dateStr = `${(entry.date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${entry.date
        .getDate()
        .toString()
        .padStart(2, '0')}/${entry.date.getFullYear()}`;
      table += `${dateStr} | `;

      // Write entry description to table
      const truncatedDescription =
        entry.description.length > 25
          ? `${entry.description.substring(0, 22)}...`
          : entry.description.padEnd(25, ' ');
      table += `${truncatedDescription} | `;

      // Write entry change to table
      let changeStr = '';
      if (currency === 'USD') {
        let formatingOptions = {
          style: 'currency',
          currency: 'USD',
          //currencySign: 'accounting',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        };
        if (entry.change < 0) {
          changeStr = `(${Math.abs(entry.change / 100).toLocaleString(
            'en-US',
            formatingOptions,
          )})`;
        } else {
          changeStr = `${(entry.change / 100).toLocaleString(
            'en-US',
            formatingOptions,
          )} `;
        }
      } else if (currency === 'EUR') {
        let formatingOptions = {
          style: 'currency',
          currency: 'EUR',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        };
        if (entry.change < 0) {
          changeStr = `(${Math.abs(entry.change / 100).toLocaleString(
            'en-US',
            formatingOptions,
          )})`;
        } else {
          changeStr = `${(entry.change / 100).toLocaleString(
            'en-US',
            formatingOptions,
          )} `;
        }
      }
      table += changeStr.padStart(13, ' ');
      table += '\n';
    });
  } else if (locale === 'nl-NL') {
    // Generate Header Row
    table +=
      'Datum'.padEnd(10, ' ') +
      ' | ' +
      'Omschrijving'.padEnd(25, ' ') +
      ' | ' +
      'Verandering'.padEnd(13, ' ') +
      '\n';

    // Sort entries
    entries.sort(
      (a, b) =>
        a.date - b.date ||
        a.change - b.change ||
        a.description.localeCompare(b.description),
    );

    entries.forEach((entry) => {
      // Write entry date to table
      const dateStr = `${entry.date.getDate().toString().padStart(2, '0')}-${(
        entry.date.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${entry.date.getFullYear()}`;
      table += `${dateStr} | `;

      // Write entry description to table
      const truncatedDescription =
        entry.description.length > 25
          ? `${entry.description.substring(0, 22)}...`
          : entry.description.padEnd(25, ' ');
      table += `${truncatedDescription} | `;

      // Write entry change to table
      let changeStr = '';
      if (currency === 'USD') {
        let formatingOptions = {
          style: 'currency',
          currency: 'USD',
          currencyDisplay: 'narrowSymbol',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        };
        changeStr = `${(entry.change / 100).toLocaleString(
          'nl-NL',
          formatingOptions,
        )} `;
      } else if (currency === 'EUR') {
        let formatingOptions = {
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'narrowSymbol',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        };
        changeStr = `${(entry.change / 100).toLocaleString(
          'nl-NL',
          formatingOptions,
        )} `;
      }
      table += changeStr.padStart(13, ' ');
      table += '\n';
    });
  }
  return table.replace(/\n$/, '');
}
