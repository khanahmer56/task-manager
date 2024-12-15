import React from "react";
import SideBar from "../components/SideBar";
import TaskList from "../components/TaskList";
import InputModal from "../components/InputModal";

const TaskPage = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [task, setTask] = React.useState("");
  const [isEdit, setIsEdit] = React.useState("");
  const [category, setCategory] = React.useState("all");

  function openModal(data) {
    setIsOpen(true);
    if (data) {
      setIsEdit(data?.id);
      setTask(data?.title);
    }
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex min-h-screen h-full md:h-screen gap-4 bg-black/80">
      <div className="border-2 border-gray-500 rounded-lg w-1/6 hidden md:block">
        <SideBar category={category} setCategory={setCategory} />
      </div>
      <div className="border-2 border-gray-500 rounded-lg w-full md:w-5/6">
        <TaskList openModal={openModal} category={category} />
      </div>
      <InputModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        afterOpenModal={afterOpenModal}
        task={task}
        setTask={setTask}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
    </div>
  );
};

export default TaskPage;
