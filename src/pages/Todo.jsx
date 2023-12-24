// import { useState } from "react";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import TodoForm from "./TodoForm";
// import { MdDeleteOutline } from "react-icons/md";
// import { RxUpdate } from "react-icons/rx";

// import useAxiosSecure from "../hooks/useAxiosSecure";
// import toast from "react-hot-toast";
// import { useQuery } from "@tanstack/react-query";

// const Todo = () => {
//   const [isAddModalOpen, setAddModalOpen] = useState(false);
//   const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
//   const [selectedTodo, setSelectedTodo] = useState(null);
//   const [taskTitle, setTaskTitle] = useState("");
//   const [taskDescription, setTaskDescription] = useState("");
//   const [taskDeadline, setTaskDeadline] = useState("");
//   const [taskPriority, setTaskPriority] = useState("");

//   const axios = useAxiosSecure();

//   const { data, refetch } = useQuery({
//     queryKey: ["to-do"],
//     queryFn: async () => {
//       const res = await axios.get(`/tasks`);
//       return res.data;
//     },
//   });

//   const handleDelete = async (id) => {
//     const toastId = toast.loading("Deleting...");
//     const res = await axios.delete(`/tasks/${id}`);
//     if (res.data.deletedCount > 0) {
//       toast.success("Delete successfully", { id: toastId });
//       refetch();
//     }
//     console.log(res);
//   };

//   // const handleUpdate = async () => {
//   //   const toastId = toast.loading("Updating...");
//   //   const updatedTask = {
//   //     title: taskTitle,
//   //     description: taskDescription,
//   //     date: taskDeadline,
//   //     priority: taskPriority,
//   //   };

//   //   const res = await axios.put(`/tasks/${selectedTodo._id}`, updatedTask);
//   //   if (res.data.modifiedCount > 0) {
//   //     toast.success("Update successfully", { id: toastId });
//   //     refetch();
//   //     closeUpdateModal();
//   //   }
//   //   console.log(res);
//   // };

//   const handleUpdate = async () => {
//     const toastId = toast.loading("Updating...");

//     try {
//       const updatedTask = {
//         title: taskTitle,
//         description: taskDescription,
//         date: taskDeadline,
//         priority: taskPriority,
//       };

//       const res = await axios.put(`/tasks/${selectedTodo._id}`, updatedTask);

//       if (res.data.modifiedCount > 0) {
//         toast.success("Update successfully", { id: toastId });
//         refetch();
//         closeUpdateModal();
//       } else {
//         toast.error("Update failed");
//       }
//     } catch (error) {
//       toast.error(`Update failed: ${error.message}`, { id: toastId });
//     }
//   };

//   const openAddModal = () => setAddModalOpen(true);
//   const closeAddModal = () => setAddModalOpen(false);

//   const openUpdateModal = (todo) => {
//     setSelectedTodo(todo);
//     setUpdateModalOpen(true);
//   };

//   const closeUpdateModal = () => setUpdateModalOpen(false);

//   return (
//     <div className="flex-1">
//       <h2 className="text-center font-medium text-xl bg-base-200 py-3">
//         To-Do
//       </h2>
//       <div className="h-full bg-base-200 mt-5 p-5 space-y-5">
//         <button
//           className="btn w-full bg-base-300 justify-center h-16 rounded-lg hover:scale-95 transition-all duration-200"
//           onClick={openAddModal}
//         >
//           <h2 className="flex items-center gap-3 text-xl font-semibold">
//             <IoMdAddCircleOutline className="text-2xl" /> Add To-Do
//           </h2>
//         </button>

//         {isAddModalOpen && (
//           <TodoForm
//             closeModal={closeAddModal}
//             setTaskTitle={setTaskTitle}
//             setTaskDescription={setTaskDescription}
//             setTaskDeadline={setTaskDeadline}
//             setTaskPriority={setTaskPriority}
//           />
//         )}

//         {data?.map((todo, idx) => (
//           <div
//             key={idx}
//             className="w-full bg-base-300 justify-center rounded-lg p-2"
//           >
//             <h2 className="text-xl font-semibold">{todo.title}</h2>
//             <p>{todo.date}</p>
//             <p className="text-lg">{todo.description}</p>

//             <p className="font-bold">{todo.priority}</p>
//             <div className="flex gap-3 justify-center">
//               <button onClick={() => handleDelete(todo._id)}>
//                 <MdDeleteOutline className="text-3xl" />
//               </button>

//               <button onClick={() => openUpdateModal(todo)}>
//                 <RxUpdate className="text-3xl" />
//               </button>

//               {isUpdateModalOpen && (
//                 <dialog
//                   open={isUpdateModalOpen}
//                   className="modal"
//                   id="my_modal_1"
//                 >
//                   <div className="modal-box">
//                     <h3 className="font-bold text-lg text-center">
//                       Update To-Do
//                     </h3>
//                     <form
//                       onSubmit={(e) => {
//                         e.preventDefault();
//                         handleUpdate();
//                       }}
//                       className="p-4"
//                     >
//                       <label className="block mb-2">
//                         Task Title:
//                         <input
//                           type="text"
//                           name="title"
//                           defaultValue={selectedTodo.title}
//                           onChange={(e) => setTaskTitle(e.target.value)}
//                           className="input input-bordered w-full mt-1"
//                           required
//                         />
//                       </label>
//                       <label className="block mb-2">
//                         Task Description:
//                         <textarea
//                           defaultValue={selectedTodo.description}
//                           name="description"
//                           onChange={(e) => setTaskDescription(e.target.value)}
//                           required
//                           className="textarea textarea-bordered w-full mt-1"
//                           rows="3"
//                         ></textarea>
//                       </label>
//                       <label className="block mb-2">
//                         Deadline:
//                         <input
//                           type="date"
//                           required
//                           name="date"
//                           defaultValue={selectedTodo.taskDeadline}
//                           onChange={(e) => setTaskDeadline(e.target.value)}
//                           className="input input-bordered w-full mt-1"
//                         />
//                       </label>
//                       <label className="block mb-2">
//                         Priority:
//                         <select
//                           required
//                           name="priority"
//                           defaultValue={selectedTodo.priority}
//                           onChange={(e) => setTaskPriority(e.target.value)}
//                           className="select select-bordered w-full mt-1"
//                         >
//                           <option value="Low">Low</option>
//                           <option value="Moderate">Moderate</option>
//                           <option value="High">High</option>
//                         </select>
//                       </label>
//                       <div className="modal-action">
//                         <button type="submit" className="btn mr-2">
//                           Update Task
//                         </button>
//                         <button
//                           type="button"
//                           className="btn"
//                           onClick={closeUpdateModal}
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </dialog>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;

import { useContext, useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import TodoForm from "./TodoForm";
import { MdDeleteOutline } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";

const Todo = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [email, setEmail] = useState("");
  const axios = useAxiosSecure();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setEmail(user?.email);
  }, [user?.email]);
  console.log(email);

  const { data, loading, refetch } = useQuery({
    queryKey: ["to-do"],
    queryFn: async () => {
      const res = await axios.get(`/tasks?email=${user?.email}`);
      // console.log("url", `/tasks?email=${email}`);
      return res.data;
    },
  });
  
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  const handleDelete = async (id) => {
    const toastId = toast.loading("Deleting...");
    const res = await axios.delete(`/tasks/${id}`);
    if (res.data.deletedCount > 0) {
      toast.success("Delete successfully", { id: toastId });
      refetch();
    }
    console.log(res);
  };

  const handleUpdate = async () => {
    const toastId = toast.loading("Updating...");

    try {
      const updatedTask = {
        title: taskTitle,
        description: taskDescription,
        date: taskDeadline,
        priority: taskPriority,
      };

      const res = await axios.put(`/tasks/${selectedTodo._id}`, updatedTask);

      if (res.data.modifiedCount > 0) {
        toast.success("Update successfully", { id: toastId });
        refetch();
        closeUpdateModal();
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      toast.error(`Update failed: ${error.message}`, { id: toastId });
    }
  };

  const openAddModal = () => setAddModalOpen(true);
  const closeAddModal = () => setAddModalOpen(false);

  const openUpdateModal = (todo) => {
    setSelectedTodo(todo);
    setUpdateModalOpen(true);
    setTaskTitle(todo.title);
    setTaskDescription(todo.description);
    setTaskDeadline(todo.date);
    setTaskPriority(todo.priority);
  };

  const closeUpdateModal = () => setUpdateModalOpen(false);

  return (
    <div className="flex-1">
      <h2 className="text-center font-medium text-xl bg-base-200 py-3">
        To-Do
      </h2>
      <div className="h-full bg-base-200 mt-5 p-5 space-y-5">
        <button
          className="btn w-full bg-base-300 justify-center h-16 rounded-lg hover:scale-95 transition-all duration-200"
          onClick={openAddModal}
        >
          <h2 className="flex items-center gap-3 text-xl font-semibold">
            <IoMdAddCircleOutline className="text-2xl" /> Add To-Do
          </h2>
        </button>

        {isAddModalOpen && (
          <TodoForm
            user={email}
            closeModal={closeAddModal}
            setTaskTitle={setTaskTitle}
            setTaskDescription={setTaskDescription}
            setTaskDeadline={setTaskDeadline}
            setTaskPriority={setTaskPriority}
          />
        )}

        {data?.map((todo, idx) => (
          <div
            key={idx}
            className="w-full bg-base-300 justify-center rounded-lg p-2"
          >
            <h2 className="text-xl font-semibold">{todo.title}</h2>
            <p>{todo.date}</p>
            <p className="text-lg">{todo.description}</p>

            <p className="font-bold">{todo.priority}</p>
            <div className="flex gap-3 justify-center">
              <button onClick={() => handleDelete(todo._id)}>
                <MdDeleteOutline className="text-3xl" />
              </button>

              <button onClick={() => openUpdateModal(todo)}>
                <RxUpdate className="text-3xl" />
              </button>

              {isUpdateModalOpen && (
                <dialog
                  open={isUpdateModalOpen}
                  className="modal"
                  id="my_modal_1"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">
                      Update To-Do
                    </h3>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleUpdate();
                      }}
                      className="p-4"
                    >
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
                          defaultValue={taskDescription}
                          name="description"
                          onChange={(e) => setTaskDescription(e.target.value)}
                          required
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
                          Update Task
                        </button>
                        <button
                          type="button"
                          className="btn"
                          onClick={closeUpdateModal}
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
