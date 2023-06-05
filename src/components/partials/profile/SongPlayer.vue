<template>
    <div class="bg-green-500 rounded">
        <div id="aplayer"></div>
    </div>
</template>
<script setup>
 import APlayer from 'aplayer'
 import 'aplayer/dist/APlayer.min.css'
 import { onMounted } from 'vue'
    onMounted(() => {
        thePlayer()
    })
 const thePlayer = () => {
     new APlayer({
         container: document.getElementById('aplayer'),
         audio: [
            {
             name: 'song 1',
             artist: 'artist',
             url: '/music/Back Up.mp3',
             cover: 'cover.jpg'
         },
         {
             name: 'song 2',
             artist: 'artist',
             url: '/music/Vintage Culture, Bhaskar & Meca - Tina (feat. The Vic).mp3',
             cover: 'cover.jpg'
         }
        ]
     });
 }
</script>