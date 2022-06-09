## Naming A Function

Naming a function is as important as writing codes. 
A function name is important to be clear and precise. 
Consider the following recommendations when you name your function. 

- Choose meaningful words. 
  When you name your function, you should be clear on what it does. 
  On Function name `get(studentId, subject)`, you can't tell what it is geting mark for or what it is getting or whether it is getting Studnet name or Age or their marks. 
  Function `getStudentGrade(studentId, subject)` told you everything you need to know about what it does. 
  It will return the student grade.
- Don't make the name too short or too long. 
  It is good to be clear and precise but take care not to make too long name. 
  `checkStudentFailOrPassOrMeritOrDistinction(mark)` is an example of a unneccessarily long function name.
  The longer the name is, the harder it get to remember and the more space it takes on the computer screen.
  On the other hand. making the name too short will also cause confusion. 
  `checkFPMD(mark)` is an example of the bad shortened name because when another programmer look at the function, he would get confused by what 'FPMD' mean.
### Use the name that everyone understands. 

Your function name should be understandable by everyone who reads your code. 
For example, an obscure function name like `DeathStar()` might be amusing to you, but the name doesn't communicate its purpose.

### Pick one convention for naming operations

Stick to one convention for naming operations that do the same thing. 
For example, if you name the function to get a student's name `getStudentName()`, you should not use a different verb in the function name to get a student's grade  (e.g. `retrieveStudentGrade()`).
### Avoid using the same word for two purposes

For example, don't keep using 'add' when you want to put a group of items into a collection. 
Use 'insert' or 'append' instead.
