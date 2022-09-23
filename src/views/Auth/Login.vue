<template>
  <v-app>
    <v-main class="d-flex align-center justify-center">
      <v-col cols="8" sm="10" md="10" lg="6" class="mx-auto">
        <v-card class="py-5 elevation-6">
          <div class="text-uppercase mt-5">
            <h2>ເຂົ້າສູ່ລະບົບ</h2>
          </div>
          <p>ເຂົ້າສູ່ລະບົບບັນຊີຂອງທ່ານ</p>
          <h6 class="text-center grey--text">
            ເຂົ້າສູ່ລະບົບບັນຊີຂອງທ່ານ ເພື່ອໃຫ້ທ່ານສາມາດຈອງຫ້ອງພັກ
            <br />ແລະ ແກ້ໄຂລາຍລະອຽດຕ່າງໆຂອງບັນຊີທ່ານ
          </h6>

          <div v-if="error">
          {{error}}
          </div>

          <v-form ref="form" v-model="valid" lazy-validation class="pa-10">
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="login.email"
                  :rules="rules.emailMatch"
                  label="E-mail"
                  placeholder="ເພີ່ມເມວຂອງທ່ານ"
                  required
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="login.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  outlined
                  dense
                  placeholder="ລະຫັດຜ່ານຂອງທ່ານ"
                  @click:append="show1 = !show1"
                ></v-text-field>
                <v-btn color="blue" dark block class="my-4" @click="logIn"
                  >ເຂົ້າສູ່ລະບົບ</v-btn
                >
                <p>
                  ທ່ານຍັງບໍ່ມີບັນຊີບໍ?
                  <router-link to="/signup"><span> ລົງທະບຽນ</span></router-link>
                </p>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import header from "@/hooks/Headers";
export default {
  name: "LoginView",
  data() {
    return {
      show1: false,
      password: "Password",
      valid: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
      error: null,
      login: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    //login
    async logIn() {
      if (this.$refs.form.validate() == true) {
        await axios.post("login", this.login).then((res) => {
          let token = res.data.token;

          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
          localStorage.setItem("token", token);
          this.$router.replace("/");
          setTimeout(() => {
            window.location.reload();
          }, 10);
          //window.location.reload();
        })
        .catch((error)=>{
          console.log(error);
          alert('Something was wrong !')
        })

      }

      // const response = await axios.post('login', this.user);

      // localStorage.setItem('token', response.data.token);
      // this.$router.push("/");
    },
  },
};
</script>

<style>
v-text-field {
  margin-right: 20px;
  margin-left: 20px;
  font-size: 14px;
}
</style>
