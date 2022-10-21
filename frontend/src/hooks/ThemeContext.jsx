import create from 'zustand'

const changeTheme = (set) => ({
    dark: false,
    toggleDarkTheme: (data) => set((state) => ({dark: data}))
})

const useToggleTheme = create(changeTheme)
export default useToggleTheme