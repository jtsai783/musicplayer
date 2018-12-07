<template>
  <div id="app">
    <AlbumImage/>
    <MusicControl/>
    <audio ref="audio-tag" :src="playTrack" @timeupdate="timeUpdate"></audio>
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
  methods: {
    timeUpdate(){
      var progress = Math.ceil((this.$refs["audio-tag"].currentTime /  this.$refs["audio-tag"].duration) * 100);
      this.$store.commit('updateProgress', progress);
    }
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
    , progressBus(){
      return this.$store.state.progressBus;
    }
  },
  watch:{
    playing(val){
      if(val){
        this.$refs["audio-tag"].play();
      } else {
        this.$refs["audio-tag"].pause();
      }
    },
    progressBus(val){
      if(val !== null){
        try{
          this.$refs["audio-tag"].currentTime = val / 100 * this.$refs["audio-tag"].duration;  
        }catch(e){}
        
      }
      this.$store.commit('setProgress', null);
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
  font-family: "Helvetica"
 }
</style>
