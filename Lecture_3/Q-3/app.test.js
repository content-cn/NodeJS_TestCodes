import { FitnessTracker, Solution } from "./index";

const consoleSpy = jest.spyOn(console, "log");

describe("FitnessTracker", () => {
  it("should emit goalReached event when the goal is reached", () => {
    const tracker = new FitnessTracker();

    Solution();

    const emitSpy = jest.spyOn(tracker, "emit");

    tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
    tracker.addExercise({ name: "Running", caloriesBurned: 500 });

    expect(tracker.progress).toBe(1100);

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy.mock.calls[0][0]).toMatch(/goalreached/i);

    expect(consoleSpy.mock.calls[0][0]).toMatch(
      /congratulations! you have reached your fitness goal\./i
    );
  });
});
