export const TaskAddInput = ({ inputText, setInputText, setTaskList, taskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, { text: inputText }]);
    setInputText('');
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type="text"
          placeholder="add a task"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
