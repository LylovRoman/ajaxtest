import Vue from "vue";
import VueRouter from "vue-router";
import StorageComponent from "./components/StorageComponent";
import Create from "./components/User/Create";
import Index from "./components/User/Index";
import Edit from "./components/User/Edit";
import Show from "./components/User/Show";
Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/files', component: () => import('./components/StorageComponent'),
            name: 'files'
        },
        {
            path: '/usersadd', component: () => import('./components/User/Create'),
            name: 'user.add'
        },
        {
            path: '/usersget', component: () => import('./components/User/Index'),
            name: 'user.get'
        },
        {
            path: '/usersedit/:id', component: () => import('./components/User/Edit'),
            name: 'user.edit'
        },
        {
            path: '/usersshow/:id', component: () => import('./components/User/Show'),
            name: 'user.show'
        },
    ]
})
