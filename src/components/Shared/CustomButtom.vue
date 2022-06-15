<script setup lang="ts">
const props = defineProps({
  title: String,
  event: Function
});
</script>

<template>
  <button
    class="bg-orange text-white font-body font-bold rounded-full py-2 px-4"
    @click="$emit('event')"
  >
    {{title}}
  </button>
</template>

<style scoped></style>
