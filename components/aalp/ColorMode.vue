<script lang="ts" setup>
const colorMode = useColorMode()

function toggleTheme() {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length
  colorMode.preference = values[next]
}
</script>

<template>
  <button
    label="Color Mode"
    mx-4
    :class="`color-mode-${colorMode.preference}`"
    @click="toggleTheme"
  >
    <Icon v-if="colorMode.preference === 'dark'" name="line-md:moon-alt-loop" />
    <Icon v-else-if="colorMode.preference === 'light'" name="line-md:moon-alt-to-sunny-outline-loop-transition" />
    <Icon v-else-if="colorMode.preference === 'coffee'" name="line-md:coffee-half-empty-twotone-loop" />
    <Icon v-else text-primary name="line-md:computer" />
  </button>
</template>
