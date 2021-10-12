import create from 'zustand';

export const useLoginStore = create((set) => ({

    login: false,
    changeLogin: () => set((state) => ({ ...state, login: !state.login }))

}))