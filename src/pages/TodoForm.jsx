import { useState } from "react";

const TodoForm = ({ closeModal }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");

  const handleTaskSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const date = form.date.value;
    const priority = form.priority.value;
    const task = { title, description, date, priority };
    console.log(task);
    // Add your logic here to handle the submission of the new task
    // You may want to use this information to update your tasks state or make an API call

    // After handling the task submission, close the modal
    closeModal();
  };

  return (
    <dialog open className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">Add To-Do</h3>
        <form onSubmit={handleTaskSubmit} className="p-4">
          <label className="block mb-2">
            Task Title:
            <input
              type="text"
              name="title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="input input-bordered w-full mt-1"
              required
            />
          </label>
          <label className="block mb-2">
            Task Description:
            <textarea
              value={taskDescription}
              name="description"
              required
              onChange={(e) => setTaskDescription(e.target.value)}
              className="textarea textarea-bordered w-full mt-1"
              rows="3"
            ></textarea>
          </label>
          <label className="block mb-2">
            Deadline:
            <input
              type="date"
              required
              name="date"
              value={taskDeadline}
              onChange={(e) => setTaskDeadline(e.target.value)}
              className="input input-bordered w-full mt-1"
            />
          </label>
          <label className="block mb-2">
            Priority:
            <select
              required
              name="priority"
              value={taskPriority}
              onChange={(e) => setTaskPriority(e.target.value)}
              className="select select-bordered w-full mt-1"
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </label>
          <div className="modal-action">
            <button type="submit" className="btn mr-2">
              Add Task
            </button>
            <button type="button" className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default TodoForm;
