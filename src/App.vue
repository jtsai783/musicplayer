<template>
  <div id="app">
    <AlbumImage/>
    <MusicControl/>
    <audio ref="audio-tag" :src="playTrack"></audio>
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
  },
  computed: {
    playTrack(){
      if(this.$store.state.tracks){
        return this.$store.state.tracks[this.$store.state.currentTrack].url  
      }
      return null;
    },
    playing(){
      return this.$store.state.playing;
    }
  },
  watch:{
    playing(val){
      if(val){
        this.$refs["audio-tag"].play();
      } else {
        this.$refs["audio-tag"].pause();
      }
    }
  }
  , mounted: async function(){

    const api_call = await fetch('https://s3-us-west-1.amazonaws.com/fbx-fed-homework/fed_home_assignment_api.json');
    
    const response = await api_call.json();

    this.$store.commit('setAlbumName', response.album_name);
    this.$store.commit('setArtist', response.artist);
    this.$store.commit('setTracks', response.tracks);
    this.$store.commit('setCurrentTrack', 0);
  }
}
</script>

<style>
 body{
  margin: 0px;
 }
</style>
