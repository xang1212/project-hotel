<template>
  <div class="body">
    <v-app>
      <Navbar /> 
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Footer from "./components/layouts/Footer.vue";
import Navbar from "./components/layouts/Navbar.vue";
export default {
  name: "App",
  data() {
    {
      //
    }
  },
  components: { Navbar, Footer },
};
</script>
