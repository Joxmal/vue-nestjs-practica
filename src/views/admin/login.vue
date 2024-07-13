<template>
    <div class="w-screen h-screen flex flex-col items-center justify-center">
      {{ validate }}
      <PinInputBasic
        @pin="validar" 
        class="dark:text-black"
      />

      <form @submit.prevent="login" >
        <Card class="my-4 shadow-gray-500 dark:shadow-blue-500 shadow-lg">
          <CardHeader>
              <CardTitle>Iniciar Sessión</CardTitle>
              <CardDescription>{{ role }}</CardDescription>
          </CardHeader>
      
          <CardContent class="flex flex-col gap-4" >
            <Input v-model="user.user" :disabled="validate" class="disabled:bg-red-400" type="User" placeholder="User"/>

            <Input v-model="user.password" :disabled="validate" class="disabled:bg-red-400" type="password" placeholder="password" />
          </CardContent>

          <CardFooter>
            <Button type="submit" @Click="login" class="mx-auto w-full"  variant="secondary">
               LOGIN
            </Button>
          </CardFooter>
        </Card>
      </form>
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
import { onMounted, ref, type Ref } from 'vue';
import router from '@/router';

const role :Ref<string|undefined> = ref('ROL')

const PINKEYS: number[] = []
const keyNames = [
  'VITE_PIN_ADMINISTRADOR',
  'VITE_PIN_EDITOR',
]
onMounted(()=>{
  keyNames.forEach((key) => {
    const pinKey = parseInt(import.meta.env[key])
    if (!isNaN(pinKey)) PINKEYS.push(pinKey)
  })
})

function AsignarRole(pin:number){
  
  if( PINKEYS.includes(pin)){
    if(pin ===  +import.meta.env[keyNames[0]])
      return 'Administrador'
    else if(pin === +import.meta.env[keyNames[1]])
    return 'Editor'
  }else{
    return 'NO AUTENTICADO'  
  }

}

function validar(pin:number){
  if(
    PINKEYS.includes(pin)  //Compara el PIN con los guardados en el array PINKEYS
  ){
    validate.value = false;  //Asigna el rol al usuario
    role.value = AsignarRole(pin)
    console.log('PIN correcto');  
  }else{
    validate.value = true;
    console.log(pin)
    role.value = AsignarRole(pin)
    console.log('PIN incorrecto');   //Mostrar mensaje de error si el PIN es incorrecto
  }
}

// funcion para iniciar session

const user =  ref({
  user: '',
  password: '',
}
)
function login(){
  // Valida los campos del formulario
  if(user.value.user === 'joxmal' && user.value.password === '12345678'){

    router.push({name:'adminDashboard'})

    console.log('Iniciando sesión...');
  }else{
    console.log('Error al inciar session');
  }


}


const validate = ref(true)

</script>    