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
import Chair from "./views/Chair.vue";
import Post from "./views/Post.vue";
import Cart from "./views/Cart.vue";
import Chat from "./views/Chat.vue";
import SinglePost from "./views/SinglePost.vue";
import SingleProduct from "./views/SingleProduct.vue";
import Categories from "./views/Categories.vue";
import Aboutus from "./views/Aboutus.vue";

import product from "./views/components/Product.vue";
import poost from "./views/components/Poost.vue";
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

        //shop test route
        {
            path: "/product/:id",
            name: "product",
            component: product,
            props: true,
        },
        {
            path: "/poost/:id",
            name: "poost",
            component: poost,
            props: true,
        },
        //shop test route

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
            path: "/aboutus",
            name: "aboutus",
            components: { default: Aboutus, header: MainNavbar, footer: MainFooter },
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
            path: "/chair",
            name: "chair",
            components: { default: Chair, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/cart",
            name: "cart",
            components: { default: Cart, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/chat",
            name: "chat",
            components: { default: Chat, header: MainNavbar, footer: MainFooter },
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
            path: "/singlepost",
            name: "singlepost",
            components: {
                default: SinglePost,
                header: MainNavbar,
                footer: MainFooter,
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/singleproduct",
            name: "singleproduct",
            components: {
                default: SingleProduct,
                header: MainNavbar,
                footer: MainFooter,
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/categories",
            name: "categories",
            components: {
                default: Categories,
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