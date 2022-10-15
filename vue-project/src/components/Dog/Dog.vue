<script setup lang="ts">
import { ref } from "vue";

const dogState = ref(false);

const toggleDogHandler = () => {
  dogState.value = !dogState.value;
};
</script>

<template>
  <div class="center">
    <p>{{ dogState }}</p>
    <button @click="toggleDogHandler()" class="btn" type="button">Toggle dog</button>
    <div>
      <!-- TODO: fyll inn bilder av hunder her -->
      <img
        v-if="dogState"
        src="./assets/images/dog1.jpeg"
        alt="dog"
        class="img-responsive"
        style="max-height: 200px"
      />
      <img
        v-else
        src="./assets/images/dog2.jpeg"
        alt="dog"
        class="img-responsive"
        style="max-height: 200px"
      />
    </div>
  </div>
</template>

<style>
.center {
  text-align: center;
}

.btn {
  color: #000;
  background-color: #fff;
  border: 2px solid #cecece;
  padding: 0.35rem 1rem 0.25rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.btn:hover {
  background-color: #ecf2fd;
}
</style>
