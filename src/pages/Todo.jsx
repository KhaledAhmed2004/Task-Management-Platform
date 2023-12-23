import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import TodoForm from "./TodoForm";

const Todo = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex-1">
      <h2 className="text-center font-medium text-xl bg-base-200 py-3">
        To-Do
      </h2>
      <div className="h-full bg-base-200 mt-5 p-5">
        <button
          className="btn w-full bg-base-300 justify-center h-16 rounded-lg hover:scale-95 transition-all duration-200"
          onClick={openModal}
        >
          <h2 className="flex items-center gap-3 text-xl font-semibold">
            <IoMdAddCircleOutline className="text-2xl" /> Add To-Do
          </h2>
        </button>

        {isModalOpen && <TodoForm closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Todo;
