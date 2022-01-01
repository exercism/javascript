# Instructions

Elena is the new quality manager of a newspaper factory. As she has just arrived in the company, she has decided to review some of the processes in the factory to see what could be improved. She found out that technicians are doing a lot of quality checks by hand. She sees there is a good opportunity for automation and asks you, a freelance developer, to develop a piece of software to monitor some of the machines.

## 1. Monitor the humidity level of the room

Your first mission is to write a piece of software to monitor the humidity level of the production room. There is already a sensor connected to the software of the company that returns periodically the humidity percentage of the room.

You need to implement a function in the software that will throw an error if the humidity percentage is too high.
The function should be called `checkHumidityLevel` and take the humidity percentage as a parameter.

You should throw an error (the message is not important) if the percentage exceeds 70%.

```javascript
checkHumidityLevel(60);
// => undefined
```

```javascript
checkHumidityLevel(100);
// Throws an error
```

## 2. Detect overheating

Elena is very pleased with your first assignment and asks you to deal with the monitoring of the machines' temperature.
While chatting with a technician, Greg, you are told that if the temperature of a machine exceeds 500°C, the technicians start worrying about overheating.

The machine is equipped with a sensor that measures its internal temperature.
You should know that the sensor is very sensitive and often breaks.
In this case, the technicians will need to change it.

Your job is to implement a function `reportOverheating` that takes the temperature as a parameter and throws an error if the sensor is broken or if the machine starts overheating.
Knowing that you will later need to react differently depending on the error, you need a mechanism to differentiate the two kinds of errors.
You could rely on the error messages, but this would make your code fragile as it would break if the message gets updated.
So to be able to do so properly, you'll throw instances of different error classes.

- If the sensor is broken, the temperature will be `null`.
  In this case, you should throw an `ArgumentError`.
- When everything works, if the temperature exceeds 500°C, you should throw an `OverheatingError`.
  This error class will be instantiated with a temperature argument.
  Make sure that the `OverheatingError` you throw has a temperature property attached to it.

```javascript
reportOverheating(null);
// Throws an ArgumentError
```

```javascript
reportOverheating(800);
// Throws an OverheatingError
```

## 3. Monitor the machine

Now that your machine can detect errors, you will implement a function that reacts to those errors in different ways :

- If the sensor is broken, you need to warn a technician
- If the temperature is too high, you will either shut down the machine if the temperature exceeds 600°C or turn on a warning light if it is less than that.
- If another error happens, you'll rethrow it.

Implements a function `monitorTheMachine` that takes an argument `actions`.

`actions` is an object that has 4 properties :

- `check` is a _*function*_ that, when called, checks the temperature of the machine.
  It may throw various errors

- `alertDeadSensor` is a _*function*_ that, when called, alerts a technician that the temperature's sensor is dead.

- `alertOverheating` is a _*function*_ that, when called, will turn on a warning light on the machine.

- `shutdown` is a _*function*_ that, when called, will turn off the machine.

The `monitorTheMachine` function should call `check()`. If it passes, the function should not return anything. However, it may `throw` an error. When this happens, you should, depending on the error:

- `ArgumentError`: when this happens, call the `alertDeadSensor` function.
- `OverheatingError`: when this happens, if the temperature is less than 600 °C, call the `alertOverheating` function to turn on the warning light. If the temperature exceeds 600°C, the situation is critical, call the `shutdown` function.
- _anything else_: when this happens, rethrow the error

```javascript
monitorTheMachine({
  check,
  alertDeadSensor,
  alertOverheating,
  shutdown,
});
```
