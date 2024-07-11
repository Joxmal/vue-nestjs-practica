<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Autoplay from "embla-carousel-autoplay"


const plugin = Autoplay({
  delay: 5000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})
</script>

<template>
  <Carousel
    :plugins="[
      plugin
    ]"
    class="lg:max-w-full sm:max-w-xs"
    :opts="{
      align: 'start',
    }"
  >
    <CarouselContent class="-ml-1 ">
      <CarouselItem  v-for="(_, index) in 10" :key="index" class="pl-1 md:basis-1/2 lg:basis-1/3  ">
        <div class="p-1">
          <Card class="">
            <CardContent class="flex aspect-square items-center justify-center p-10 ">
              <span class="text-2xl font-semibold">{{ index + 1 }}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="hidden md:flex"/>
    <CarouselNext class="hidden md:flex"/>
  </Carousel>
</template>