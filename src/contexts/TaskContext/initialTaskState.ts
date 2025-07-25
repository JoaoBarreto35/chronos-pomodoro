import { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0, //1 a 8
  config: {
    workTime: 25, //25
    shortBreakTime: 5, //5
    longBreakTime: 15, //15
  },
};
