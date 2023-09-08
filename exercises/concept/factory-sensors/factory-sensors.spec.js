import {
  checkHumidityLevel,
  reportOverheating,
  monitorTheMachine,
  ArgumentError,
  OverheatingError,
} from './factory-sensors';

describe('checkHumidityLevel', () => {
  test('should throw if the humidity percentage is 100', () => {
    expect(() => checkHumidityLevel(100)).toThrow();
  });

  test('should not throw if the humidity level is 53', () => {
    expect(() => checkHumidityLevel(53)).not.toThrow();
  });
});

describe('reportOverheating', () => {
  test('should not throw if the temperature is 200°C', () => {
    expect(() => reportOverheating(200)).not.toThrow();
  });

  test('should throw an ArgumentError if the temperature is null', () => {
    expect(() => reportOverheating(null)).toThrow(ArgumentError);
  });

  test('should throw an OverheatingError if the temperature is 501°C', () => {
    expect(() => reportOverheating(501)).toThrow(OverheatingError);

    const getOverheatingErrorTemperature = () => {
      try {
        reportOverheating(501);
      } catch (error) {
        return error.temperature;
      }
    };

    expect(getOverheatingErrorTemperature()).toBe(501);
  });
});

describe('monitorTheMachine', () => {
  const actions = {
    check: jest.fn(),
    alertDeadSensor: jest.fn(),
    alertOverheating: jest.fn(),
    shutdown: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should call the check method once', () => {
    monitorTheMachine(actions);

    expect(actions.check).toHaveBeenCalledTimes(1);
  });

  test("should not call any action if the check doesn't throw", () => {
    monitorTheMachine(actions);

    expect(actions.alertDeadSensor).not.toHaveBeenCalled();
    expect(actions.alertOverheating).not.toHaveBeenCalled();
    expect(actions.shutdown).not.toHaveBeenCalled();
  });

  test('should call only the alertDeadSensor if the check throws an ArgumentError', () => {
    actions.check = jest.fn(() => {
      throw new ArgumentError();
    });
    monitorTheMachine(actions);

    expect(actions.alertDeadSensor).toHaveBeenCalledTimes(1);
    expect(actions.alertOverheating).not.toHaveBeenCalled();
    expect(actions.shutdown).not.toHaveBeenCalled();
  });

  test('should call only the shutdown action if the check throws an OverheatingError with a temperature of 651°C', () => {
    actions.check = jest.fn(() => {
      throw new OverheatingError(651);
    });
    monitorTheMachine(actions);

    expect(actions.alertDeadSensor).not.toHaveBeenCalled();
    expect(actions.alertOverheating).not.toHaveBeenCalled();
    expect(actions.shutdown).toHaveBeenCalledTimes(1);
  });

  test('should call only the alertOverheating if the check throws an OverheatingError with a temperature of 530°C', () => {
    actions.check = jest.fn(() => {
      throw new OverheatingError(530);
    });
    monitorTheMachine(actions);

    expect(actions.alertDeadSensor).not.toHaveBeenCalled();
    expect(actions.alertOverheating).toHaveBeenCalledTimes(1);
    expect(actions.shutdown).not.toHaveBeenCalled();
  });

  test('should rethrow the error if the check throws an unknown error', () => {
    class UnknownError extends Error {}

    actions.check = jest.fn(() => {
      throw new UnknownError();
    });

    expect(() => monitorTheMachine(actions)).toThrow(UnknownError);

    expect(actions.alertDeadSensor).not.toHaveBeenCalled();
    expect(actions.alertOverheating).not.toHaveBeenCalled();
    expect(actions.shutdown).not.toHaveBeenCalled();
  });
});
