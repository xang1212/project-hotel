<template>
  <div style="padding: 0px 0px; background-color: #2a2a2a">
    <v-main>
      <v-carousel hide-delimiters cycle>
        <!--Src image-->
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,0.7)"
        >
          <!--title-->
          <v-row class="fill-height" align="center">
            <v-col>
              <div class="display-2 white--text">
                <h6 class="font-weight-light">{{ item.description }}</h6>
                <h2>{{ item.title }}</h2>
                <p>...</p>
              </div>
            </v-col>
          </v-row>
          <!--End title-->
        </v-carousel-item>
      </v-carousel>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "SliderImage",
  data() {
    return {
      items: [
        {
          src: "https://i.pinimg.com/564x/d2/dd/f4/d2ddf4c68083969f87205eb25fa5d25a.jpg",
          title: "Welcome",
          description: "Keolanee hotel",
        },
        {
          src: "https://i.pinimg.com/564x/f3/22/16/f3221654dffe218d2502fadaa79c40f1.jpg",
          title: "Welcome 2",
          description: "Keolanee hotel",
        },
        {
          src: "https://media.discordapp.net/attachments/826834529435648000/1007140013152153640/banner-2.png?width=1208&height=662",
          title: "Welcome 3",
          description: "Keolanee hotel",
        },
      ],
    };
  },
};
</script>
