<template>
    <label class="block uppercase tracking-wide text-gray-900 text-xs font-bold">{{ label }}</label>
    <button 
  class="
    mt-2
    inline-block
    bg-green-500
    hover:bg-green-700
    font-bold
    text-white
    no-underline
    py-3
    px-4
  "
  @click="emit('showModal',true)"
  >
 {{ btnText }}
 </button>
     
</template>

<script setup>
import { defineProps, toRefs } from 'vue'


const props = defineProps({ btnText: String, label: String})

const { btnText, label } = toRefs(props)

</script>