import { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; //1 a 8
  config: {
    workTime: number; //25
    shortBreakTime: number; //5
    longBreakTime: number; //15
  };
};
