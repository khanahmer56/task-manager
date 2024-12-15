import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTaskStore = (username) =>
  create(
    persist(
      (set, get) => ({
        tasks: [],
        addTask: (title) =>
          set((state) => ({
            tasks: [
              ...state.tasks,
              { id: Date.now(), title, completed: false },
            ],
          })),
        toggleTask: (id) =>
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, completed: !task.completed } : task
            ),
          })),
        editTask: (id, newTitle) =>
          set((state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, title: newTitle } : task
            ),
          })),
        deleteTask: (id) =>
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
          })),
        filterTasks: (filter) => {
          const tasks = get().tasks;
          console.log(tasks);
          if (filter === "all") {
            return tasks;
          } else if (filter === "completed") {
            return tasks.filter((task) => task.completed);
          } else if (filter === "pending") {
            return tasks.filter((task) => !task.completed);
          }
        },
      }),
      {
        name: `tasks_${username}`,
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
