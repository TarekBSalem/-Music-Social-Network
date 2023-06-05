import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import loginView from '../views/LoginView.vue'
import AccountView from '../views/AccountView.vue'
import ProfileSectionView from '../views/Account/ProfileSectionView.vue'
import EditProfile from '../views/Account/EditProfile.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    {
        path: '/login',
        name: 'login',
        component: loginView
    },
    {
        path: '/account',
        component: AccountView,
        children: [{
            path: 'profile',
            name: 'ProfileSection',
            component: ProfileSectionView
        }, {
            path: 'edit-profile',
            name: 'edit-profile',
            component: EditProfile,
        }]
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router