<script setup lang="ts">

const props = defineProps({
  title: String,
  rounded: Boolean,
  color: { type: String, default: "bg-orange" },
  textColor: { type: String, default: "text-white" },
});

function getClass(): String {
  
  // default button class
  let cssClass = "font-body font-bold py-2 px-4";

  // button background color
  cssClass = cssClass + ' ' + props.color;
  
  // button text color
  cssClass = cssClass + ' ' + props.textColor;

  // button rounded property
  props.rounded ? cssClass = cssClass + ' ' + 'rounded': '';

  return cssClass;
}

</script>

<template>
  <button :class="getClass()">
    {{ props.title }}
  </button>
</template>

<style scoped>
</style>
