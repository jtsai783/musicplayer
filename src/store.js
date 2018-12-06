import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albumName: null,
    artist : null,
    tracks: null,
    currentTrack: null
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
		}
  },
  actions: {

  }
})


