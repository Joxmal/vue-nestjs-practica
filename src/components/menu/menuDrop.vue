<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const components: { title: string, href: string, description: string }[] = [
  {
    title: 'Explora nuestras bellas playas',
    href: '/docs/primitives/alert-dialog',
    description:
      'Inauguracion nueva cancha',
  },
  {
    title: 'Descubre la historia en nuestro casco antiguo',
    href: '/docs/primitives/hover-card',
    description:
    'Sumérgete en el encanto de nuestras calles llenas de historia.',
  },
  {
    title: 'Excursión a la montaña',
    href: '/docs/primitives/progress',
    description:
      ' conquista la cima y disfruta de vistas panorámicas.',
  },
  {
    title: 'Saborea nuestra gastronomía local',
    href: '/docs/primitives/scroll-area',
    description: ' Deléitate con los sabores auténticos de nuestra región.',
  },
  {
    title: 'Ruta de vinos',
    href: '/docs/primitives/tabs',
    description:
      'Descubre la excelencia enológica de nuestro municipio.',
  },
  {
    title: 'Festival cultural',
    href: '/docs/primitives/tooltip',
    description:
      'Sumérgete en la riqueza cultural de nuestro municipio.',
  },
]
</script>

<template>
  <NavigationMenu :delayDuration="100">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Eventos</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
            <li class="row-span-3">
              <NavigationMenuLink as-child>
                <a
                  class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href=""
                >
                  <img src="https://th.bing.com/th/id/OIP.WaqW0QETJaVbvx-ZgrU4iAHaFh?rs=1&pid=ImgDetMain" class="border-4 rounded-lg  ">
                  <div class="mb-2 mt-4 text-lg font-medium">
                    Ultimo Evento
                  </div>
                  <p class="text-sm leading-tight text-muted-foreground">
                    Ultimo evento echo por la alcaldia 
                  </p>
                </a>
              </NavigationMenuLink>
            </li>

            <li>
              <NavigationMenuLink as-child>
                <a
                  href="/docs"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">Lista de eventos</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Todos Los eventos
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink as-child>
                <a
                  href="/docs/installation"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">Curiosidades</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Preguntas y respuesta habituales
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink as-child>
                <a
                  href="/docs/primitives/typography"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">patrocinadores</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Lista de patrocinadores y logos.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem >
        <NavigationMenuTrigger>Noticias</NavigationMenuTrigger>
        <NavigationMenuContent >
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li v-for="component in components" :key="component.title">
              <NavigationMenuLink as-child>
                <a
                  :href="component.href"
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {{ component.description }}
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      
      <NavigationMenuItem>
        <NavigationMenuLink href="https://www.radix-vue.com/logo.svg" :class="navigationMenuTriggerStyle()">
          Contacto
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>