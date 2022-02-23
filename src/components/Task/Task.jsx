import { FaTrashAlt } from 'react-icons/fa';

export const Task = ({ task }) => {
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton">
        <FaTrashAlt className="trashIcon" />
      </button>
    </div>
  );
};
