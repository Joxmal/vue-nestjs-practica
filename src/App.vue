<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { Button } from '@/components/ui/button'
import ButtomDarkMode from '@/components/darkMode/ButtomDarkMode.vue'
import MenuDrop from './components/menu/menuDrop.vue'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuContent,

  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle

} from '@/components/ui/navigation-menu'
import CarruselBasic from './components/carrusel/CarruselBasic.vue'
import CardBasic from './components/card/CardBasic.vue'
import { Flame, } from 'lucide-vue-next'


</script>

<template>
  <body class="flex flex-col mx-auto max-w-screen-xl px-4 min-h-screen">
    
    <header class="flex justify-center items-center">
      <MenuDrop/>
      
        <div class="absolute  left-0 top-0 lg:left-5">
          <ButtomDarkMode class="h-10"/>
        </div>
    </header>

    <Separator class="my-4 w-[70%] mx-auto"/>


    
      <main
      class="flex flex-col mt-10 justify-center items-center"
      >
        <CarruselBasic class="w-[80%]" />
        
        <Separator class="my-4"/>
        <div class="flex justify-center flex-wrap gap-10">
          <CardBasic>
            <div class="flex">
              <Flame color="#ce0d0d" class="" />
              ULTIMO EVENTO
            </div>
          </CardBasic>

          <CardBasic v-for="n in 7">
           EVENTO
          </CardBasic>
        </div>
      </main>
    
  </body>



    <!-- <Button>Click me</Button> -->

 
</template>
