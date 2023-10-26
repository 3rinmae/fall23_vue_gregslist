<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-4">
        <h1>
          <span>Home Listings</span>
          <button v-if="account.id" class="btn fs-1 ms-3" type="button" title="Open House Form" data-bs-toggle="modal"
            data-bs-target="#houseFormModal"><i class="mdi mdi-home-plus-outline"></i></button>
        </h1>
      </div>
    </section>
    <section class="row">
      <div v-for="house in houses" :key="house.id" class="col-md-6 p-4">
        <HouseCardComponent :houseProp="house" />
      </div>
    </section>
  </div>
  <HouseFormModalComponent />
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from "../utils/Pop";
import { housesService } from "../services/HousesService.js"
import HouseCardComponent from "../components/HouseCardComponent.vue";
import HouseFormModalComponent from "../components/HouseFormModalComponent.vue";

export default {
  setup() {
    async function getHouses() {
      try {
        await housesService.getHouses();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      housesService.clearData()
      getHouses();
    });
    return {
      houses: computed(() => AppState.houses),
      account: computed(() => AppState.account)
    };
  },
  components: { HouseCardComponent, HouseFormModalComponent }
};
</script>


<style lang="scss" scoped></style>