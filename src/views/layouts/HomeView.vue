<template>
  <div class="home">
    <!--part 1 // Slider image-->
    <div>
      <Slider />
    </div>
    <!--End Slider image-->

    <div class="bd">
          <!--part 2-->
    <v-container class="white--text" style="padding-top: 70px">
      <h2>Keolanee</h2>
      <p class="pa-5">
        The v-img component is packed with features to support rich media.
      </p>
      <v-row align="center" justify="center">
        <v-col align="center" justify="center">
          <v-img
            max-width="300"
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          />
        </v-col>
        <v-col align="center" justify="center">
          <v-img
            max-width="300"
            v-for="(item, i) in items"
            :key="i"
            :src="item.src1"
          />
        </v-col>
        <v-col align="center" justify="center">
          <v-img
            max-width="300"
            v-for="(item, i) in items"
            :key="i"
            :src="item.src2"
          />
        </v-col>
      </v-row>
    </v-container>

    <!--part 3-->
    <v-container class="white--text" style="padding-top: 70px">
      <!--Text part3-->
      <div class="txt">
        <v-row>
          <v-col cols="6">
            <v-img
              alt="img part 3"
              max-width="fit"
              max-height="300"
              v-for="(item, i) in items"
              :key="i"
              :src="item.src3"
            />
          </v-col>
          <v-col cols="6" align="start">
            <div>
              <router-link style="color: white" class="link" to="/room">
                <span class="font-weight-blod text-h4"
                  ><p>
                    ຫ້ອງພັກ /<span class="font-italic text-h6">room type</span>
                  </p></span
                >
              </router-link>

              <p>
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit
                amet. Mauris cursus commodo interdum. Praesent ut risus eget
                metus luctus accumsan id ultrices nunc. Sed at orci sed massa
                consectetur dignissim a sit amet dui. Duis commodo vitae velit
                et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat
                augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
                Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <router-link
                style="color: black"
                class="text-decoration-none"
                to="/room"
              >
                <v-btn block link>
                  <h3>
                    ຈອງຫ້ອງ
                    <v-icon color="dark"> mdi-arrow-right</v-icon>
                  </h3></v-btn
                ></router-link
              >
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <!--part 4-->
    <v-container class="white--text">
      <hr style="margin-bottom: 30px" />
      <div class="text-left txt">
        <span class="text-h4"><p>ຫ້ອງອາຫານ</p></span>
        <p>
          รับประทานอาหารในหลวงพระบางอย่างผ่อนคลายและผสมผสานความสร้างสรรค์เข้าไปด้วยที่รีสอร์ทของเรา
          เพลิดเพลินไปกับการรับประทานอาหารได้ตลอดทั้งวันกับอาหารแบบอีสต์ มีท
          เวสต์
          ซึ่งเป็นการผสมผสานกันระหว่างความเป็นตะวันตกของอาหารบิสโตรแบบฝรั่งเศสกับความเป็นตะวันออกของอาหารพื้นเมืองลาว
          ที่หนึ่งในร้านอาหารที่มีเสน่ห์น่าดึงดูดที่สุดในหลวงพระบาง
          จิบกาแฟหอมกรุ่น น้ำผลไม้แสนสดชื่น
          และค็อกเทลที่ได้รับแรงบันดาลใจจากท้องถิ่น
          และมองออกไปยังสระว่ายน้ำหรือถนนที่คึกคัก
        </p>

        <v-img
          max-width="1920px"
          max-height="400px"
          src="https://i.pinimg.com/564x/05/f9/9e/05f99e38ef628533087e6bec49f95e8f.jpg"
        ></v-img>
      </div>
    </v-container>

    <!--part 5-->
    <v-container class="gallory">
      <div class="align-center justify-center">
        <h1 class="overline text-lg-h5">Gallery</h1>
      </div>
      <v-row style="padding-top: 30px">
        <v-col v-for="img in imgs" :key="img.id" class="child-flex" cols="3">
          <v-img :src="img.src" aspect-ratio="1" class="grey lighten-2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/layouts/Slider.vue';

export default {
  name: "HomeView",
  // eslint-disable-next-line no-undef
  components: { Slider },

  data() {
    return {
      items: [
        {
          src: "https://i.pinimg.com/564x/5d/23/44/5d2344721c17b15f8ce3e2cf06dc0a46.jpg",
        },
        {
          src1: "https://i.pinimg.com/564x/f0/75/56/f075563378b0e34fb6d5fb2507ce97fe.jpg",
        },
        {
          src2: "https://i.pinimg.com/564x/ea/44/c9/ea44c9a09d15a175b5dc93974a3fd552.jpg",
        },
        {
          src3: "https://i.pinimg.com/564x/fe/3c/da/fe3cda5c1ff52dc1ad87ab2fb0959025.jpg",
        },
      ],
      imgs: [
        {
          id: 1,
          src: "https://i.pinimg.com/564x/f1/f9/77/f1f9771b1c815394c59dc971295931ef.jpg",
        },
        {
          id: 2,
          src: "https://i.pinimg.com/564x/0f/bc/f0/0fbcf0a317dfb12e4c576dd1d2cc58f3.jpg",
        },
        {
          id: 3,
          src: "https://i.pinimg.com/564x/6a/76/97/6a7697b15c09499fbae781021f9e3512.jpg",
        },
        {
          id: 4,
          src: "https://i.pinimg.com/564x/5d/23/44/5d2344721c17b15f8ce3e2cf06dc0a46.jpg",
        },
        {
          id: 5,
          src: "https://i.pinimg.com/564x/f0/75/56/f075563378b0e34fb6d5fb2507ce97fe.jpg",
        },
        {
          id: 6,
          src: "https://i.pinimg.com/564x/ea/44/c9/ea44c9a09d15a175b5dc93974a3fd552.jpg",
        },
        {
          id: 7,
          src: "https://i.pinimg.com/564x/9c/be/97/9cbe974595f3bcc9a06eefcd13f95a9a.jpg",
        },
        {
          id: 8,
          src: "https://i.pinimg.com/564x/1e/c0/ea/1ec0ea222c88e877f26e5aa239ed6a58.jpg",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap");
* {
  font-family: "Noto Sans Lao", sans-serif;
}
.home {
  background-color: #2a2a2a;
  color: white;
}
.img3 {
  padding: 40px;
}
.link {
  text-decoration: none;
}
.txt {
  padding: 30px;
}
.gallory {
  margin-top: 70px;
  padding-bottom: 50px;
}

</style>
