<template>
    <div class="container max-w-4xl mx-auto flex">
        <div class="w-1/3">
            <img class="w-full rounded-lg h-auto shadow-lg" 
            src="../../../public/img/icons/apple-touch-icon-152x152.png" 
            alt="Profile picture">
        </div>
        <div class="w-full pl-4">
            <div class="flex">
            <div class="w-1/2">
                <h1 class="text-2xl md:text-4xl test-left text-gray-900">
                    Tarek Ben Salem
                </h1>
                <span class="text-md text-gray-900">
                    <i> <b>Tunisie, Sousse</b> </i>
                </span>
            </div>
            <div class="w-1/2 mt-2">
                <RouterLinkButton
                btn-text="Edit profile"
                color="green"
                url="/account/edit-profile"
                />
            </div>
        </div>
        <ProfileInfoSectionView/>
        <ProfileAboutSectionView/>
        </div>  
    </div>
    <SongSection/>
    <YoutubeVideoSection/>
    <PostSection/>
</template>
<script setup>
    import SongSection from '@/components/partials/profile/SongSection.vue';
    import RouterLinkButton from '@/components/Global/RouterLinkButton.vue';
    import ProfileInfoSectionView from '@/components/partials/profile/ProfileInfoSection.vue'
    import ProfileAboutSectionView from '@/components/partials/profile/ProfileAboutSection.vue'
    import YoutubeVideoSection from '@/components/partials/profile/YoutubeVideoSection.vue';
    import PostSection from '@/components/partials/profile/PostSection.vue';
</script>