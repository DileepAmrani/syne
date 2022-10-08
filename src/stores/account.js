import create from 'zustand';

const accountStore = create((set, get) => ({
  isLoggedIn: false,
  user: null,
  login: (user) => set(() => ({ ...get(), isLoggedIn: true, user})),
  logout: () => set(() => ({ isLoggedIn: false, user: null })),
}));

export default accountStore;