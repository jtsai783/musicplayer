<template>
	<div class="control-buttons">
		<div @click="prevTrack">prev</div>
		<div @click="nextTrack">next</div>
		<div @click="togglePlay">{{playing ? "pause" : "play"}}</div>
	</div>
</template>

<script>
export default{
	name: "ControlButtons",
	computed:{
		currentTrack(){
			return this.$store.state.currentTrack;
		},
		playing(){
			return this.$store.state.playing;
		}
	},
	methods:{
		prevTrack(){
			if(this.currentTrack !== 0){
				this.$store.commit('setCurrentTrack', this.currentTrack - 1);	
			}
		},
		nextTrack(){
			if(this.currentTrack !== this.$store.state.tracks.length - 1){
				this.$store.commit('setCurrentTrack', this.currentTrack + 1);	
			}
		},
		togglePlay(){
			this.$store.commit('togglePlay');
		}
	}
}
</script>

<style scoped>
	.control-buttons{
		width: 150px;
		height: 100px;
		background-color: purple;
		display: inline-block;
		float: left
	}
</style>