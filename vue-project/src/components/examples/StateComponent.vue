<script setup lang="ts">
import { ref } from "vue";

const navn = ref();
const numbers = [1, 2, 3];
const booleanVariable = true;
</script>

<template>
  <p v-if="booleanVariable">True</p>
  <p v-else>False</p>
</template>

<style></style>
