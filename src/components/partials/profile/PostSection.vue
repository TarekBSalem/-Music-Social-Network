<template>
    <div class="mx-auto py-4">
        <div class="flex flex-wrap font-bold text-gray-100">
            <div class="text-gray-900 text-xl">Posts</div>
            <div class="bg-green-500 w-full h-1"></div>

            <div class="w-full mt-4">
                <RouterLinkButton class="ml-2" 
                    btn-text="Delete Post"
                    color="red"
                    url="/account/delete-post" 
                />
                <RouterLinkButton 
                    btn-text="Add Post" 
                    color="green" 
                    url="/account/add-youtube-post" 
                />
            </div>
        </div>
        <div class="flex flex-wrap mb-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">

                <div
                    class="rounded-lg border">
                    <a href="#">
                        <img class="rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                            alt="image description">
                    </a>
                    <div class="absolute px-4 text-lg text-white bottom-6">  
                        <router-link to="" class="">test tittle</router-link>                      
                    </div>
                </div>
                <p class="py-2">Location: Test Location</p>
                <p class="text-gray-darker text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit
                    . Velit provident in recusandae tempore suscipit blanditiis obcaecati,
                     eveniet animi dolorum illo quos maiores dolore
                    . Optio libero nemo ad error, corrupti provident.</p>
                <div class="mt-2 flex items-center justify-end">
                    <p class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Edit</p>
                    <p class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Delete</p>

                 </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import RouterLinkButton from '@/components/Global/RouterLinkButton.vue';

</script>
