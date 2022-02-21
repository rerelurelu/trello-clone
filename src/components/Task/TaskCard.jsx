import React from 'react';

import { TaskCardTitle } from './TaskCardTitle';
import { TaskCardDeleteButton } from './Button/TaskCardDeleteButton';
import { TaskAddInput } from './input/TaskAddInput';
import { Tasks } from './Tasks';

export const TaskCard = () => {
  return (
    <div>
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  );
};
