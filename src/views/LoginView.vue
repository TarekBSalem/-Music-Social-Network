<template>
    <div id="register">
        <div class="w-full p-6 flex justify-center items-center">
            <div class="w-full max-w-xs">
                <div class="bg-block p-8 shadow rounded mb-6 bg-gray-200">
                    <h1 class="mb-6 text-lg text-gray-800 font-semibold">Let's rock and roll!</h1>
                    <div class="mb-4">
                       <TextInput
                       label="Email"
                       :labelColor="false"
                       placeholder="email@email.com"
                       v-model:input="email"
                       inputType="text"
                       error="this is a test error"
                       />
                    </div>
                    <div class="mb-4">
                       <TextInput
                       label="Passsword"
                       :labelColor="false"
                       placeholder="password"
                       v-model:input="password"
                       inputType="password"
                       error="this is a test error"
                       />
                    </div>
                    <button class="
                    block 
                    w-full
                    bg-green-500
                    text-white
                    rounded-sm
                    py-3
                    text-sm
                    trancking-wide
                    
                    ">
                        login
                    </button>
                </div>
                <P class="text-center text-md text-gray-900">Don't have an account ?
                    <router-link to="/register" class="text-blue-500 no-underline hover:underline">Register</router-link>
                </P>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import TextInput from '@/components/Global/TextInput.vue';
    let email =ref(null)
    let password =ref(null)
</script>
