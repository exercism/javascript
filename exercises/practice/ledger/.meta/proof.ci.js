class LedgerEntry {
  constructor(date, description, change) {
    this.date = new Date(date);
    this.description = description;
    this.change = change;
  }
}

const headerRow = (locale) =>
  locale === 'en-US'
    ? `${`Date`.padEnd(10, ` `)} | ${`Description`.padEnd(
        25,
        ` `,
      )} | ${`Change`.padEnd(13, ` `)}`
    : `${`Datum`.padEnd(10, ` `)} | ${`Omschrijving`.padEnd(
        25,
        ` `,
      )} | ${`Verandering`.padEnd(13, ` `)}`;

export const createEntry = (date, description, change) =>
  new LedgerEntry(date, description, change);

export function formatEntries(currency, locale, entries) {
  // Generate Header Row
  let table = headerRow(locale);
  // Set Formatting Options
  let formattingOptions = {
    style: 'currency',
    currency: currency,
    currencySign: locale === 'en-US' ? 'accounting' : 'standard',
    currencyDisplay: locale === 'en-US' ? 'symbol' : 'narrowSymbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  // Sort Entries
  entries.sort(
    (a, b) =>
      a.date - b.date ||
      a.change - b.change ||
      a.description.localeCompare(b.description),
  );
  // Writing each entry to table
  entries.forEach((entry) => {
    table += '\n';
    // Write entry date to table
    table += `${entry.date.toLocaleDateString(locale, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })} | `;
    // Write entry description to table
    let truncatedDescription =
      entry.description.length > 25
        ? `${entry.description.substring(0, 22)}...`
        : entry.description.padEnd(25, ' ');
    table += `${truncatedDescription} | `;
    // Write entry change to table
    let changeStr = (entry.change / 100).toLocaleString(
      locale,
      formattingOptions,
    );
    let trailingSpace = changeStr.includes(')') ? '' : ' ';
    table += `${changeStr}${trailingSpace}`.padStart(13, ' ');
  });

  return table;
}
