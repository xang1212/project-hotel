<template>
<v-app>
  <v-main>
    <v-container style="text-align: left">
      <v-card :loading="loading" class="mx-auto my-12" max-width="1500">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-carousel :show-arrows="false">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>

        <v-card-title
          style="
            padding-left: 100px;
            padding-right: 100px;
            padding-top: 50px;
            padding-bottom: 30px;
          "
        >
          <h3 style="padding-bottom: 20px">ກ່ຽວກັບ :</h3>
          <p>
            &nbsp;&nbsp;&nbsp; ໂຮງແຮມ Keolanee ມີ 34 ຫ້ອງ,
            ມີຫ້ອງຕ້ອນຮັບແຂກທີ່ທັນສະໄຫມດ້ວຍສະໄຕລ໌ໂດເດັນ, ເຮັດໃຫ້ມີສະເໜ່ ແລະ
            ສະຫງ່າງາມ. <br/>ມີບ່ອນອຳນວຍຄວາມສະດວກຫລາກຫລາຍຢ່າງບໍ່ວ່າຈະເປັນຫ້ອງອາຫານ,
            ຫ້ອງຟິດເນັດ ແລະ ອືິ່ນໆອີກຫລາຍຢ່າງ.
            ພາຍໃນຫ້ອງພັກ<br/>ຕົກແຕ່ງດ້ວຍວັດຖຸບູຮານທີ່ເລືອກໂດຍເຈົ້າຂອງເອງຄືທ່ານແກ້ວລິນີ.
          </p>
        </v-card-title>

        <v-divider class="mx-4"></v-divider>

        <v-card-title
          style="
            padding-left: 100px;
            padding-right: 100px;
            padding-top: 50px;
            padding-bottom: 30px;
          "
        >
          <h3 style="padding-bottom: 20px">ສິ່ງອຳນວຍຄວາມສະດວກ :</h3>
          <v-container>
            <v-row>
              <v-col>
                <p>- ຫ້ອງປະຊຸມ</p>
                <p>- ສະປາ</p>
                <p>- ພະແນກຕ້ອນຮັບ 20 ຊົ່ວໂມງ</p>
                <p>- ບໍລິການຊັກແຫ້ງ</p>
                <p>- ຕູ້ເຢັນນ້ອຍ</p>
                <p>- ລົດຮັບສົ່ງ</p>
                <p>- ອາຫານເຊົ້າ</p>
              </v-col>
              <v-col>
                <p>- ສະຫນາມກ໊ອບ</p>
                <p>- ອີນເຕີເນັດວາຍຟາຍ</p>
                <p>- ຫ້ອງອາຫານ</p>
                <p>- ເຄື່ອງປັບອາກາດ</p>
                <p>- ບ່ອນຈອດລົດ</p>
                <p>- ໂທລະພາບ</p>
                <p>- ບານ້ຳ</p>
              </v-col>
            </v-row>
          </v-container>
        </v-card-title>
      </v-card>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      items: [
        {
          src: "https://tbb-prod-emea.imgix.net/attachments/property_photos/images/74960/CADET_SITEMINDER-17.jpg?auto=format,compress&fit=crop&crop=entropy&w=768&h=346&q=55",
        },
        {
          src: "https://tbb-prod-emea.imgix.net/attachments/property_photos/images/74961/CADET_SITEMINDER-18.jpg?auto=format,compress&fit=crop&crop=entropy&w=768&h=346&q=55",
        },
        {
          src: "https://tbb-prod-emea.imgix.net/attachments/property_photos/images/74962/CADET_SITEMINDER-19.jpg?auto=format,compress&fit=crop&crop=entropy&w=768&h=346&q=55",
        },
        {
          src: "https://tbb-prod-emea.imgix.net/attachments/property_photos/images/74963/CADET_SITEMINDER-20.jpg?auto=format,compress&fit=crop&crop=entropy&w=768&h=346&q=55",
        },
      ],
    };
  },
};
</script>
