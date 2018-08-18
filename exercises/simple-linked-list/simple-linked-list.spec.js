var SimpleLinkedList  = require('./simple-linked-list');
var List  = SimpleLinkedList.List;
var Element = SimpleLinkedList.Element;

describe('simple-linked-list', function () {
  it('exports a List constructor', function () {
    expect(List).toBeDefined();
  });

  xit('exports a Element constructor', function () {
    expect(Element).toBeDefined();
  });

  describe('Element', function () {
    xit('is a constructor', function () {
      var el = new Element(1);
      expect(el).toBeDefined();

      /* eslint-disable new-cap */
      expect(function () {
        el = Element(1);
      }).toThrow();
      /* eslint-enable new-cap */
    });

    xit('requires an argument', function () {
      var el = new Element(1);
      expect(el).toBeDefined();

      expect(function () {
        el = new Element();
      }).toThrow();
    });

    xit('has as a value', function () {
      var el = new Element(1);
      expect(el.value).toBe(1);
    });

    xit('reference to next is undefined by default', function () {
      var el = new Element(1);
      expect(el.next).toBeUndefined();
    });
  });

  xit('accepts a reference to the next element', function () {
    var elOne = new Element(1);
    var elTwo = new Element(2, elOne);
    expect(elTwo.next).toBe(elOne);
  });

  /* eslint-disable no-unused-vars */
  xit('requires an instance of Element as next element', function () {
    expect(function () {
      var el = new Element(1, false);
    }).toThrow();
    expect(function () {
      var el = new Element(1, 'lorem ipsum');
    }).toThrow();
    expect(function () {
      var el = new Element(1, []);
    }).toThrow();
    expect(function () {
      var el = new Element(1, {});
    }).toThrow();
  });
  /* eslint-enable no-unused-vars */

  describe('List', function () {
    xit('is a constructor', function () {
      var ll = new List();
      expect(ll).toBeDefined();
    });

    xit('allows you to append an element', function () {
      var ll = new List();
      var el = new Element(1);
      ll.push(el);
      expect(ll.head).toBe(el);

      var ll2 = new List();
      var elOne = new Element(1);
      var elTwo = new Element(2);
      ll2.push(elOne);
      ll2.push(elTwo);
      expect(ll2.head.next).toBe(elTwo);
    });

    xit('allows you to prepend an element', function () {
      var ll = new List();
      var el = new Element(1);
      ll.unshift(el);
      expect(ll.head).toBe(el);

      var ll2 = new List();
      var elOne = new Element(1);
      var elTwo = new Element(2);
      ll2.unshift(elOne);
      ll2.unshift(elTwo);
      expect(ll2.head).toBe(elTwo);
    });

    xit('allows you to remove the first element', function () {
      var ll = new List();
      ll.push(new Element(1));
      ll.shift();
      expect(ll.head).toBeUndefined();

      ll.push(new Element(2));
      ll.push(new Element(3));
      ll.shift();
      expect(ll.head.value).toBe(3);
    });

    xit('allows you to remove the last element', function () {
      var ll = new List();
      ll.push(new Element(1));
      ll.pop();
      expect(ll.head).toBeUndefined();

      ll.push(new Element(2));
      ll.push(new Element(3));
      ll.pop();
      expect(ll.head.next).toBeUndefined();
    });

    xit('allows you to convert an array to a List', function () {
      var ll = List.fromArray([1, 2]);

      expect(ll.head.value).toBe(1);
      expect(ll.head.next.value).toBe(2);
    });

    xit('allows you to convert a List into an array', function () {
      var ll = new List();
      ll.push(new Element(1));
      ll.push(new Element(2));
      var a = ll.toArray();

      expect(a instanceof Array).toBe(true);
      expect(a.length).toBe(2);
      expect(a[0]).toBe(1);
      expect(a[1]).toBe(2);

      expect(ll.head.value).toBe(1);
      expect(ll.head.next.value).toBe(2);
    });

    xit('allows you to reverse a List', function () {
      var ll = new List();
      ll.push(new Element(1));
      ll.push(new Element(2));
      ll.push(new Element(3));
      ll.reverse();

      expect(ll.head.value).toBe(3);
      expect(ll.head.next.value).toBe(2);
      expect(ll.head.next.next.value).toBe(1);
    });
  });
});
