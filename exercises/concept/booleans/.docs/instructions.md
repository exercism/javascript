Your friend asks you to implement the logic for a quest of a new RPG game he is currently working on. 
The main character, Annalyn, is a brave girl trying to find her way into this world. Her best friend was kidnapped by a group of people while Annalyn was away with her fierce pet dog searching for wild berries inside the forest. Annalyn, who might optionally take her dog with her, follows the trails and finds the group inside the forest: a mighty knight, an archer, and her friend, who is now a prisoner.

Your friend asks you to implement the logic for obtaining all the available actions which Annalyn can take based on the state of all three characters found in the forest and also based on whether Annalyn's pet dog is present or not. The possible actions are:
- Fast attack: you can try a fast attack on the group if the knight is sleeping because it takes time for him to get his armor on, so he will be vulnerable.
- Spy: you can spy on the group if at least one of them is awake. Otherwise, spying is a waste of time.
- Signal Prisoner: you can try to communicate with the prisoner by making bird sounds only if the archer is sleeping and the prisoner is awake. The reason is that a lot of archers are trained in bird signaling so he could intercept your message.
- Release Prisoner: You can sneak in and release the prisoner if he is awake and the other two characters are sleeping. Another way for achieving this would be if the archer is sleeping and Annalyn has her pet dog with her. In this case the release of the prisoner would look like this: the knight will be scared by the dog, so he will withdraw, the archer would not equip himself fast enough in order to attempt a ranged attack, so he will also have to withdraw and then Annalyn would be able to release the prisoner.

## Tasks

### 1. Check if the 'Fast Attack' action is possible

Implement a function named `canExecuteFastAttack` that takes a boolean value which indicates if the knight is awake. This function returns `true` if the 'Fast Attack' action is available based on the state of the character. Otherwise, returns `false`:

```javascript
const knightIsAwake = true;
canExecuteFastAttack(knightIsAwake)
// => false
```

### 2. Check if the 'Spy' action is possible

Implement a function named `canSpy` that takes three boolean values, indicating if the knight, archer and the prisoner, respectively, are awake. The function returns `true` if the 'Spy' action is available based on the state of the characters. Otherwise, returns `false`:

```javascript
const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)
// => true
```

### 3. Check if the 'Signal Prisoner' action is possible

Implement a function named `canSignalPrisoner` that takes two boolean values, indicating if the archer and the prisoner, respectively, are awake. The function returns `true` if the 'Signal Prisoner' action is available based on the state of the characters. Otherwise, returns `false`:

```javascript
const archerIsAwake = false;
const prisonerIsAwake = true;
canSignalPrisoner(archerIsAwake, prisonerIsAwake)
// => true
```

### 4. Check if the 'Release Prisoner' action is possible

Implement a function named `canReleasePrisoner` that takes four boolean values. The first three parameters indicate if the knight, archer and the prisoner, respectively, are awake. The last parameter indicates if Annalyn's pet dog is present. The function returns `true` if the 'Release Prisoner' action is available based on the state of the characters and Annalyn's pet dog presence. Otherwise, it returns `false`:

```javascript
const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = false;
canReleasePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)
// => false
```
