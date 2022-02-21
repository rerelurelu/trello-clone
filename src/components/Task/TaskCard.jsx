import React from 'react';

import { TaskCardTitle } from './TaskCardTitle';
import { TaskCardDeleteButton } from './Button/TaskCardDeleteButton';
import { TaskAddInput } from './Input/TaskAddInput';
import { Tasks } from './Tasks';
import './TaskCard.css'

export const TaskCard = () => {
  return (
    <div className='taskCard'>
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  );
};
