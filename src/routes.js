import { createRouter, createWebHistory } from "vue-router";
import indexComponent from "./components/indexComponent.vue";
import signUpComponent from "./components/signUpComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import UserhomeComponent from "./components/UserhomeComponent.vue";
import RmsUsersComponent from "./components/RmsUsersComponent.vue";
const routes = [
    {
        name: 'indexComponent',
        path: '/',
        component: indexComponent
    },
    {
        name: 'signUpComponent',
        path: '/signUpComponent',
        component: signUpComponent
    },
    {
        name: 'LoginComponent',
        path: '/LoginComponent',
        component: LoginComponent
    },
    {
        name: "UserhomeComponent",
        path: "/UserhomeComponent",
        component: UserhomeComponent,
    },
    {
        name: "RmsUsersComponent",
        path: "/RmsUsersComponent",
        component: RmsUsersComponent,
    },
];
const vue_routes = createRouter({
    history: createWebHistory(), routes
});
export default vue_routes;
