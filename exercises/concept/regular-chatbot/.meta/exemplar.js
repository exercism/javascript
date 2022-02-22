// @ts-check

 
 /**
  * Given a certain command, help the chatbot recognize whether the command is valid or not.
  *
  * @param {string} command
  * @returns {boolean} whether or not is the command valid
  */

 export function isValidCommand(command) {
    const regex = /^chatbot/i
    return regex.test(command);
 }
 
 /**
  * Given a certain message, help the chatbot get rid of all the emoji's encryption throught the message.
  *
  * @param {string} message
  * @returns {string} The message without the emojis encryption
  */
 export function removeEmoji(message) {
    const regex = new RegExp("emoji[0-9]+");
    return message.split(regex).join("");
 }
 
 /**
  * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
  *
  * @param {string} phoneNumber
  * @returns {string} the Chatbot response to the phone Validation
  */
 export function checkPhoneNumber(number) {
   const regex = /^\+\(?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
   if (regex.test(number)) {
       return "Thanks! You can download me now on your Phone."
   } else {
       return `Oops, it seems like I can't reach out to ${number}`
   }
 }

 /**
  * Given a certain response from the user, help the chatbot get only the URL
  *
  * @param {string} userInput
  * @returns {Array} all the possible URL's that the user may have answered
  */
 export function getURL(userInput) {
    const regex = /(\w+\.)+\w+/g;

    return userInput.match(regex);
 }

 /**
  * Greet the user using its full name data from the profile
  *
  * @param {string} fullName
  * @returns {string} Greeting from the chatbot
  */
 export function niceToMeetYou(fullName) {
    return fullName.replace(/(?<surname>\w+), (?<name>\w+)/, (...match) => {
        let groups = match.pop();
          
        return `Nice to meet you, ${groups.name} ${groups.surname}`;
      });
 }


 

