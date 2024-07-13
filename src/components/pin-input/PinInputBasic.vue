<script setup lang="ts">
import { ref } from 'vue'
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
  PinInputSeparator,
} from '@/components/ui/pin-input'

const emit = defineEmits(['pin'])

const value = ref<string[]>([])

const handleComplete = (e: string[]) => {
  
  emit('pin',+value.value.join('')) // envia el ping de regreso
}

</script>

<template>
  <div>
    <PinInput
      type="number"
      id="pin-input"
      v-model="value"
      placeholder="○"
      @complete="handleComplete"
    >
      <PinInputGroup class="gap-1">
        <template v-for="(id, index) in 5" :key="id">
          <PinInputInput
            class="rounded-md border passw"
            :index="index"
          />
          <template v-if="index !== 4">
            <PinInputSeparator />
          </template>
        </template>
      </PinInputGroup>
    </PinInput>
  </div>
</template>