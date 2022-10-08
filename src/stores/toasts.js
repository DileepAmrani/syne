import create from "zustand";

const useToastsStore = create((set, get) => ({
  toasts: [],
  addToast: (message, variant) => {
    const newToast = { message, variant, id: Math.random()};
    set((state) => ({ toasts: [...state.toasts, newToast] }));
    // remove toast after 5 seconds
    setTimeout(() => get().removeToast(newToast.id), 5000);
  },
  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id ) })),
}));

export default useToastsStore;