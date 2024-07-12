<template>
    <div class="w-screen h-screen flex flex-col items-center justify-center">
      {{ validate }}
      <PinInputBasic
        @pin="validar" 
        class="dark:text-black"
      />

        <Card class="my-4 shadow-gray-500 dark:shadow-blue-500 shadow-lg">
          <CardHeader>
              <CardTitle>Iniciar Sessión</CardTitle>
              <CardDescription>Login para administrar</CardDescription>
          </CardHeader>
      
          <CardContent class="flex flex-col gap-4" >
            <Input :disabled="validate" class="disabled:bg-red-400" type="User" placeholder="User"/>

            <Input :disabled="validate" class="disabled:bg-red-400" type="password" placeholder="password" />
          </CardContent>

          <CardFooter>
            <Button class="mx-auto w-full" as-child variant="secondary">
                <RouterLink :to="{name:'home'}">
                    LOGIN
                </RouterLink>
            </Button>
          </CardFooter>
        </Card>
    </div>
</template>


<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import PinInputBasic from '@/components/pin-input/PinInputBasic.vue'
import { Input } from '@/components/ui/input'


import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router';
import { ref } from 'vue';




function validar(pin:number){
  if(pin === +import.meta.env.VITE_PIN){
    validate.value = false;
    console.log('PIN correcto');  
  }else{
    alert('Incorrecto')
  }
}

const validate = ref(true)

</script>    