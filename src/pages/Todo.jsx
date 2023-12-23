// import { useState } from "react";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import TodoForm from "./TodoForm";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../hooks/useAxiosSecure";

// const Todo = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const axios = useAxiosSecure();

//   const { data, isLoading, refetch } = useQuery({
//     queryKey: ["to-do"],
//     queryFn: async () => {
//       const res = await axios.get(`/tasks`);
//       return res.data;
//     },
//   });

//   console.log(data);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <div className="flex-1">
//       <h2 className="text-center font-medium text-xl bg-base-200 py-3">
//         To-Do
//       </h2>
//       <div className="h-full bg-base-200 mt-5 p-5 space-y-5">
//         <button
//           className="btn w-full bg-base-300 justify-center h-16 rounded-lg hover:scale-95 transition-all duration-200"
//           onClick={openModal}
//         >
//           <h2 className="flex items-center gap-3 text-xl font-semibold">
//             <IoMdAddCircleOutline className="text-2xl" /> Add To-Do
//           </h2>
//         </button>

//         {isModalOpen && <TodoForm closeModal={closeModal} />}
//         {data.map((todo, idx) => (
//           <h2 key={idx}>{todo.title}</h2>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;

// import { useState } from "react";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import TodoForm from "./TodoForm";
// import { MdDeleteOutline } from "react-icons/md";
// import { useQuery } from "@tanstack/react-query";
// import { RxUpdate } from "react-icons/rx";

// import useAxiosSecure from "../hooks/useAxiosSecure";
// import toast from "react-hot-toast";

// const Todo = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const axios = useAxiosSecure();

//   const { data, refetch } = useQuery({
//     queryKey: ["to-do"],
//     queryFn: async () => {
//       const res = await axios.get(`/tasks`);

//       return res.data;
//     },
//   });

//   const handleDelete = async (id) => {
//     const res = await axios.delete(`/tasks/:${id}`)
//     if (res.data.deletedCount > 0) {
//       toast.success("Delete successfully");
//       refetch();
//     }
//     console.log(res);
//   };
//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <div className="flex-1">
//       <h2 className="text-center font-medium text-xl bg-base-200 py-3">
//         To-Do
//       </h2>
//       <div className="h-full bg-base-200 mt-5 p-5 space-y-5">
//         <button
//           className="btn w-full bg-base-300 justify-center h-16 rounded-lg hover:scale-95 transition-all duration-200"
//           onClick={openModal}
//         >
//           <h2 className="flex items-center gap-3 text-xl font-semibold">
//             <IoMdAddCircleOutline className="text-2xl" /> Add To-Do
//           </h2>
//         </button>

//         {isModalOpen && <TodoForm closeModal={closeModal} />}
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
//               <button onClick={()=>handleDelete(_id)}>
//                 <MdDeleteOutline className="text-3xl" />
//               </button>
//               <RxUpdate className="text-3xl" />
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
import { useQuery } from "@tanstack/react-query";
import { RxUpdate } from "react-icons/rx";

import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Todo = () => {
  const [isModalOpen, setModalOpen] = useState(false);
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

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex-1">
      <h2 className="text-center font-medium text-xl bg-base-200 py-3">
        To-Do
      </h2>
      <div className="h-full bg-base-200 mt-5 p-5 space-y-5">
        <button
          className="btn w-full bg-base-300 justify-center h-16 rounded-lg hover:scale-95 transition-all duration-200"
          onClick={openModal}
        >
          <h2 className="flex items-center gap-3 text-xl font-semibold">
            <IoMdAddCircleOutline className="text-2xl" /> Add To-Do
          </h2>
        </button>

        {isModalOpen && <TodoForm closeModal={closeModal} />}
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
              <button>
                <RxUpdate className="text-3xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
