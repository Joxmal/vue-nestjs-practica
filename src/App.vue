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
  <body class="flex flex-col mx-auto max-w-screen-xl px-4 bg-red-500 min-h-screen">
    
    <header class="flex justify-center items-center bg-green-400">
      <MenuDrop/>
      
        <div class="absolute  left-0 top-0 lg:left-5">
          <ButtomDarkMode class="h-10 bg-green-950"/>
        </div>
    </header>

    
      <main
      class="flex flex-col mt-10 justify-center items-center bg-blue-500"
      >
        <CarruselBasic class="w-[80%] bg-yellow-300 " />
        
        <Separator class="my-4"/>
        <div class="flex justify-center flex-wrap gap-10">
          <CardBasic>
            <Flame color="#ce0d0d" class="" />
            ULTIMO EVENTO
          </CardBasic>

          <CardBasic>
           PRÓXIMO EVENTO
          </CardBasic>
        </div>
      </main>
    
  </body>




    <!-- <Button>Click me</Button> -->

 
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
