<script setup lang="ts">
const props = defineProps({
    title: String,
    link: String
})
</script>

<template>
  <a
    :href="link"
    class="block mt-4 lg:inline-block lg:mt-0 font-display text-brown hover:text-orange mr-4"
  >
    {{title}}
  </a>
</template>

<style scoped></style>
