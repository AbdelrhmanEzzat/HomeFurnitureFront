import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

import Home from "./views/Home.vue";
import Shop from "./views/Shop.vue";
import Post from "./views/Post.vue";
import PostDetail from "./views/PostDetail.vue";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "index",
            components: { default: Index, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/home",
            name: "home",
            components: { default: Home, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/landing",
            name: "landing",
            components: { default: Landing, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/login",
            name: "login",
            components: { default: Login, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
            },
        },
        {
            path: "/profile",
            name: "profile",
            components: { default: Profile, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/signup",
            name: "signup",
            components: { default: Signup, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/shop",
            name: "shop",
            components: { default: Shop, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/cart",
            name: "cart",
            components: { default: Profile, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/post",
            name: "post",
            components: { default: Post, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/postdetail",
            name: "postdetail",
            components: {
                default: PostDetail,
                header: MainNavbar,
                footer: MainFooter,
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
    ],
    scrollBehavior: (to) => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    },
});