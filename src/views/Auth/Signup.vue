<template>
  <div class="my-10">
    <v-main class="d-flex align-center justify-center">
      <v-col cols="10" sm="10" md="8" lg="6" class="mx-auto">
        <v-card class="py-5 elevation-6">
          <div class="text-uppercase mt-5">
            <h2>ລົງທະບຽນ</h2>
          </div>
          <p>ລົງທະບຽນສຳລັບບັນຊີ</p>
          <h6 class="text-center grey--text">
            ຂໍໃຫ້ທ່ານເພີ່ມຂໍ້ມູນທັງໝົດ ເພື່ອໃຫ້ສາມາດສ້າງບັນຊີຂອງທ່ານ <br />ແລະ
            ໃຫ້ສາມາດຈອງຫ້ອງພັກໄດ້
          </h6>

          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="pa-10"
            @submit="signup"
          >
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8">
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="ຊື່"
                      placeholder="Enter your First Name"
                      outlined
                      required
                      dense
                      color="blue"
                      autocomplete="false"
                      class="mt-4 text-md-body-2"
                      v-model="user.name"
                    />
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="ນາມສະກຸນ"
                      placeholder="Enter your Last Name"
                      outlined
                      required
                      dense
                      color="blue"
                      autocomplete="false"
                      class="mt-4 text-md-body-2"
                      v-model="user.lastname"
                    />
                  </v-col>
                </v-row>

                <v-text-field
                  v-model="user.phone"
                  label="ເບີໂທລະສັບ"
                  placeholder="Enter your Phone Number"
                  required
                  outlined
                  dense
                  class="text-md-body-2"
                ></v-text-field>
                <v-text-field
                  v-model="user.email"
                  :rules="[rules.required]"
                  label="ເມວ"
                  placeholder="Enter your Email"
                  required
                  outlined
                  dense
                  class="text-md-body-2"
                ></v-text-field>

                <v-row>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="user.village"
                      label="ບ້ານ"
                      placeholder="Enter your village"
                      required
                      outlined
                      dense
                      class="text-md-body-2"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="user.district"
                      label="ເມືອງ"
                      placeholder="Enter your distice"
                      required
                      outlined
                      dense
                      class="text-md-body-2"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="user.province"
                      label="ແຂວງ"
                      placeholder="Enter your province"
                      required
                      outlined
                      dense
                      class="text-md-body-2"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-text-field
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="ລະຫັດຜ່ານ"
                  hint="At least 8 characters"
                  class="text-md-body-2"
                  v-model="user.password"
                  counter
                  outlined
                  dense
                  placeholder="Enter your password"
                  @click:append="show1 = !show1"
                ></v-text-field>
                <v-text-field
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="ຢືນຢັນ-ລະຫັດຜ່ານ"
                  hint="At least 8 characters"
                  class="text-md-body-2"
                  v-model="user.password_confirmation"
                  counter
                  outlined
                  dense
                  placeholder="Confirm your password"
                  @click:append="show1 = !show1"
                ></v-text-field>
                <v-btn color="blue" dark block class="my-4" @click="signup"
                  >ລົງທະບຽນ</v-btn
                >
                <p>
                  ທ່ານມີບັນຊີແລ້ວບໍ?
                  <router-link to="/login"
                    ><span> ເຂົ້າສູ່ລະບົບ</span></router-link
                  >
                </p>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginView",
  mounted() {
    let item = { id: 1, user: "name" };
    localStorage.setItem("USER----TOKEN", item);
  },
  data() {
    return {
      show1: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 1 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },

      user: {
        name: "",
        lastname: "",
        phone: "",
        email: "",
        village: "",
        district: "",
        province: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    async signup() {
      await axios.post("register", this.user).then((res) => {
        let token = res.data.user.api_token;
        localStorage.setItem("token", token);

        this.$router.push("/login");
        // setTimeout(console("sss", 1000));
      });
    },

    // async signup () {
    //   const response = await axios.post('register', this.user);

    //   this.$router.push('/login');
    // }
  },
};
</script>

<style>
v-text-field {
  margin-right: 20px;
  margin-left: 20px;
}
</style>
