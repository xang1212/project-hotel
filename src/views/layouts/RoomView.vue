<template>
  <v-app>
    <v-main>
      <v-container >
        <v-card>
        <v-row class="header">
        <v-col><h1>OUR ROOMS</h1></v-col>
      </v-row>
      <v-row class="card m-5" >
        <v-col lg="4">
          <v-card class="mx-auto my-5" max-width="350">
            <v-img
              class="img-hover"
              height="250"
              src="#"
            ></v-img>

            <v-card-title>DELUXE ROOM</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <p>
                <v-icon>mdi-checkbox-marked-outline</v-icon
                ><strong>&nbsp;&nbsp;&nbsp;Bed</strong>&nbsp;1 Double or 1 Twin
              </p>
              <p>
                <v-icon>mdi-checkbox-marked-outline</v-icon
                ><strong>&nbsp;&nbsp;&nbsp;Max</strong>&nbsp;2 People
              </p>
              <p>
                <v-icon>mdi-checkbox-marked-outline</v-icon
                ><strong>&nbsp;&nbsp;&nbsp;Room Size</strong>&nbsp;36 sqm
              </p>
              <p>
                <v-icon>mdi-checkbox-marked-outline</v-icon
                ><strong>&nbsp;&nbsp;&nbsp;Air Conditioning</strong>&nbsp;Yes
              </p>
              <v-row>
                <v-col lg="6" class="text-foot-card">Start From</v-col>
                <v-col lg="6" class="text-foot-card2">$68.00 / Night</v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey lighten-1" class="btn"
                ><router-link to="/detail">
                  View Details<v-icon
                    >mdi-arrow-right-thick</v-icon
                  ></router-link
                ></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        
        <v-col lg="4">
          <v-card class="mx-auto my-5" max-width="350">
            <v-img
              class="img-hover"
              height="250"
              src="#"
            ></v-img>

            <v-card-title>PREMIER ROOM</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <p>
                <v-icon>mdi-checkbox-marked-outline</v-icon
                ><strong>&nbsp;&nbsp;&nbsp;Bed</strong>&nbsp;1 Double or 1 Twin
              </p>
              <p>
                <v-icon>mdi-checkbox-marked-outline</v-icon
                ><strong>&nbsp;&nbsp;&nbsp;Max</strong>&nbsp;2 People
              </p>
              <p>
                <v-icon>mdi-checkbox-marked-outline</v-icon
                ><strong>&nbsp;&nbsp;&nbsp;Room Size</strong>&nbsp;60 sqm
              </p>
              <p>
                <v-icon>mdi-checkbox-marked-outline</v-icon
                ><strong>&nbsp;&nbsp;&nbsp;Air Conditioning</strong>&nbsp;Yes
              </p>
              <v-row>
                <v-col lg="6" class="text-foot-card">Start From</v-col>
                <v-col lg="6" class="text-foot-card2">$136.00 / Night</v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey lighten-1" class="btn"
                ><router-link to="/">
                  View Details<v-icon
                    >mdi-arrow-right-thick</v-icon
                  ></router-link
                ></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col lg="4">
          <v-card class="mx-auto my-5" max-width="350">
            <v-img
              class="img-hover"
              height="250"
              src="#"
            ></v-img>

            <v-card-title>SUITE</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <p>
                <v-icon>mdi-checkbox-marked-outline</v-icon
                ><strong>&nbsp;&nbsp;&nbsp;Bed</strong>&nbsp;1 King Bed
              </p>
              <p>
                <v-icon>mdi-checkbox-marked-outline</v-icon
                ><strong>&nbsp;&nbsp;&nbsp;Max</strong>&nbsp;2 People
              </p>
              <p>
                <v-icon>mdi-checkbox-marked-outline</v-icon
                ><strong>&nbsp;&nbsp;&nbsp;Room Size</strong>&nbsp;96 sqm
              </p>
              <p>
                <v-icon>mdi-checkbox-marked-outline</v-icon
                ><strong>&nbsp;&nbsp;&nbsp;Air Conditioning</strong>&nbsp;Yes
              </p>
              <v-row>
                <v-col lg="6" class="text-foot-card">Start From</v-col>
                <v-col lg="6" class="text-foot-card2">$197.00 / Night</v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey lighten-1" class="btn"
                ><router-link to="/">
                  View Details<v-icon
                    >mdi-arrow-right-thick</v-icon
                  ></router-link
                ></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "RoomView"
};
</script>

<style scoped>
* {
  font-family: cursive;
}
.header {
  background-image: url(#);
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.card {
  margin-bottom: 2rem;
  background-image: url(#);
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
.img-hover:hover {
  transform: scale(1.1);
  transition: 0.3s;
  border-radius: 5px;
}

.text-foot-card {
  font-size: 20px;
}
.text-foot-card2 {
  font-size: 17px;
  color: #4fc3f7;
  text-align: left;
  padding-left: 0%;
}
.btn a {
  color: black;
  text-decoration: none;
}
.btn a:hover {
  color: rgb(255, 255, 255);
  transition: 0.3s;
}
</style>