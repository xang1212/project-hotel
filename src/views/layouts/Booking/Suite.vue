<template>
  <v-app class="container">
    <v-card>
      <v-main>
        <v-row class="header mx-0">
          <v-col cols="12" md="12" lg="12"><h1>SUITE ROOM</h1></v-col>
        </v-row>
        <v-row class="row1">
          <v-col cols="12" md="12" lg="12"
            ><h2 class="text-start">Little description</h2></v-col
          >
          <v-col cols="12" md="12" lg="12"
            ><p class="text-start mx-10">
              Make yourself comfortable in any of our serene guest rooms and
              spacious suites. Floor-to-ceiling soundproof windows afford
              striking views of the airport, the cityscape, or the Canadian
              Rockies. Work via wireless High Speed Internet Access at a large
              desk, then watch a 55-inch flat screen TV with a drink from a
              mini-refrigerator. Choose one king-size or two queen Heavenly®
              Beds for a revitalizing night’s sleep, and refresh with the
              Heavenly® Bath. Upgrade your stay with access to the Hotel Luxe
              Club Lounge, an exclusive facility with elevated benefits and
              amenities.
            </p>
            <div>
              <v-card-actions>
                <v-btn color="grey lighten-1" class="btn"
                  ><router-link to="/booking">
                    View Details<v-icon
                      >mdi-arrow-right-thick</v-icon
                    ></router-link
                  ></v-btn
                >
              </v-card-actions>
            </div>
          </v-col>
        </v-row>
        <hr class="my-5 mx-10 style" />
        <!-- ຮູບສະແດງ -->
        <v-row class="row2">
          <v-col cols="12" md="12" lg="12"
            ><h2 class="text-center mb-5">Gallery of Elegance</h2></v-col
          >
          <v-col class="d-flex child-flex" cols="4">
            <v-img
              src="https://cdn.discordapp.com/attachments/826834529435648000/1020233119678345226/Standard1.png"
            />
          </v-col>
          <v-col class="d-flex child-flex" cols="4">
            <v-img
              src="https://cdn.discordapp.com/attachments/826834529435648000/1020233119862898728/Standard2.png"
            />
          </v-col>
          <v-col class="d-flex child-flex" cols="4">
            <v-img
              src="https://cdn.discordapp.com/attachments/826834529435648000/1020233120122937364/Standard3.png"
            />
          </v-col>
          <v-col class="d-flex child-flex" cols="4">
            <v-img
              src="https://cdn.discordapp.com/attachments/826834529435648000/1020233120332660766/Standard4.png"
            />
          </v-col>
          <v-col class="d-flex child-flex" cols="4">
            <v-img
              src="https://cdn.discordapp.com/attachments/826834529435648000/1020233120554950747/Standard5.png"
            />
          </v-col>
          <v-col class="d-flex child-flex" cols="4">
            <v-img
              src="https://cdn.discordapp.com/attachments/826834529435648000/1020233120798212166/Standard6.png"
            />
          </v-col>
        </v-row>
        <hr class="my-10 mx-10 style" />
        <!-- ແທບສະແດງລາຍລະອຽດ -->
        <v-row class="row3">
          <v-col cols="12">
            <v-tabs color="#212121" v-model="tabs">
              <v-tab> <p>Overview</p> </v-tab>
              <v-tab> <p>Features</p> </v-tab>
            </v-tabs>
          </v-col>
        </v-row>
        <!-- ຄອນເທັນແທບ -->
        <v-tabs-items v-model="tabs" class="text-start row3">
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-row>
                  <v-col lg="6">
                    <p>
                      <strong>Room Size:</strong> 41 – 45 sq m / 441 – 484 sq ft
                    </p>
                    <p><strong>RegularOccupancy:</strong> Up to 3 adults</p>
                    <p><strong>View:</strong> Panama Sea view</p>
                    <p><strong>Smoking:</strong> Yes</p>
                  </v-col>
                  <v-col lg="6">
                    <p><strong>Bed Size:</strong> King or Regular</p>
                    <p>
                      <strong>Location:</strong> 2/F – 6/F (Original Building)
                    </p>
                    <p><strong>Bed:</strong>250 Thread Count Sheets</p>
                    <p><strong>Room Service:</strong> Yes</p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-row>
                  <v-col lg="6">
                    <p><v-icon>mdi-check-bold</v-icon> Indoor living room</p>
                    <p>
                      <v-icon>mdi-check-bold</v-icon> Open garden with a swing
                    </p>
                    <p><v-icon>mdi-check-bold</v-icon> Bonfire Facility</p>
                    <p><v-icon>mdi-check-bold</v-icon> Working Table</p>
                  </v-col>
                  <v-col lg="6">
                    <p><v-icon>mdi-check-bold</v-icon> Wooden veranda</p>
                    <p><v-icon>mdi-check-bold</v-icon> Wooden veranda</p>
                    <p><v-icon>mdi-check-bold</v-icon> Hammock</p>
                    <p><v-icon>mdi-check-bold</v-icon> A/C (Surfer Dude)</p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <hr class="mb-5 mx-10 style" />
        <!-- ແທບສະແດງເຄື່ອງໃຊ້ທີ່ມີໃນຫ້ອງ -->
        <v-row class="row4">
          <v-col lg="12"><h2 class="text-center mb-5">Amenities</h2></v-col>
          <v-col cols="4" md="3" lg="3">
            <p><v-icon>mdi-wifi</v-icon><br />wifi</p>
          </v-col>
          <v-col cols="4" md="3" lg="3">
            <p><v-icon>mdi-television</v-icon><br />television</p>
          </v-col>
          <v-col cols="4" md="3" lg="3">
            <p><v-icon>mdi-newspaper-variant-outline</v-icon><br />newspaper</p>
          </v-col>
          <v-col cols="4" md="3" lg="3">
            <p><v-icon>mdi-bathtub</v-icon><br />bathtub</p>
          </v-col>
          <v-col cols="4" md="3" lg="3">
            <p><v-icon>mdi-food</v-icon><br />Room Breakfast</p>
          </v-col>
          <v-col cols="4" md="3" lg="3">
            <p><v-icon>mdi-bed</v-icon><br />spa</p>
          </v-col>
          <v-col cols="4" md="3" lg="3">
            <p><v-icon>mdi-phone</v-icon><br />Wake Up Call</p>
          </v-col>
          <v-col cols="4" md="3" lg="3">
            <p><v-icon>mdi-glass-mug</v-icon><br />Mini Bar</p>
          </v-col>
        </v-row>
        <hr class="my-10 mx-10 style" />
        <!-- ຫ້ອງອື່ນໆ -->
        <v-row class="row5">
          <v-col lg="12"><h2 class="text-center">OUR ROOMS</h2></v-col>
        </v-row>
        <v-row class="card row5">
          <v-col lg="4">
            <v-card class="mx-auto card" max-width="350">
              <v-card-title class="d-flex justify-center"
                >DELUXE ROOM</v-card-title
              >
              <v-img
                class="img-hover"
                height="250"
                src="https://cdn.discordapp.com/attachments/826834529435648000/1020233609988284427/duluxeRoom.png"
              ></v-img>

              <v-card-actions class="d-flex justify-center flex-column">
                <v-btn color="grey lighten-1" class="btn"
                  ><router-link to="/deluxe">
                    View Details<v-icon
                      >mdi-arrow-right-thick</v-icon
                    ></router-link
                  ></v-btn
                >
              </v-card-actions>
            </v-card></v-col
          >
          <v-col lg="4">
            <v-card class="mx-auto card" max-width="350">
              <v-card-title class="d-flex justify-center"
                >PREMIER ROOM</v-card-title
              >
              <v-img
                class="img-hover"
                height="250"
                src="https://cdn.discordapp.com/attachments/826834529435648000/1020233610181226526/premierRoom.png"
              ></v-img>

              <v-card-actions class="d-flex justify-center flex-column">
                <v-btn color="grey lighten-1" class="btn"
                  ><router-link to="/premier">
                    View Details<v-icon
                      >mdi-arrow-right-thick</v-icon
                    ></router-link
                  ></v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col lg="4">
            <v-card class="mx-auto card" max-width="350">
              <v-card-title class="d-flex justify-center">SUITE</v-card-title>
              <v-img
                class="img-hover"
                height="250"
                src="https://cdn.discordapp.com/attachments/826834529435648000/1020233610390933524/suiteRoom.png"
              ></v-img>
              <v-card-actions class="d-flex justify-center flex-column">
                <v-btn color="grey lighten-1" class="btn"
                  ><router-link to="/suite">
                    View Details<v-icon
                      >mdi-arrow-right-thick</v-icon
                    ></router-link
                  ></v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  name: "viewDetails",
  data() {
    return {
      tabs: null,
    };
  },
};
</script>

<style scoped>
* {
  font-family: cursive;
}
.container {
  background-color: #000000;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.header {
  background-image: url(https://cdn.discordapp.com/attachments/826834529435648000/1020233153127907338/bgHeader.png);
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  text-align: center;
  margin-bottom: 1rem;

  padding-top: 1rem;
}
.card {
padding-left: 0.5rem;
padding-right: 0.5rem;
}
.btn a {
  color: black;
  text-decoration: none;
}
.btn a:hover {
  color: rgb(255, 255, 255);
  transition: 0.3s;
}
.row1,
.row2,
.row3,
.row4,
.row5 {
  margin: 2rem;
}
hr.style {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
}
.row3 {
  margin-left: 8rem;
}
.row4 {
  margin-left: 5rem;
  margin-right: 5rem;
}
</style>