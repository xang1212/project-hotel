<template>
  <v-app>
    <v-main class="white--text">
      {{ text }}
      <pre>{{ user }}</pre>
      <!-- <div v-for="item in users" :key="item">
        <div>{{ item.name }}</div>
      </div> -->
    </v-main>
  </v-app>
</template>

<script>
import headers from "../../hooks/Headers";
import axios from "axios";
export default {
  name: "RoomView",
  data() {
    return {};
  },
  mounted() {
    // if (!this.$store.getters["users/GetUser"]) {
    //   window.location.reload();
    // }
  },
  computed: {
    user() {
      return this.$store.getters["users/GetUser"];
    },
  },
};
</script>
