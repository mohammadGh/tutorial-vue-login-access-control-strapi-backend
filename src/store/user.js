import {defineStore} from 'pinia'
import {userApi} from '@/api/user.js' 

const userStore = defineStore({
    state:()=>({
        user:JSON.parse(localStorage.getItem(user)),
        returnUrl:null
    }),
    actions: {
        async login(username, password) {
            const userResponse = await userApi.login({ username, password });
            this.user = userResponse;

            // store user details to keep user logged in between page refreshes
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

export {userStore};