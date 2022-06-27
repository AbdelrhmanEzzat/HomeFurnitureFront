<template>
  <div class="wrapper">
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      rel="stylesheet"
    />
    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      rel="stylesheet"
    />
    <!-- MDB -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.css"
      rel="stylesheet"
    />
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
            style="background-color: white;display: inline-block;position: relative;width: 100%;margin: 30px 0;overflow: unset;-webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);border-radius: 6px;color: rgba(0,0,0, 0.87);background: #fff;"
          >
            <login-card header-color="green">
              <h4
                slot="title"
                class="card-title"
                style="text-align: center;padding-top: 10%;background: linear-gradient(60deg, #66bb6a, #388e3c);box-shadow: 0 5px 20px 0px rgb(0 0 0 / 20%), 0 13px 24px -11px rgb(76 175 80 / 60%);padding-bottom: 10%;"
              >
                Login
              </h4>
              <!-- <md-button
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
                <p slot="description" class="description">Or Be Classical</p> -->
              <!-- <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>First Name...</label>
                <md-input v-model="firstname"></md-input>
              </md-field> -->

              <md-field
                class="md-form-group"
                slot="inputs"
                style="align-items: baseline;"
              >
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field
                class="md-form-group"
                slot="inputs"
                style="align-items: baseline;"
              >
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <br />
              <div class="row" style="width:100%;align-items: center">
                <div
                  class="col-lg-8 col-md-12 left-box"
                  style="width: 60%;padding: 0% 8%;"
                >
                  <button
                    slot="footer"
                    style="background-color: #4CAF50;color: white;padding: 12px 15px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;"
                  >
                    Get Started
                  </button>
                </div>
                <!-- </form> -->

                <div
                  class="col-lg-8 col-md-12 left-box"
                  style="width: 40%;padding: 0% 7%;"
                >
                  <button
                    href="#/signup"
                    slot="footer"
                    style="background-color: #4CAF50;color: white;padding: 12px 15px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </login-card>
            <div><br /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import axios from "axios";

export default {
  name: "Login",
  components: {
    //LoginCard,
  },
  bodyClass: "login-page",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async handleSubmit() {
      const response = await axios.post("api/login", {
        email: this.email,
        password: this.password,
      });
      localStorage.setItem("token", response.data.token);
      //this.$router.push('/home');
    },
  },

  //  async created() {
  //   await axios.get("api/users", {
  //     headers: {
  //        'Content-Type': 'application/json' ,
  //       Authorization: "Bearer " + localStorage.getItem($token),

  //     }
  //   });
  // },
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
