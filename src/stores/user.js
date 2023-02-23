import { defineStore } from 'pinia'
import UserApi from '@/api/user.js'
import router from '@/router/router.js'

export const getUserStore = defineStore('user',{
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(username, password) {
            const userResponse = await UserApi.login({ username, password });
            this.user = userResponse;

            // store user details to keep user logged in between page refreshes
            if (this.user)
                localStorage.setItem('user', JSON.stringify(this.user));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
})