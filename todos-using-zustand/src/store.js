import { create } from "zustand";

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
  isModalOpen: false,
  toggleModal: () => {
    set((state) => ({
      isModalOpen: !state.isModalOpen,
    }));
  },
});

export const useStore = create(store);
