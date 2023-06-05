<template>
    <div class="mx-auto py-4">
        <div class="flex flex-wrap font-bold text-gray-100">
            <div class="text-gray-900 text-xl">Songs</div>
            <div class="bg-green-500 w-full h-1"></div>

            <div class="w-full mt-4">
                <RouterLinkButton
                class="ml-2"
                btn-text="Delete song"
                color="red"
                url="/account/delete-song"
                />
                <RouterLinkButton
                btn-text="Add Song"
                color="green"
                url="/account/add-Song"
                />
            </div>
        </div>
        <div class="pb-4">
            <SongPlayer/>
        </div>
    </div>
</template>
<script setup>
import SongPlayer from './SongPlayer.vue'
import RouterLinkButton from '@/components/Global/RouterLinkButton.vue';

</script>
