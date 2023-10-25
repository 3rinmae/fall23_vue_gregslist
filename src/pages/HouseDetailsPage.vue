<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <h1>House Details</h1>
      </div>
    </section>
    <section v-if="house" class="row">
      <div class="col-md-5">
        <img :src="house.imgUrl" alt="house" class="img-fluid">
      </div>
      <div class="col-7">
        <img :src="house.creator.picture" :alt="house.creator.name" class="creator">
        <p>Listed by {{ house.creator.name }} on {{ house.createdAt.toLocaleDateString() }}</p>
        <h2>Price: ${{ house.price }}</h2>
        <h3>Bedrooms:{{ house.bedrooms }}</h3>
        <h3>Bathrooms:{{ house.bathrooms }}</h3>
        <h3>Year: {{ house.year }}</h3>
        <h3>Levels: {{ house.levels }}</h3>
        <p>{{ house.description }}</p>
        <div v-if="house.creatorId == account.id">
          <button class="btn btn-danger">Delete House</button>
          <button class="btn btn-info ms-3">Edit House</button>
        </div>
      </div>
    </section>
    <section v-else class="row">
      <div class="col-12">
        <h2>Loading...</h2>
      </div>
    </section>
  </div>
</template>


<script>
import { useRoute, useRouter } from "vue-router";
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from "../utils/Pop";
import { housesService } from "../services/HousesService";
import { logger } from "../utils/Logger";


export default {
  setup() {
    const route = useRoute()
    const router = useRouter()

    async function getHouseById() {
      try {
        await housesService.getHouseById(route.params.houseId)
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {
      // logger.log('house id from route', route.params.houseId)
      housesService.clearData()
      getHouseById()
    })

    return {
      house: computed(() => AppState.activeHouse),
      account: computed(() => AppState.account)
    }
  }
};
</script>


<style lang="scss" scoped>
.creator {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
}
</style>