# Instructions append

If the final item in the list is an `object` instead of a `string`, it will hold a qualifier that modifies the final line in the proverb.

```javascript
proverb('nail', 'shoe', { qualifier: 'horseshoe' });
// => For want of a nail the shoe was lost.
//    And all for the want of a horseshoe nail.
```
