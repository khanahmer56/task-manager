import React from "react";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { useAuthStore } from "../store/authStore";
import { useTaskStore } from "../store/taskStore";

const TaskList = ({ openModal, category }) => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const taskStore = useTaskStore(user);
  const { tasks, toggleTask, deleteTask, filterTasks } = taskStore();
  const data = filterTasks(category || "all");
  if (!user) {
    navigate("/");
    return null;
  }
  return (
    <>
      <div className="flex justify-between md:justify-end p-4">
        <div className="flex gap-4 items-center text-white text-center md:hidden">
          <button
            className="bg-red-700 p-2 hover:bg-red-900  mx-auto rounded-lg"
            onClick={logout}
          >
            Logout
          </button>{" "}
          <p>
            UserName : <span className="font-bold">{user}</span>
          </p>
        </div>
        <button onClick={() => openModal()}>
          <IoMdAddCircle size={40} color="white" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[#fff] gap-4 p-4">
        {data?.map((task) => (
          <div
            className="border-2 border-gray-500 rounded-lg p-4 bg-gray-600"
            key={task.id}
          >
            <p>{task.title}</p>
            <div className="flex justify-between mt-4 w-full items-center">
              <button
                className={`${
                  task.completed ? "bg-green-600" : "bg-orange-600"
                } p-2 rounded-lg px-4`}
                onClick={() => toggleTask(task.id)}
              >
                {task.completed ? <span>Completed</span> : <span>Pending</span>}
              </button>
              <div className="flex gap-4">
                <button onClick={() => openModal(task)}>
                  <FiEdit size={20} />
                </button>
                <button onClick={() => deleteTask(task.id)}>
                  <AiFillDelete size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
        <div
          className="border-2 border-gray-500 rounded-lg p-4 bg-gray-600 flex justify-center items-center flex-col cursor-pointer"
          onClick={() => openModal()}
        >
          <IoMdAddCircle size={30} />
          <h2 className="text-lg font-bold">Add New Task</h2>
        </div>
      </div>
    </>
  );
};

export default TaskList;
