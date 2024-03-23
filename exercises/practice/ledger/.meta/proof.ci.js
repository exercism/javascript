class LedgerEntry {
  constructor(date, description, change) {
    this.date = new Date(date);
    this.description = description;
    this.change = change;
  }
}

class FormattedLedgerEntry {
  constructor(entry, locale, dateFormat, currencyFormat) {
    this.entry = entry;
    this.locale = locale;
    this.dateFormat = dateFormat;
    this.currencyFormat = currencyFormat;
  }

  date() {
    return this.entry.date.toLocaleDateString(this.locale, this.dateFormat);
  }

  description(length = 25) {
    if (this.entry.description.length > length) {
      return `${this.entry.description.substring(0, length - 3)}...`;
    }

    return this.entry.description.padEnd(length, ' ');
  }

  change(offset = 13) {
    const formatted = (this.entry.change / 100).toLocaleString(
      this.locale,
      this.currencyFormat,
    );

    const trailingSpace = formatted.includes(')') ? '' : ' ';
    return `${formatted}${trailingSpace}`.padStart(offset, ' ');
  }

  toTableRow() {
    return [this.date(), this.description(), this.change()].join(' | ');
  }
}

const OPTIONS = {
  HEADERS: {
    'en-US': ['Date', 'Description', 'Change'],
    'nl-NL': ['Datum', 'Omschrijving', 'Verandering'],
  },
  headerRow: function (locale) {
    const [date, description, change] = this.HEADERS[locale];
    return [
      date.padEnd(10, ' '),
      description.padEnd(25, ' '),
      change.padEnd(13, ' '),
    ].join(' | ');
  },
  dateFormatOptions: function () {
    return {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
  },
  currencyFormatOptions: function (currency, locale) {
    return {
      style: 'currency',
      currency: currency,
      currencySign: locale === 'en-US' ? 'accounting' : 'standard',
      currencyDisplay: locale === 'en-US' ? 'symbol' : 'narrowSymbol',
    };
  },
};

export const createEntry = (date, description, change) =>
  new LedgerEntry(date, description, change);

export function formatEntries(currency, locale, entries) {
  let dateFormat = OPTIONS.dateFormatOptions();
  let currencyFormat = OPTIONS.currencyFormatOptions(currency, locale);

  let rows = entries
    .sort(
      (a, b) =>
        a.date - b.date ||
        a.change - b.change ||
        a.description.localeCompare(b.description),
    )
    .map((entry) => {
      let formattedEntry = new FormattedLedgerEntry(
        entry,
        locale,
        dateFormat,
        currencyFormat,
      );
      return formattedEntry.toTableRow();
    });

  return [OPTIONS.headerRow(locale), ...rows].join('\n');
}
