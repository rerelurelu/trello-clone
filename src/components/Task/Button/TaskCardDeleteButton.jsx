import { FaTimes } from 'react-icons/fa';

export const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {
  const taskCardDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button className="taskCardDeleteButton" onClick={() => taskCardDeleteButton(taskCard.id)}>
        <FaTimes className="fas fa-times" />
      </button>
    </div>
  );
};
