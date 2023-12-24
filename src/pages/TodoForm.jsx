import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TodoForm = ({ closeModal, user }) => {
  const axios = useAxiosSecure();

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");

  const { refetch } = useQuery({
    queryKey: ["to-do"],
    queryFn: async () => {
      const res = await axios.get(`/tasks`);
      return res.data;
    },
  });

  const handleTaskSubmit = async (event) => {
    event.preventDefault();

    const task = {
      title: taskTitle,
      description: taskDescription,
      date: taskDeadline,
      priority: taskPriority,
      email: user,
    };

    const toastId = toast.loading("Adding to-do...");

    try {
      const res = await axios.post("/task", task);

      if (res?.data?.acknowledged > 0) {
        toast.success("Add successfully!", { id: toastId });
        refetch();
        closeModal();
      }
    } catch (error) {
      console.error("Error adding to-do:", error);
    }
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
