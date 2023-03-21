<script lang="ts" setup>
defineProps({
  code: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  redirectBack: {
    type: Boolean,
    default: true,
    required: false,
  },
  redirectText: {
    type: String,
    default: 'Go to home',
    required: false,
  },
  redirect: {
    type: String,
    default: '/',
    required: false,
  },
  icon: {
    type: String,
    default: null,
    required: false,
  },
  color: {
    type: String,
    default: 'green',
    required: false,
  },
})
</script>

<template>
  <div class="flex items-center justify-center w-full bg-white">
    <div class="text-center">
      <div v-if="icon" :class="`bg-${color}-100`" class="inline-flex rounded-full p-4">
        <div :class="`bg-${color}-200`" class="rounded-full p-4">
          <Icon :class="`text-${color}-500`" class="w-12 h-12" :name="icon" />
        </div>
      </div>
      <h1 class="mt-5 text-[36px] font-bold text-slate-800 lg:text-4xl">
        {{ code }} | {{ title }}
      </h1>
      <p class="text-slate-600 mt-5 lg:text-xl">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">

</style>
