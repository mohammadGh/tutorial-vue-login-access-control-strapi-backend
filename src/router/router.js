import {createRouter, createWebHistory} from 'vue-router'

// public page
import PublicHomepage from '../pages/PublicHomePage.vue';

// TODO: make these lazy import 
// user related pages
import Login from '../pages/user/Login.vue'
import Signup from '../pages/user/Signup.vue'
import Profile from '../pages/user/Profile.vue'
// page with specific access level
import NormalUserPage from '../pages/NormalUserPage.vue';
import AdminUserPage from '../pages/AdminUserPage.vue';

const routes = [
  {
    path: '/',
    component: PublicHomepage
  },
  {
    path: '/login/',
    component: Login
  },
  {
    path: '/signup/',
    component: Signup
  },
  {
    path: '/profile/',
    component: Profile
  },
  {
    path: '/normal-user-page/',
    component: NormalUserPage
  },
  {
    path: '/admin-user-page/',
    component: AdminUserPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-route'
});

// redirect to login page if not logged in and trying to access a restricted page
// router.beforeEach(async (to) => {
//   const publicPages = ['/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   if (authRequired && !auth.user) {
//       auth.returnUrl = to.fullPath;
//       return '/login';
//   }
// });

export default router;
