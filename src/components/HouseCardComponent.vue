<template>
  <router-link :to="{ name: 'HouseDetails', params: { houseId: houseProp.id } }">
    <section class="row rounded bg-light shadow">
      <div class="col-md-7 p-0">
        <img class="img-fluid rounded-start" :src="houseProp.imgUrl" alt="house">
      </div>
      <div class="col-md-5 pt-5">
        <h2>Price: ${{ houseProp.price }}</h2>
        <h3>Bedrooms: {{ houseProp.bedrooms }}</h3>
        <h3>Bathrooms: {{ houseProp.bathrooms }}</h3>
      </div>
    </section>
  </router-link>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { House } from "../models/House";
export default {
  props: {
    houseProp: { type: House },
  },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
img {
  height: 30vh;
  width: 40vh;
  object-fit: cover;
}
</style>