<template>
  <v-app >
    <v-main  class="mt-10 mb-10">
      <v-container  >
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-card class="card_form" style="padding:20px">
            <h2 class="text-center mt-5">Input your information</h2>
            <p class="grey--text ma-2">complete this form below with your information <br/> to booking your room</p>
              <v-row align="center" justify="center">
                <v-col cols="10" lg="8" md="8" sm="8" class="mx-auto">
              <v-form class="form">
              <h4 v-if="(user.role == 0 || user.role == 1)" class="font-italic ma-0">User name:<span class=" text-capitalize font-weight-bold font-italic"> {{user.name}}</span></h4>
              <v-row class="mt-10">
                <v-col cols="6">
                  <v-text-field
                label="Arrival Date"
                dense
                color="#212121"
                type="date"
                v-model="bookings.date_in"
                @change="getRoom()"
              />
                </v-col>
                <v-col cols="6">
                            <v-text-field
                label="Departure Date"
                dense
                color="#212121"
                type="date"
                v-model="bookings.date_out"
                @change="getRoom()"
              />
                </v-col>
              </v-row>

              <v-select label="room" v-model="bookings.room_id" :items="items" item-value="id" item-text="name" item color="#212121"></v-select>
              
              <v-select
                :items="items1"
                label="Adult"
                color="#212121"
                v-model="bookings.adults"
              ></v-select>
              <v-select
                :items="items2"
                label="Children"
                color="#212121"
                v-model="bookings.children"
              ></v-select>
              <v-text-field label="Tel" v-model="bookings.tel" dense color="#212121" />
              <!-- <v-text-field disabled v-model="bookings.user_id" dense color="#212121"/>   -->
              <v-btn color="blue" class="my-5 mr-4 align-self-center " block @click="booking">
                Reserve
              </v-btn>
            </v-form>
                </v-col>
              </v-row>
          </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ref ,onMounted} from 'vue';
import axios from 'axios';
  export default {
    name: "BookingView",
    data() {
      return {
        tabs: null,
        items1: ["Adult", "1", "2", "3"],
        items2: ["Children", "1", "2", "3"],

        items:[],

        bookings: {
          user_id:'',
          date_in:'',
          date_out:'',
          room_id:'',
          adults:'',
          children:'',
          tel:'',
        },
      };
    },
  methods: {
    async booking (){
      this.bookings.user_id = this.user.id;
      console.log(this.bookings);
      await axios.post('bookings', this.bookings).then((res)=>{
        let token = res.data.user.api_token;
        localStorage.setItem("token", token);
        
      }).catch(error => {
        console.log(error);
      }
      );
    },

    async getRoom() {
        await axios.get(`available_rooms/${this.bookings.date_in}`).then((res) => {
         this.items = res.data.data;
         console.log(this.items,"ddddd")
        })
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

<style>

</style>