<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto" style="background-color:white;"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Login</h4>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>
              <form @submit.prevent="handleSubmit">
              <p slot="description" class="description">Or Be Classical</p>
              <!-- <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>First Name...</label>
                <md-input v-model="firstname"></md-input>
              </md-field> -->
              
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>

              <button slot="footer" class="md-simple md-success md-lg">
                Get Started
              </button>
              
              </form>
               <md-button
                href="/#/signup"
                slot="footer"
                class="md-simple md-success md-lg"
              >
                Sign up
              </md-button>
             
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import axios from 'axios'


export default {
  name: 'Login',
  components: {
    //LoginCard,
  },
  bodyClass: "login-page",
  data() {
    return {
      email: '',
      password: ''
    };
  },
  
   methods: {
    async handleSubmit(){

      // const response = await axios.post('https://homefurniture00.000webhostapp.com/api/login',{
      //   email: this.email,
      //   password: this.password
      // });
      //   window.localStorage.setItem('token', response.data.token);
        //this.$router.push('/home');

         fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });
    }
   },

  
  props: {
    header: {
      type: String,
      default: require("@/assets/img/car2.webp"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  
};
</script>

<style lang="css">
.flex-column .tab-content {
  padding-left: 0px;
}
</style>
