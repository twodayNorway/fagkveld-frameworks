<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";
import Cat from "../assets/friday-cat.jpg";
import Dog from "../assets/puddlus.jpg";

const showDog = ref(true);

const toggleDogHandler = () => {
  showDog.value = !showDog.value;
};
</script>

<template>
  <div class="dog-container">
    <img :src="showDog ? Dog : Cat" alt="dog" />
    <Button :show-dog="showDog" @toggle-button="toggleDogHandler" />
  </div>
</template>

<style>
.dog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 20rem;
  height: 20rem;
  border-radius: 8px;
}
</style>
