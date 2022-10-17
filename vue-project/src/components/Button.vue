<script setup lang="ts">
const props = defineProps({
  showDog: Boolean,
});

const emit = defineEmits(["toggleButton"]);

const buttonFunction = () => {
  emit("toggleButton", "Tekst etter trykk");
};
</script>

<template>
  <button class="button" @click="buttonFunction()">
    Trykk her for {{ showDog ? "katt" : "hund" }}
  </button>
</template>

<style>
.button {
  background-color: #42b883;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  color: white;
  display: inline-block;
  padding: 15px 32px;
  text-align: center;
  width: 15rem;
  margin-top: 1rem;
}
</style>
