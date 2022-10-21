import create from 'zustand'
import {persist, devtools} from 'zustand/middleware'

let changeTheme = (set) => ({
    theme: 'light',
    userName: 'unlogged',
    toggleDarkTheme: (data) => set((state) => ({theme: data})),
    logUser: (data)=> set((state)=>({userName: data})),
    clear: ()=> set((state)=>({ theme: 'light', userName:'unlogged' }) )
})

changeTheme = persist(changeTheme, {name: 'toggleTheme'})
changeTheme = devtools(changeTheme)

const useToggleTheme = create(changeTheme)
export default useToggleTheme