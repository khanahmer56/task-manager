import React from "react";
import { useAuthStore } from "../store/authStore";

const SideBar = ({ category, setCategory }) => {
  const data = [
    {
      title: "All Tasks",
      subTitle: "all",
    },
    {
      title: "Completed Tasks",
      subTitle: "completed",
    },
    {
      title: "Pending Tasks",
      subTitle: "pending",
    },
  ];

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="flex flex-col items-center justify-between text-[#fff] h-screen py-4">
      <div className="border-b-2 border-gray-500 p-2">
        <h1 className="text-xl">
          UserName : <span className="font-bold">{user}</span>
        </h1>
      </div>
      <div className="w-[90%] flex flex-col gap-4">
        {data.map((item, index) => (
          <div
            className={`p-2 hover:bg-gray-700 cursor-pointer text-center ${
              category === item.subTitle && "bg-gray-400"
            } rounded-lg`}
            key={index}
            onClick={() => setCategory(item.subTitle)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <button
        className="bg-red-700 p-2 hover:bg-red-900 w-[80%] mx-auto rounded-lg"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default SideBar;
