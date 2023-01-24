# Instructions

You have been hired as a Regular Expression Specialist in a company that is developing a Chatbot.

It is in a very basic phase of development, hence your mission is to use Regular Expressions to improve the chatbot's ability to understand and generate natural language.

## Check Valid Command

Apart from being smart, the Chatbot is also a loyal assistant.

To ask something to the chatbot, the user must say the word “**Chatbot**” in the first position of the command.

It doesn't matter if the keyword is in UPPERCASE or lowercase. The important aspect here is the position of the word.

Implement the function `isValidCommand()` that helps the Chatbot recognize when the user is giving a command.

```javascript
isValidCommand("Chatbot, play a song from the 80's.";
// => True
isValidCommand("Hey Chatbot, where is the closest pharmacy?";
// => False
isValidCommand("CHATBOT, do you have a solution for this challenge?";
// => True
```

## Remove encrypted emojis

The Chatbot has a difficult time understanding how humans use emojis to express their emotions.

When the chatbot receives user messages, each emoji is represented as “_emoji_” followed by its _id_ number.

Implement the `removeEmoji()` method to take a string and remove all the emoji’s encryption throughout the message.

Lines not containing emoji’s text should be returned unmodified.

Just remove the emoji string. Do not attempt to adjust the whitespace.

For this particular challenge, use constructor syntax for creating the regular expression.

```javascript
removeEmoji("I love playing videogames emoji3465 it's one of my hobbies");
// => "I love playing videogames  it's one of my hobbies"
```

## Check Valid Phone Number

Considering the download of chatbot features on a mobile app, the user is expected to write a phone number during the conversation.

The problem is that the chatbot can only read and validate a number with a specific format.

If the number is valid (matches the character sequence specified by the **regular expression**), the chatbot answers with a message thanking the user and confirming the number. If the number is invalid, the function informs the user that the phone number is not valid.

The expected format is: (+##) ###-###-###

```javascript
checkPhoneNumber('(+34) 659-771-594');
// => "Thanks! You can now download me to your phone."
checkPhoneNumber('659-771-594');
// => "Oops, it seems like I can't reach out to 659-771-594"
```

## Get website link

The Chatbot is a really curious software. Even though he can search on the internet about a particular topic, he likes to ask users about cool websites or URL’s to go find relevant information.

Example of Conversation:

- **Chatbot**: Hey username, I would like to learn how to code in JavaScript, do you know any cool website where I could learn?
- **User**: I learned a lot from [exercism.com](http://website.com)

Implement the function `getURL()` which is able to return an array with just the link of each website.

```javascript
getURL('I learned a lot from exercism.com');
// => ["exercism.com"];
```

## Greet the user

For storing data from all the persons who have had a conversation with, the chatbot is able to get the Full Name from the user’s profile in this style: **“smith, john”**.

In this way, we want our chatbot to be really polite and make a good impression.

Write the function `niceToMeetYou()` that takes a string with the full name of the user, and returns the string **“Nice to meet you, John Smith”**

For learning purposes, implement the function using a **replacement method** from Regular Expressions.

```javascript
let str = 'Smith, John';

niceToMeetYou(str);
// => "Nice to meet you, John Smith"
```
