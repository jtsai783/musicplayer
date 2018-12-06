<template>
  <div id="app">
    <AlbumImage/>
    <MusicControl/>
  </div>
</template>

<script>
import AlbumImage from './components/AlbumImage.vue'
import MusicControl from './components/MusicControl.vue'

export default {
  name: 'app',
  components: {
    AlbumImage,
    MusicControl
  }
}
</script>

<style>
 body{
  margin: 0px;
 }
</style>
