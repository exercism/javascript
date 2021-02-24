# Instructions append

If an invalid character or codon is encountered _during_ translation, it should `throw` an error with the message `Invalid codon`.

```javascript
translate('AAA');
// => Error: Invalid codon
```
