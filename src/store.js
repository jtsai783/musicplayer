import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albumName: null,
    artist : null,
    tracks: null,
    currentTrack: null,
    playing: false,
    progress: 0
  },
  mutations: {
		setAlbumName(state, payload){
			state.albumName = payload;
		}
		, setArtist(state, payload){
			state.artist = payload;
		}
		, setTracks(state, payload){
			state.tracks = payload;
		}
		, setCurrentTrack(state, payload){
			state.currentTrack = payload;
			state.playing = false;
			state.progress = 0;
		}
		, togglePlay(state){
			state.playing = !state.playing;
		}
		, updateProgress(state, payload){
			state.progress = payload;
		}
  },
  actions: {

  }
})


