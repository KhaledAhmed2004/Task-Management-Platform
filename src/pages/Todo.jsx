// // // // import { useState } from "react";
// // // // import { IoMdAddCircleOutline } from "react-icons/io";
// // // // import TodoForm from "./TodoForm";
// // // // import { useQuery } from "@tanstack/react-query";
// // // // import useAxiosSecure from "../hooks/useAxiosSecure";

// // // // const Todo = () => {
// // // //   const [isModalOpen, setModalOpen] = useState(false);
// // // //   const axios = useAxiosSecure();

// // // //   const { data, isLoading, refetch } = useQuery({
// // // //     queryKey: ["to-do"],
// // // //     queryFn: async () => {
// // // //       const res = await axios.get(`/tasks`);
// // // //       return res.data;
// // // //     },
// // // //   });

// // // //   console.log(data);

// // // //   const openModal = () => setModalOpen(true);
// // // //   const closeModal = () => setModalOpen(false);

// // // //   return (
// // // //     <div className="flex-1">
// // // //       <h2 className="text-center font-medium text-xl bg-base-200 py-3">
// // // //         To-Do
// // // //       </h2>
// // // //       <div className="h-full bg-base-200 mt-5 p-5 space-y-5">
// // // //         <button
// // // //           className="btn w-full bg-base-300 justify-center h-16 rounded-lg hover:scale-95 transition-all duration-200"
// // // //           onClick={openModal}
// // // //         >
// // // //           <h2 className="flex items-center gap-3 text-xl font-semibold">
// // // //             <IoMdAddCircleOutline className="text-2xl" /> Add To-Do
// // // //           </h2>
// // // //         </button>

// // // //         {isModalOpen && <TodoForm closeModal={closeModal} />}
// // // //         {data.map((todo, idx) => (
// // // //           <h2 key={idx}>{todo.title}</h2>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Todo;

// // // // import { useState } from "react";
// // // // import { IoMdAddCircleOutline } from "react-icons/io";
// // // // import TodoForm from "./TodoForm";
// // // // import { MdDeleteOutline } from "react-icons/md";
// // // // import { useQuery } from "@tanstack/react-query";
// // // // import { RxUpdate } from "react-icons/rx";

// // // // import useAxiosSecure from "../hooks/useAxiosSecure";
// // // // import toast from "react-hot-toast";

// // // // const Todo = () => {
// // // //   const [isModalOpen, setModalOpen] = useState(false);
// // // //   const axios = useAxiosSecure();

// // // //   const { data, refetch } = useQuery({
// // // //     queryKey: ["to-do"],
// // // //     queryFn: async () => {
// // // //       const res = await axios.get(`/tasks`);

// // // //       return res.data;
// // // //     },
// // // //   });

// // // //   const handleDelete = async (id) => {
// // // //     const res = await axios.delete(`/tasks/:${id}`)
// // // //     if (res.data.deletedCount > 0) {
// // // //       toast.success("Delete successfully");
// // // //       refetch();
// // // //     }
// // // //     console.log(res);
// // // //   };
// // // //   const openModal = () => setModalOpen(true);
// // // //   const closeModal = () => setModalOpen(false);

// // // //   return (
// // // //     <div className="flex-1">
// // // //       <h2 className="text-center font-medium text-xl bg-base-200 py-3">
// // // //         To-Do
// // // //       </h2>
// // // //       <div className="h-full bg-base-200 mt-5 p-5 space-y-5">
// // // //         <button
// // // //           className="btn w-full bg-base-300 justify-center h-16 rounded-lg hover:scale-95 transition-all duration-200"
// // // //           onClick={openModal}
// // // //         >
// // // //           <h2 className="flex items-center gap-3 text-xl font-semibold">
// // // //             <IoMdAddCircleOutline className="text-2xl" /> Add To-Do
// // // //           </h2>
// // // //         </button>

// // // //         {isModalOpen && <TodoForm closeModal={closeModal} />}
// // // //         {data?.map((todo, idx) => (
// // // //           <div
// // // //             key={idx}
// // // //             className="w-full bg-base-300 justify-center rounded-lg p-2"
// // // //           >
// // // //             <h2 className="text-xl font-semibold">{todo.title}</h2>
// // // //             <p>{todo.date}</p>
// // // //             <p className="text-lg">{todo.description}</p>

// // // //             <p className="font-bold">{todo.priority}</p>
// // // //             <div className="flex gap-3 justify-center">
// // // //               <button onClick={()=>handleDelete(_id)}>
// // // //                 <MdDeleteOutline className="text-3xl" />
// // // //               </button>
// // // //               <RxUpdate className="text-3xl" />
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Todo;

// // // import { useState } from "react";
// // // import { IoMdAddCircleOutline } from "react-icons/io";
// // // import TodoForm from "./TodoForm";
// // // import { MdDeleteOutline } from "react-icons/md";
// // // import { useQuery } from "@tanstack/react-query";
// // // import { RxUpdate } from "react-icons/rx";

// // // import useAxiosSecure from "../hooks/useAxiosSecure";
// // // import toast from "react-hot-toast";

// // // const Todo = () => {
// // //   const [isModalOpen, setModalOpen] = useState(false);
// // //   const axios = useAxiosSecure();

// // //   const { data, refetch } = useQuery({
// // //     queryKey: ["to-do"],
// // //     queryFn: async () => {
// // //       const res = await axios.get(`/tasks`);
// // //       return res.data;
// // //     },
// // //   });

// // //   const handleDelete = async (id) => {
// // //     const toastId = toast.loading("Deleting...");
// // //     const res = await axios.delete(`/tasks/${id}`);
// // //     if (res.data.deletedCount > 0) {
// // //       toast.success("Delete successfully", { id: toastId });
// // //       refetch();
// // //     }
// // //     console.log(res);
// // //   };

// // //   const openModal = () => setModalOpen(true);
// // //   const closeModal = () => setModalOpen(false);

// // //   const handleUpdate = async (id) => {
// // //     const toastId = toast.loading("Updating...");
// // //     const updatedTask = {
// // //       title: taskTitle,
// // //       description: taskDescription,
// // //       date: taskDeadline,
// // //       priority: taskPriority,
// // //     };

// // //     const res = await axios.put(`/tasks/${id}`, updatedTask);
// // //     if (res.data.modifiedCount > 0) {
// // //       toast.success("Update successfully", { id: toastId });
// // //       refetch();
// // //       closeModal(); // Close the update modal
// // //     }
// // //     console.log(res);
// // //   };
// // //   return (
// // //     <div className="flex-1">
// // //       <h2 className="text-center font-medium text-xl bg-base-200 py-3">
// // //         To-Do
// // //       </h2>
// // //       <div className="h-full bg-base-200 mt-5 p-5 space-y-5">
// // //         <button
// // //           className="btn w-full bg-base-300 justify-center h-16 rounded-lg hover:scale-95 transition-all duration-200"
// // //           onClick={openModal}
// // //         >
// // //           <h2 className="flex items-center gap-3 text-xl font-semibold">
// // //             <IoMdAddCircleOutline className="text-2xl" /> Add To-Do
// // //           </h2>
// // //         </button>

// // //         {isModalOpen && <TodoForm closeModal={closeModal} />}
// // //         {data?.map((todo, idx) => (
// // //           <div
// // //             key={idx}
// // //             className="w-full bg-base-300 justify-center rounded-lg p-2"
// // //           >
// // //             <h2 className="text-xl font-semibold">{todo.title}</h2>
// // //             <p>{todo.date}</p>
// // //             <p className="text-lg">{todo.description}</p>

// // //             <p className="font-bold">{todo.priority}</p>
// // //             <div className="flex gap-3 justify-center">
// // //               <button onClick={() => handleDelete(todo._id)}>
// // //                 <MdDeleteOutline className="text-3xl" />
// // //               </button>

// // //               <button
// // //                 className=""
// // //                 onClick={() =>
// // //                   document.getElementById("my_modal_1").showModal()
// // //                 }
// // //               >
// // //                 <RxUpdate className="text-3xl" />
// // //               </button>
// // //               <dialog open className="modal">
// // //                 <div className="modal-box">
// // //                   <h3 className="font-bold text-lg text-center">Add To-Do</h3>
// // //                   <form onSubmit={handleUpdate} className="p-4">
// // //                     <label className="block mb-2">
// // //                       Task Title:
// // //                       <input
// // //                         type="text"
// // //                         name="title"
// // //                         defaultValue={todo.title}
// // //                         className="input input-bordered w-full mt-1"
// // //                         required
// // //                       />
// // //                     </label>
// // //                     <label className="block mb-2">
// // //                       Task Description:
// // //                       <textarea
// // //                         defaultValue={todo.description}
// // //                         name="description"
// // //                         required
// // //                         className="textarea textarea-bordered w-full mt-1"
// // //                         rows="3"
// // //                       ></textarea>
// // //                     </label>
// // //                     <label className="block mb-2">
// // //                       Deadline:
// // //                       <input
// // //                         type="date"
// // //                         required
// // //                         name="date"
// // //                         defaultValue={todo.taskDeadline}
// // //                         className="input input-bordered w-full mt-1"
// // //                       />
// // //                     </label>
// // //                     <label className="block mb-2">
// // //                       Priority:
// // //                       <select
// // //                         required
// // //                         name="priority"
// // //                         defaultValue={todo.priority}
// // //                         className="select select-bordered w-full mt-1"
// // //                       >
// // //                         <option value="Low">Low</option>
// // //                         <option value="Moderate">Moderate</option>
// // //                         <option value="High">High</option>
// // //                       </select>
// // //                     </label>
// // //                     <div className="modal-action">
// // //                       <button type="submit" className="btn mr-2">
// // //                         Add Task
// // //                       </button>
// // //                       <button
// // //                         type="button"
// // //                         className="btn"
// // //                         onClick={closeModal}
// // //                       >
// // //                         Close
// // //                       </button>
// // //                     </div>
// // //                   </form>
// // //                 </div>
// // //               </dialog>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Todo;

// // // Todo.js

// // import { useState } from "react";
// // import { IoMdAddCircleOutline } from "react-icons/io";
// // import TodoForm from "./TodoForm";
// // import { MdDeleteOutline } from "react-icons/md";
// // import { RxUpdate } from "react-icons/rx";

// // import useAxiosSecure from "../hooks/useAxiosSecure";
// // import toast from "react-hot-toast";
// // import { useQuery } from "@tanstack/react-query";

// // const Todo = () => {
// //   const [isModalOpen, setModalOpen] = useState(false);
// //   const [taskTitle, setTaskTitle] = useState("");
// //   const [taskDescription, setTaskDescription] = useState("");
// //   const [taskDeadline, setTaskDeadline] = useState("");
// //   const [taskPriority, setTaskPriority] = useState("");

// //   const axios = useAxiosSecure();

// //   const { data, refetch } = useQuery({
// //     queryKey: ["to-do"],
// //     queryFn: async () => {
// //       const res = await axios.get(`/tasks`);
// //       return res.data;
// //     },
// //   });

// //   const handleDelete = async (id) => {
// //     const toastId = toast.loading("Deleting...");
// //     const res = await axios.delete(`/tasks/${id}`);
// //     if (res.data.deletedCount > 0) {
// //       toast.success("Delete successfully", { id: toastId });
// //       refetch();
// //     }
// //     console.log(res);
// //   };

// //   const handleUpdate = async (id) => {
// //     const toastId = toast.loading("Updating...");
// //     const updatedTask = {
// //       title: taskTitle,
// //       description: taskDescription,
// //       date: taskDeadline,
// //       priority: taskPriority,
// //     };

// //     const res = await axios.put(`/tasks/${id}`, updatedTask);
// //     if (res.data.modifiedCount > 0) {
// //       toast.success("Update successfully", { id: toastId });
// //       refetch();
// //       closeModal(); // Close the update modal
// //     }
// //     console.log(res);
// //   };

// //   const openModal = () => setModalOpen(true);
// //   const closeModal = () => setModalOpen(false);

// //   return (
// //     <div className="flex-1">
// //       <h2 className="text-center font-medium text-xl bg-base-200 py-3">
// //         To-Do
// //       </h2>
// //       <div className="h-full bg-base-200 mt-5 p-5 space-y-5">
// //         <button
// //           className="btn w-full bg-base-300 justify-center h-16 rounded-lg hover:scale-95 transition-all duration-200"
// //           onClick={openModal}
// //         >
// //           <h2 className="flex items-center gap-3 text-xl font-semibold">
// //             <IoMdAddCircleOutline className="text-2xl" /> Add To-Do
// //           </h2>
// //         </button>

// //         {isModalOpen && (
// //           <TodoForm
// //             closeModal={closeModal}
// //             setTaskTitle={setTaskTitle}
// //             setTaskDescription={setTaskDescription}
// //             setTaskDeadline={setTaskDeadline}
// //             setTaskPriority={setTaskPriority}
// //           />
// //         )}
// //         {data?.map((todo, idx) => (
// //           <div
// //             key={idx}
// //             className="w-full bg-base-300 justify-center rounded-lg p-2"
// //           >
// //             <h2 className="text-xl font-semibold">{todo.title}</h2>
// //             <p>{todo.date}</p>
// //             <p className="text-lg">{todo.description}</p>

// //             <p className="font-bold">{todo.priority}</p>
// //             <div className="flex gap-3 justify-center">
// //               <button onClick={() => handleDelete(todo._id)}>
// //                 <MdDeleteOutline className="text-3xl" />
// //               </button>

// //               <button
// //                 className=""
// //                 onClick={() =>
// //                   document.getElementById("my_modal_1").showModal()
// //                 }
// //               >
// //                 <RxUpdate className="text-3xl" />
// //               </button>
// //               <dialog open className="modal">
// //                 <div className="modal-box">
// //                   <h3 className="font-bold text-lg text-center">
// //                     Update To-Do
// //                   </h3>
// //                   <form onSubmit={() => handleUpdate(todo._id)} className="p-4">
// //                     <label className="block mb-2">
// //                       Task Title:
// //                       <input
// //                         type="text"
// //                         name="title"
// //                         defaultValue={todo.title}
// //                         onChange={(e) => setTaskTitle(e.target.value)}
// //                         className="input input-bordered w-full mt-1"
// //                         required
// //                       />
// //                     </label>
// //                     <label className="block mb-2">
// //                       Task Description:
// //                       <textarea
// //                         defaultValue={todo.description}
// //                         name="description"
// //                         onChange={(e) => setTaskDescription(e.target.value)}
// //                         required
// //                         className="textarea textarea-bordered w-full mt-1"
// //                         rows="3"
// //                       ></textarea>
// //                     </label>
// //                     <label className="block mb-2">
// //                       Deadline:
// //                       <input
// //                         type="date"
// //                         required
// //                         name="date"
// //                         defaultValue={todo.taskDeadline}
// //                         onChange={(e) => setTaskDeadline(e.target.value)}
// //                         className="input input-bordered w-full mt-1"
// //                       />
// //                     </label>
// //                     <label className="block mb-2">
// //                       Priority:
// //                       <select
// //                         required
// //                         name="priority"
// //                         defaultValue={todo.priority}
// //                         onChange={(e) => setTaskPriority(e.target.value)}
// //                         className="select select-bordered w-full mt-1"
// //                       >
// //                         <option value="Low">Low</option>
// //                         <option value="Moderate">Moderate</option>
// //                         <option value="High">High</option>
// //                       </select>
// //                     </label>
// //                     <div className="modal-action">
// //                       <button type="submit" className="btn mr-2">
// //                         Update Task
// //                       </button>
// //                       <button
// //                         type="button"
// //                         className="btn"
// //                         onClick={closeModal}
// //                       >
// //                         Close
// //                       </button>
// //                     </div>
// //                   </form>
// //                 </div>
// //               </dialog>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Todo;

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

//   const handleUpdate = async (id) => {
//     const toastId = toast.loading("Updating...");
//     const updatedTask = {
//       title: taskTitle,
//       description: taskDescription,
//       date: taskDeadline,
//       priority: taskPriority,
//     };

//     const res = await axios.put(`/tasks/${id}`, updatedTask);
//     if (res.data.modifiedCount > 0) {
//       toast.success("Update successfully", { id: toastId });
//       refetch();
//       closeUpdateModal(); // Close the update modal
//     }
//     console.log(res);
//   };

//   const openAddModal = () => setAddModalOpen(true);
//   const closeAddModal = () => setAddModalOpen(false);

//   const openUpdateModal = () => setUpdateModalOpen(true);
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

//               <button onClick={() => handleUpdate(todo._id)}>
//                 <RxUpdate className="text-3xl" />
//               </button>

//               {openUpdateModal && (
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
//                       onSubmit={() => handleUpdate(todo._id)}
//                       className="p-4"
//                     >
//                       <label className="block mb-2">
//                         Task Title:
//                         <input
//                           type="text"
//                           name="title"
//                           defaultValue={todo.title}
//                           onChange={(e) => setTaskTitle(e.target.value)}
//                           className="input input-bordered w-full mt-1"
//                           required
//                         />
//                       </label>
//                       <label className="block mb-2">
//                         Task Description:
//                         <textarea
//                           defaultValue={todo.description}
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
//                           defaultValue={todo.taskDeadline}
//                           onChange={(e) => setTaskDeadline(e.target.value)}
//                           className="input input-bordered w-full mt-1"
//                         />
//                       </label>
//                       <label className="block mb-2">
//                         Priority:
//                         <select
//                           required
//                           name="priority"
//                           defaultValue={todo.priority}
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

import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import TodoForm from "./TodoForm";
import { MdDeleteOutline } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const Todo = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskPriority, setTaskPriority] = useState("");

  const axios = useAxiosSecure();

  const { data, refetch } = useQuery({
    queryKey: ["to-do"],
    queryFn: async () => {
      const res = await axios.get(`/tasks`);
      return res.data;
    },
  });

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
    }
    console.log(res);
  };

  const openAddModal = () => setAddModalOpen(true);
  const closeAddModal = () => setAddModalOpen(false);

  const openUpdateModal = (todo) => {
    setSelectedTodo(todo);
    setUpdateModalOpen(true);
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
                          defaultValue={selectedTodo.title}
                          onChange={(e) => setTaskTitle(e.target.value)}
                          className="input input-bordered w-full mt-1"
                          required
                        />
                      </label>
                      <label className="block mb-2">
                        Task Description:
                        <textarea
                          defaultValue={selectedTodo.description}
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
                          defaultValue={selectedTodo.taskDeadline}
                          onChange={(e) => setTaskDeadline(e.target.value)}
                          className="input input-bordered w-full mt-1"
                        />
                      </label>
                      <label className="block mb-2">
                        Priority:
                        <select
                          required
                          name="priority"
                          defaultValue={selectedTodo.priority}
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
