<template>
  <section>
    <div class="row">
      <div class="col1">
        <h4>HOTEL SISATTANAK</h4>
        <label class="logo">Keolanee Hotel</label>

        <v-img
          align="center"
          justify="center"
          alt="logo footer"
          max-height="100px"
          max-width="100px"
          src="https://media.discordapp.net/attachments/826834529435648000/1007206321491300352/Keolanee_edited.png?width=662&height=662"
        ></v-img>
      </div>
      <div class="col2">
        <h4>CONTACT US</h4>
        <p>Keolanee Hotel sisattanak</p>
        <p>
          <v-icon>mdi-map-marker</v-icon> WJV8+FRR, Thatkhao Village, Sisattanak
          District, Vientiane, Lao PDR
        </p>
        <p><v-icon>mdi-phone</v-icon> (+856)2052497424</p>
        <p>
          <a target="_blank" href="https://wa.me/85602052497424"
            ><v-icon>mdi-whatsapp</v-icon> Whatsapp</a
          >
        </p>
        <p><v-icon>mdi-email</v-icon> KeolaneeHotel@gmail.com</p>
      </div>
      <div class="col3">
        <h4>REVIEWS</h4>
        <div class="REVIEWS">
          <p>
            <a
              target="_blank"
              href="https://www.facebook.com/manethong.yabundid.9"
              ><v-icon>mdi-facebook</v-icon> Keolanee hotel</a
            >
          </p>
          <p>
            <a
              target="_blank"
              href="https://www.instagram.com/manethongyabandith/"
              ><v-icon>mdi-instagram</v-icon> keolanee-hotel</a
            >
          </p>
          <p>
            <a
              target="_blank"
              href="https://www.tripadvisor.com/Hotel_Review-g7741494-d1755853-Reviews-Inthira_Thakhek-Thakhek_Khammouane_Province.html"
              >TRIPADVISOR</a
            >
          </p>
        </div>
      </div>
      <div class="col4">
        <h4>NEWSLETTER</h4>
        <p>
          Keep me up to date with promotions and special offers from
          KeolaneeHotel
        </p>
        <input placeholder="your email address" type="text" />
        <v-btn> sign up </v-btn>
      </div>
    </div>
    <div class="row2">© Copyright Keolanee Hotel Group</div>
  </section>
</template>

<script>
export default {
  name: "FooTer",
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: aliceblue;
}
p a {
  text-decoration: none;
  color: aliceblue;
}
.row {
  background: #000000;
  display: flex;
  justify-content: space-around;
  height: auto;
}
label.logo {
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  font-family: cursive;
}
.col1,
.col2,
.col3,
.col4 {
  padding-top: 30px;
  padding-bottom: 20px;
  width: 300px;
}
h4 {
  margin-bottom: 20px;
  color: #01579b;
}
.REVIEWS p a .v-icon {
  font-size: 40px;
}
.col4 input {
  border: solid white 2px;
  border-radius: 5px;
  padding: 5px;
}
.col4 .v-btn {
  margin-top: 15px;
  color: aliceblue;
  background-color: #ff003c;
}
.row2 {
  background-color: #021d33;
  width: auto;
  text-align: center;
}
.v-icon {
  color: rgb(255, 255, 255);
}
</style>
