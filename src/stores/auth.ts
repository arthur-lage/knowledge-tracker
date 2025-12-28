import { defineStore } from "pinia";

export interface AuthUser {
    id: string
    name: string
    email: string
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as AuthUser | null
    }),

    actions: {
        setUser(user: AuthUser) {
            this.user = user
            localStorage.setItem("currentUser", JSON.stringify(user))
        },
        loadUser() {
            const currUser = localStorage.getItem("currentUser")
            if(currUser) {
                this.user = JSON.parse(currUser)
            }
        },
        logout() {
            this.user = null
            localStorage.removeItem("currentUser")
        }
    }
}) 