<template>
  <v-app>
    <v-main class="d-flex align-center justify-center">
      <v-col cols="10" sm="8" md="8" lg="8" class="mx-auto">
        <v-card class="py-5 elevation-6">
          <v-container>
            <v-card-title>
              <h3>FAQ :</h3>
            </v-card-title>
            <template>
              <v-card class="about">
                <v-container>
                  <v-row justify="center">
                    <v-expansion-panels accordion>
                      <v-expansion-panel v-for="(item, i) in 1" :key="i">
                        <v-expansion-panel-header
                          class="title"
                          >
                          <p>ຖ້າກາຍເວລາຈອງແລ້ວຍັງບໍ່ມາ
                          ສິເປັນຫຍັງບໍ?</p>
                          </v-expansion-panel-header
                        >
                        <v-expansion-panel-content class="subtitle pt-5" color="grey lighten-1" align="left">
                          <p>
                            ຖ້າກາຍເວລາຈອງຫ້ອງຂອງທ່ານຈະຢູ່ໃນສະຖານະວ່າງທັນທີ
                          </p>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-row>
                  <v-row justify="center">
                    <v-expansion-panels accordion>
                      <v-expansion-panel v-for="(item, i) in 1" :key="i">
                        <v-expansion-panel-header
                          class="title"
                          ><p>
                            ທ່ານບໍ່ໄດ້ຮັບຂໍ້ຄວາມຍືນຍັນແມ່ນບໍ?
                            </p></v-expansion-panel-header
                        >
                        <v-expansion-panel-content  class="subtitle pt-5" color="grey lighten-1" align="left">
                          <p>
                            ລອງກວດເບີຂອງທ່ານວ່າຖືກຕ້ອງແລ້ວບໍ,ຖ້າຍັງບໍ່ໄດ້ໃຫ້ທ່ານຕິດຕໍ່ພວກເຮົາ
                          </p>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-row>
                  <v-row justify="center">
                    <v-expansion-panels accordion>
                      <v-expansion-panel v-for="(item, i) in 1" :key="i">
                        <v-expansion-panel-header
                          class="title"
                          ><p>
                            ຈະຊຳລະເງິນແນວໃດ?
                            </p></v-expansion-panel-header
                        >
                        <v-expansion-panel-content class="subtitle pt-5" color="grey lighten-1" align="left">
                          <p>
                            ຈ່າຍຜ່ານບັດເຄຣດິດ
                          </p>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-row>
                  <v-row justify="center">
                    <v-expansion-panels accordion>
                      <v-expansion-panel v-for="(item, i) in 1" :key="i">
                        <v-expansion-panel-header
                          class="title "
                          ><p>
                            ບິນຍືນຍັນແມ່ນຫຍັງ?
                            </p></v-expansion-panel-header
                        >
                        <v-expansion-panel-content class="subtitle pt-5" color="grey lighten-1" align="left">
                         <p>
                          ແມ່ນການຢັງຍືນການຈອງຫ້ອງຂອງທ່ານ,ທ່ານສາມາດເອົາໃບບິນນີ້ໄປຍືນຍັນກັບພະນັກງານໃນບ້ານພັກໄດ້
                         </p>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-row>
                </v-container>
              </v-card>
            </template>
          </v-container>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>
