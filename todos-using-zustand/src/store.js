import { create } from "zustand";

const store = (set) => ({
  tasks: [
    {
      title: "Test Task 1",
      type: 1,
    },
  ],
});

export const useStore = create(store);
