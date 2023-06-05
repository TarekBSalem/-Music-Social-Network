<template>
    <div class="conatiner max-w-4xl mx-auto pt-20 px-6" id="EditProfile">
        <div class="text-gray-900 text-xl">Edit profile</div>
        <div class="bg-green-500 w-full h-1"></div>
        <CropperModal
            v-if="showModal"
            :minAspectRatioProp="{width: 8, height: 8}"
            :maxAspectRatioProp="{width: 8, height: 8}"
            @croppedImageData="setCroppedImageData"
            @showModal="showModal = false"
        />

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput label="First Name" placeholder="Tarek" v-model:input="firstname" inputType="text"
                    error="this is a test error" />
            </div>
            <div class="w-full md:w-1/2 px-3">
                <TextInput label="Last Name" placeholder="Ben salem" v-model:input="lastname" inputType="text"
                    error="this is a test error" />
            </div>
                <div class="w-full mt-4 mb-6">
                    <TextInput label="location" placeholder="Rue xxxxx xxxxx " v-model:input="location" inputType="text"
                        error="this is a test error" />
                </div>
                <div class="w-full mt-4 mb-6">
                    <DisplayCropperButton label="Profile Picture" btnText="Upload Profile Image" @showModal="showModal=TextAreaVue" />
                </div>
                <div class="w-full mt-4 mb-6">
                    <TextArea label="Description" placeholder="plz enter some information " v-model="description" error="this is a test error" />
                </div>
                <div class="w-full mt-4 mb-6">
                    <SubmitFormButton btnText="Update Profile" />
                </div>
        </div>
    </div>
</template>
<script setup>
import TextInput from '@/components/Global/TextInput.vue';
import { ref } from 'vue';
import DisplayCropperButton from '@/components/Global/DisplayCropperButton.vue';
import TextArea from '@/components/Global/TextArea.vue';
import SubmitFormButton from '@/components/Global/SubmitFormButton.vue';
import CropperModal from '@/components/Global/CropperModal.vue';
let lastname = ref(null)
let firstname = ref(null)
let location = ref(null)
let description = ref(null)
let showModal = ref(false)

</script>