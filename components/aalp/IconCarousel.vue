<script lang="ts" setup>
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'

const modules = [Autoplay]
</script>

<template>
  <div class="container mx-auto bg-white drop-shadow-xl p-8 rounded-xl -m-10 z-999 relative">
    <div class="px-10 flex">
      <div class="fade-shadow right" />
      <Swiper
        :modules="modules"
        :slides-per-view="8"
        :loop="true"
        :autoplay="{ delay: 0, disableOnInteraction: false }"
        :allow-touch-move="false"
        :scrollbar="{ draggable: true }"
        :free-mode="false"
        :speed="1300"
      >
        <SwiperSlide v-for="i in 24" :key="i">
          <div class="mx-5">
            <img width="50" src="https://demo.persiansda.com/assets/icons/pages/fingerprint.png">
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="fade-shadow left" />
    </div>
  </div>
</template>

<style lang="scss">
.swiper-wrapper{
  transition-timing-function: linear;
}

.fade-shadow {
  &.left {
    background: linear-gradient(to left,hsla(0,0%,100%,0) 0,#fff 100%);
    left: 0;
    width: 20%;
  }

  &.right {
    background: linear-gradient(to right,hsla(0,0%,100%,0) 0,#fff 100%);
    right: 0;
    width: 20%;
  }

  bottom: 0;
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  z-index: 9
}
</style>
