<template>
  <v-app>
    <v-main class="d-flex align-center justify-center">
      <v-col cols="12" sm="6" md="8" lg="10" class="mx-auto">
        <v-card class="py-5 elevation-6 ">
          <v-container>
            <v-card-title>
                  <span>History :</span>
                  <v-spacer></v-spacer>
                  <v-text-field
                    style=" margin-bottom:20px"
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-card-title>
            <template >
              <v-card class="mt-5">
                <v-data-table
                  :headers="headers"
                  :items="info"
                  :search="search"
                ></v-data-table>
              </v-card>
            </template>
          </v-container>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'ProfileView',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Room-number',
            align: 'start',
            sortable: false,
            value: 'roomId',
          },
          { text: 'Type', value: 'Type' },
          { text: 'checkin-checkout', value: 'dateCheck' },
          { text: 'booking-date', value: 'Dbooking' },
          { text: 'quantity', value: 'quantity' },
          { text: 'payment', value: 'payment' },
        ],
        info: [
          {
            roomId: 'NO.102',
            Type: "standard room",
            dateCheck: "8/8/2022 - 10/8/2022",
            Dbooking: "6/8/20222",
            quantity: 1,
            payment: "150.000 kip"
          },
          {
            roomId: 'NO.103',
            Type: "luxury room",
            dateCheck: "11/8/2022 - 13/8/2022",
            Dbooking: "9/8/20222",
            quantity: 2,
            payment: "350.000 kip"
          },
          {
            roomId: 'NO.102',
            Type: "standard room",
            dateCheck: "8/8/2022 - 10/8/2022",
            Dbooking: "6/8/20222",
            quantity: 1,
            payment: "150.000 kip"
          },
          {
            roomId: 'NO.103',
            Type: "luxury room",
            dateCheck: "11/8/2022 - 13/8/2022",
            Dbooking: "9/8/20222",
            quantity: 2,
            payment: "350.000 kip"
          },
          {
            roomId: 'NO.102',
            Type: "standard room",
            dateCheck: "8/8/2022 - 10/8/2022",
            Dbooking: "6/8/20222",
            quantity: 1,
            payment: "150.000 kip"
          },
          {
            roomId: 'NO.103',
            Type: "luxury room",
            dateCheck: "11/8/2022 - 13/8/2022",
            Dbooking: "9/8/20222",
            quantity: 2,
            payment: "350.000 kip"
          },
          {
            roomId: 'NO.102',
            Type: "standard room",
            dateCheck: "8/8/2022 - 10/8/2022",
            Dbooking: "6/8/20222",
            quantity: 1,
            payment: "150.000 kip"
          },
          {
            roomId: 'NO.103',
            Type: "luxury room",
            dateCheck: "11/8/2022 - 13/8/2022",
            Dbooking: "9/8/20222",
            quantity: 2,
            payment: "350.000 kip"
          },
          {
            roomId: 'NO.102',
            Type: "standard room",
            dateCheck: "8/8/2022 - 10/8/2022",
            Dbooking: "6/8/20222",
            quantity: 1,
            payment: "150.000 kip"
          },
          {
            roomId: 'NO.103',
            Type: "luxury room",
            dateCheck: "11/8/2022 - 13/8/2022",
            Dbooking: "9/8/20222",
            quantity: 2,
            payment: "350.000 kip"
          },
          {
            roomId: 'NO.102',
            Type: "standard room",
            dateCheck: "8/8/2022 - 10/8/2022",
            Dbooking: "6/8/20222",
            quantity: 1,
            payment: "150.000 kip"
          },
        ],
      }
    },
  }
</script>

<style scoped>
.b{
  height: 700px;
}
</style>