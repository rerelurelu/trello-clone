import { FaTrashAlt } from 'react-icons/fa';

export const Task = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        <FaTrashAlt className="trashIcon" />
      </button>
    </div>
  );
};
