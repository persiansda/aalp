<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <div>
    <select v-model="colorMode.preference">
      <option value="system">
        System
      </option>
      <option value="light">
        Light
      </option>
      <option value="dark">
        Dark
      </option>
      <option value="sepia">
        Sepia
      </option>
    </select>
  </div>
</template>

<style lang="scss">
.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}
</style>
