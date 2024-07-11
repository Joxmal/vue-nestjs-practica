<script setup lang="ts">
import {Flame } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

</script>

<template>
  <Card class="w-[240px] ">
    <CardHeader class="px-4 py-0">
      <CardTitle
        class=" text-base flex justify-center">
        
        <slot>


        </slot>
      </CardTitle>
      <CardDescription>Mariño verde</CardDescription>
    </CardHeader>

    <CardContent class=" gap-1 group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
        <div class="flex-1 space-y-1">
          <img 
            class="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
          src="https://ultimasnoticias.com.ve/wp-content/uploads/2021/11/IMG_27112021_152148_768_x_573_pixel.jpg" alt="Descripción de la imagen">
        </div>
    </CardContent>
    <CardFooter>
   
        Bella Catedral lorem lorem lorem lorem lorem

    </CardFooter>
  </Card>
</template>

