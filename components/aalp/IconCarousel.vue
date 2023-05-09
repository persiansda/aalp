<script lang="ts" setup>
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'

const modules = [Autoplay]

const arch = useAalp()
const screens = computed(() => arch.value.screens?.filter(screen => screen.icon?.carousel))
</script>

<template>
  <div container mx-auto px-28>
    <div class="icon-carousel " relative bg-base drop-shadow-xl py-8 m--10 z-999 rounded-xl>
      <div class="fade-shadow" rounded-xl bg-fade="r"  />
      <Swiper
        :modules="modules"
        :slides-per-view="8"
        :loop="true"
        :autoplay="{ delay: 0, disableOnInteraction: false }"
        :scrollbar="{ draggable: true }"
        :allow-touch-move="false"
        :free-mode="false"
        :speed="1300"
      >
        <SwiperSlide v-for="item in screens" :key="item?.title">
          <div mx-5>
            <img v-if="item.icon?.type === 'png'" width="50" :src="`${item.icon?.path}.${item.icon?.type}`">
            <Icon v-else-if="item.icon?.type === 'icon'" :name="`${item.icon!.path}`" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="fade-shadow" rounded-xl bg-fade="l" />
    </div>
  </div>
</template>

<style lang="scss">
.icon-carousel {
  .swiper-wrapper {
    transition-timing-function: linear;
  }

  .fade-shadow {
    &.left {
      // background: linear-gradient(to left, hsla(0, 0%, 100%, 0) 0, #fff 100%);
      left: 0;
      width: 20%;
    }

    &.right {
      // background: linear-gradient(to right, hsla(0, 0%, 100%, 0) 0, #fff 100%);
      @apply bg-gradient-to-r from-primary to-secondary;
      right: 0;
      width: 20%;
    }

    // bottom: 0;
    // height: 100%;
    // pointer-events: none;
    // position: absolute;
    // top: 0;
    // z-index: 9
  }
}
</style>
