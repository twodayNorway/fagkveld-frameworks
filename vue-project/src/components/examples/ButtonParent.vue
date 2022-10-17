<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";

const buttonText = ref("Dette er en knapp");
const title = ref("Tekst før trykk");

const buttonParentFunction = (text: string) => {
  title.value = text;
};
</script>

<template>
  <h1>{{ title }}</h1>
  <Button :button-text="buttonText" @emit-new-title-text="buttonParentFunction" />
</template>

<style></style>
