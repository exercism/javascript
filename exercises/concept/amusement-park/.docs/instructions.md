# Instructions

Working with an amusement park, your task is to provide parts of the program that manages visitors and tickets.

First you will create a new visitor in the system, then you will provide a function for revoking a ticket for a visitor.
In task 3 and 4 you will work on the ticket tracking system that helps to prevent forgery.
Finally you will help adapting the system to new legal requirements.

## 1. Create a new visitor

When a visitor comes to the amusement park for the first time, they need to register by entering their name and age in a terminal and agreeing to the terms and conditions.
Of course they also need to buy a ticket.
The ticket has an identifier like `H32AZ123`.

Write a function `createVisitor` that accepts three arguments.

- The name of the visitor.
- The age of the visitor.
- The ticket identifier of the ticket that the visitor bought.

The function should combine this information into an object and return it.
The keys in the object should be called `name`, `age` and `ticketId`.

```javascript
createVisitor('Verena Nardi', 45, 'H32AZ123');
// => { name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' }
```

## 2. Revoke the ticket

To save regular visitors some time, they only need to register once and the visitor information will be kept for subsequent visits.
That is why when a visitor leaves the park, only their ticket should be revoked but the rest of the visitor object should stay the same.

Implement the function `revokeTicket` that accepts a visitor object, sets the ticket identifier to `null` and returns the object afterwards.

```javascript
const visitor = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
};

revokeTicket(visitor);
// => { name: 'Verena Nardi', age: 45, ticketId: null }
```

## 3. Determine the ticket status

To prevent forgery, the ticket identifiers are unique.
Once a ticket was printed, the identifier is added as key in an object to track it in the system.

Before the ticket is sold to a visitor, it has the value `null`.
Once it was sold to a visitor, the visitor's name will be assigned as a value.
When an employee has doubts about the validity of the ticket, they need to check the status of the ticket in the system.

Implement a function `ticketStatus` that accepts the tracking object and a ticket identifier as arguments.
It should return one of the following results.

- `unknown ticket id` if the identifier was not found in the tracking object
- `not sold` in case the ticket does not have a visitor assigned yet
- `sold to ` followed by the name of the visitor if the ticket was sold

```javascript
const tickets = {
  '0H2AZ123': null,
  '23LA9T41': 'Verena Nardi',
};

ticketStatus(tickets, 'RE90VAW7');
// => 'unknown ticket id'

ticketStatus(tickets, '0H2AZ123');
// => 'not sold'

ticketStatus(tickets, '23LA9T41');
// => 'sold to Verena Nardi'
```

## 4. Improve the ticket status response

After a while, you get feedback from the employees that they want the ticket status to be easier to understand on the first glance.
They only want to see either the name of the visitor or that the ticket is invalid.

Write a function `simpleTicketStatus` that accepts the same arguments as `ticketStatus` in task 3.
This function only returns one of two different results.

- the name of the visitor if the ticket was sold
- `invalid ticket !!!` if the ticket was not sold yet or the identifier was not found in the tracking object

Note that `invalid ticket !!!` should not be returned for any "strange" name values that might occur but really only in the two cases described above.

```javascript
const tickets = {
  '0H2AZ123': null,
  '23LA9T41': 'Verena Nardi',
};

ticketStatus(tickets, '23LA9T41');
// => 'Verena Nardi'

ticketStatus(tickets, '0H2AZ123');
// => 'invalid ticket !!!'

ticketStatus(tickets, 'RE90VAW7');
// => 'invalid ticket !!!'
```

## 5. Determine the version of terms and conditions

Due to new legal requirements new visitor objects now also contain detailed information on the "General Terms & Conditions" (GTC) the user agreed to.
You can see an example of the new visitor object below.

The cashiers of the amusement park now need to check whether a visitor needs to sign a new version of the GTC.
For this, implement a function `gtcVersion` that accepts a visitor object as argument and returns the GTC version if it is available.
If not, nothing should be returned.

```javascript
const visitorNew = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
  gtc: {
    signed: true,
    version: '2.1',
  },
};

gtcVersion(visitorNew);
// => '2.1'

const visitorOld = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
};

gtcVersion(visitorOld);
// => undefined
```
