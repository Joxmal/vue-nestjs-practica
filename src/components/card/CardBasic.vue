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
  <Card class="w-[340px] ">
    <CardHeader class="px-4 py-0">
      <CardTitle
        class="inline-flex justify-center">
        
        <slot>


        </slot>
      </CardTitle>
      <CardDescription>Mariño verde</CardDescription>
    </CardHeader>

    <CardContent class="grid gap-1">
      <div class=" flex justify-center space-x-4 rounded-md border">
        <div class="flex-1 space-y-1">
          <img src="https://ultimasnoticias.com.ve/wp-content/uploads/2021/11/IMG_27112021_152148_768_x_573_pixel.jpg" alt="Descripción de la imagen">
        </div>
        
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full">
        Clear all notifications
      </Button>
    </CardFooter>
  </Card>
</template>

