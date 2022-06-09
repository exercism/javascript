## Naming A Function

Picking good function names is an essential part of writing good code. 
Consider the following recommendations when you name your function. 

### Choose meaningful function names

When you name your function, you should be clear on what it does. 
For example, the function `get(studentId, subject)` doesn't have a meaningful function name, and therefore, it is not clear what it does. 
It might be getting the student's subject grade or getting their enrollment status. 
A better name would be `getStudentGrade(studentId, subject)`, as it precisely communicates what the function does.

### Don't make the function name too long

Take care not to make a function name too long. 
For example,  `checkStudentFailOrPassOrMeritOrDistinction(mark)` is an unnecessarily long function name. 
The longer the name is, the harder it gets to remember and the more space it takes on the computer screen.

### Don't make the function name too short
Conversely, making a function name too short can also confuse readers. 
For example, `checkFPMD(mark)` is a bad function name as it isn't immediately obvious what 'FPMD' means.

### Use the name that everyone understands. 

Your function name should be understandable by everyone who reads your code. 
For example, an obscure function name like `DeathStar()` might be amusing to you, but the name doesn't communicate its purpose.

### Pick one convention for naming operations

Stick to one convention for naming operations that do the same thing. 
For example, if you name the function to get a student's name `getStudentName()`, you should not use a different verb in the function name to get a student's grade  (e.g. `retrieveStudentGrade()`).
### Avoid using the same word for two purposes

For example, don't keep using 'add' when you want to put a group of items into a collection. 
Use 'insert' or 'append' instead.
