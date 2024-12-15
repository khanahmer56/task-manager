import React from "react";
import Modal from "react-modal";
import { useTaskStore } from "../store/taskStore";
import { useAuthStore } from "../store/authStore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "auto",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: "black",
    transform: "translate(-50%, -50%)",
  },
};
function InputModal({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  task,
  setTask,
  isEdit,
  setIsEdit,
}) {
  const user = useAuthStore((state) => state.user);

  const taskStore = useTaskStore(user);
  const { addTask, editTask } = taskStore();
  const handleAddTask = () => {
    if (task) {
      isEdit ? editTask(isEdit, task) : addTask(task);
      setTask("");
      setIsEdit("");
      closeModal();
    }
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <input
          type="text"
          placeholder="Enter Your Task"
          className="w-full border-2 border-gray-500 p-4 rounded-lg outline-none"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-green-600 w-full mt-4 p-2 rounded-lg"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </Modal>
    </div>
  );
}

export default InputModal;
