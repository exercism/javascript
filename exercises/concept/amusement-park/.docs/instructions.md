# Instructions

Working with an amusement park, your task is to provide parts of the program that manages visitors and tickets.

First you will create a new visitor in the system, then you will provide a function for revoking a ticket.
Lastly you will work on tracking the tickets to prevent forgery.

## 1. Create a new visitor

When a visitor comes to the amusement park for the first time, they need to register by entering their name and age in a terminal and agreeing to the terms and conditions.
Of course they also need to buy a ticket.
The ticket has an identifier like `H32AZ123`.

Write a function `createVisitor` that accepts three arguments.

- The name of the visitor.
- The age of the visitor.
- The ticket identifier of the ticket that the visitor bought.

The function should combine this information into an object and return it. The keys in the object should be called `name`, `age` and `ticketId`.

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

- `not sold` in case the ticket does not have a visitor assigned yet
- `sold to ` followed by the name of the visitor if the ticket was sold
- `unknown ticket id` if the identifier was not found in the tracking object

```javascript
const tickets = {
  '0H2AZ123': null,
  '23LA9T41': 'Verena Nardi',
};

ticketStatus('0H2AZ123');
// => 'not sold'

ticketStatus('23LA9T41');
// => 'sold to Verena Nardi'

ticketStatus('RE90VAW7');
// => 'unknown ticket id'
```
