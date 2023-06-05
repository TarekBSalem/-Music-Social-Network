<template>
    <div id="register">
        <div class="w-full p-6 flex justify-center items-center ">
            <div class="w-full max-w-xs ">
                <div class="bg-block p-8 shadow rounded mb-6 bg-gray-700">
                    <h1 class="mb-6 text-lg text-gray-800 font-semibold">Let's rock and roll!</h1>
                    <div class="mb-4">
                       <TextInput
                       label="First Name"
                       :labelColor="false"
                       placeholder="tarek"
                       v-model:input="firstName"
                       inputType="text"
                       error="this is a test error"
                       />
                    </div>
                    <div class="mb-4">
                       <TextInput
                       label="Last Name"
                       :labelColor="false"
                       placeholder="ben salem"
                       v-model:input="lastName"
                       inputType="text"
                       error="this is a test error"
                       />
                    </div>
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
                    <div class="mb-4">
                       <TextInput
                       label="Confirm Passsword"
                       :labelColor="false"
                       placeholder="confirm password"
                       v-model:input="confirmPassword"
                       inputType="password"
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
                        Register
                    </button>
                </div>
                <P class="text-center text-md text-gray-900">already have an account ?
                    <router-link to="/login" class="text-blue-500 no-underline hover:underline">Login</router-link>
                </P>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import TextInput from '@/components/Global/TextInput.vue';
    let firstName =ref(null)
    let lastName =ref(null)
    let email =ref(null)
    let password =ref(null)
    let confirmPassword =ref(null)
</script>
