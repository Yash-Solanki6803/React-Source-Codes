import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  tasks: [
    {
      title: "Test Task 1",
      type: 1,
    },
    {
      title: "Test Task 2",
      type: 2,
    },
    {
      title: "Test Task 3",
      type: 3,
    },
  ],

  addTask: ({ title, type }) => {
    type = parseInt(type);
    set((state) => ({
      tasks: [...state.tasks, { title, type }],
    }));
    console.log("Task Added");
  },

  deleteTask: (title) => {
    console.log(title);
    set((state) => ({
      tasks: state.tasks.filter((task) => task.title !== title),
    }));
    console.log("Task Removed");
  },

  isModalOpen: false,
  toggleModal: () => {
    set((state) => ({
      isModalOpen: !state.isModalOpen,
    }));
  },
});

export const useStore = create(persist(store, { name: "state" }));
