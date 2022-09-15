<template>
  <div id="app">
    <nav class="dark--text body">
      <v-app-bar
        app
        absolute
        color="black"
        elevation="6"
        style="padding: 0px 50px"
        tile
      >
        <router-link
          style="color: black"
          tag="a"
          class="hidden-sm-and-down"
          to="/"
        >
          <v-toolbar-title
            class="text-uppercase d-flex align-center"
            style="color: white"
          >
            <img
              alt="logo"
              v-for="(img, i) in imgs"
              :key="i"
              :src="img.src"
              contain
              width="40px"
              class="ma-3"
            />
            <span> Keolanee hotel </span>
          </v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>

        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <v-icon>mdi-menu</v-icon>
        </label>

        <ul class="nav">
          <li>
            <router-link tag="a" to="/"><span>ໜ້າຫຼັກ</span></router-link>
          </li>
          <li>
            <router-link tag="a" to="/room"><span>ຫ້ອງພັກ</span></router-link>
          </li>
          <li>
            <router-link tag="a" to="/info"
              ><span>ຂໍ້ມູນໂຮງແຮມ</span></router-link
            >
          </li>
          <li >
            <router-link tag="a" to="/faq"><span>ຊ່ວຍເຫຼືອ</span></router-link>
          </li>

          <li v-if="(user.role==0|| user.role==1)">
            <div
              style="color: white; cursor: pointer"
              class="text-md-body-2 text-center ml-4"
            >
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    color="white"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    text
                    class="us white--text text-capitalize font-weight-black"
                  >
                    {{ user.name }}
                    <v-icon color="white">mdi-chevron-down</v-icon>
                  </span>
                </template>
                <v-list class="px-5 black--text">
                  <!-- <v-list-item
                    class="px-5"
                    v-for="(item, index) in items"
                    :key="index"
                  >
                    <router-link
                      tag="a"
                      to="/profile"
                      style="color: black"
                      class="text-decoration-none"
                      v-if="user.role == 0"
                    >
                      <span style="cursor: pointer">{{ item.title1 }}</span>
                    </router-link>
                    <router-link
                      tag="a"
                      to="/profile"
                      style="color: black"
                      class="text-decoration-none"
                    >
                      <span style="cursor: pointer">{{ item.title3 }}</span>
                    </router-link>
                    <a style="color: black">
                      <span style="cursor: pointer" @click="Logout">{{
                        item.title2
                      }}</span>
                    </a>
                  </v-list-item> -->
               <v-list-item v-if="user.role == 0">
                <a href="/profile" style="color: black">{{items.title1}}</a>
               </v-list-item>
               <v-list-item v-if="user.role == 1">
                <a href="" style="color: black">{{items.title2}}</a>
               </v-list-item>
               <v-list-item>
                <a href="" @click="Logout" style="color: black">{{items.title3}}</a>
               </v-list-item>
                </v-list>
              </v-menu>
              <!-- <span  @click="Logout" style="color: white">Logut</span> -->
            </div>
          </li>

          <!-- <router-link 
          ><span>log out</span></router-link
        > -->

          <li v-if="!(user.role==0|| user.role==1)">
            <router-link tag="a" to="/login" 
              ><span>ເຂົ້າສູ່ລະບົບ</span></router-link
            >
          </li>
        </ul>
      </v-app-bar>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
li {
  text-align: center;
}
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
#app {
  text-align: center;
}
nav {
  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    padding: 15px;
  }
}
nav ul {
  float: right;
  max-width: 50%;
}
nav ul li {
  display: inline-block;
  line-height: 0px;
  margin: 0 0px;
}
nav ul li a {
  color: white;
  padding: 7px 13px;
  /* text-transform: uppercase; */
}
.checkbtn .v-icon {
  font-size: 30px;
  color: #ffffff;
  float: right;
  line-height: 0px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check {
  display: none;
}
@media (max-width: 952px) {
  nav ul li a .us {
    font-size: 16px;
  }
}
@media (max-width: 1070px) {
  .checkbtn .v-icon {
    display: block;
  }
  ul {
    position: fixed;
    margin-right: 0;
    width: 100%;
    z-index: 100000000;
    height: 100vh;
    background: #616161;
    opacity: 0.9;
    top: 100%;
    right: -100%;
    text-align: center;
    transition: all 0.3s;
  }
  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a .us {
    font-size: 20px;
  }
  #check:checked ~ ul {
    right: 0;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap");
* {
  font-family: "Noto Sans Lao", sans-serif;
}
</style>

<script>
import header from "@/hooks/Headers";
import { mapGetters } from "vuex";
import { IS_User_AUTHENTICATE_GETTER } from "@/store/module/user";
export default {
  name: "NavbarView",
  setup() {},

  data() {
    return {
      imgs: [
        {
          src: "https://media.discordapp.net/attachments/826834529435648000/1007206321491300352/Keolanee_edited.png?width=662&height=662",
        },
      ],
      // user: null,
      // token: this.$store.state["users/user"],
      // items: [{title1: "ຂໍ້ມູນສວ່ນຕົວ" }, { title2: "ອອກຈາກລະບົບ" }, { title3: "dashboard" }],
      items:{
         title1: "ຂໍ້ມູນສວ່ນຕົວ" ,
         title2: "dashboard" ,
         title3: "ອອກຈາກລະບົບ" ,
      }
    };
  },
  watch: {
    token(newVale, oldvale) {
      console.log("sdfhsadfhasdgfjasdjkf");
    },
  },
  beforeCreate() {
    this.$store.dispatch("users/getData");
    // this.user = ;
  },
  created() {
    console.log(55555555, this.user);
  },
  methods: {
    Logout() {
      localStorage.clear();
      window.location.reload();
      this.$router.push('/')
    },
  },
  computed: {
    user() {
      return this.$store.getters["users/GetUser"];
    },
    userLoadding() {
      return this.$store.getters["users/loadding"];
    },
  },
};
</script>
