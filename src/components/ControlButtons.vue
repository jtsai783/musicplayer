<template>
	<div class="control-buttons-container">
		<div @click="prevTrack">
			<img class="control-buttons" ref="backButton"/>
		</div>
		<div @click="togglePlay">
			<img class="control-buttons" ref="playButton" :src="TogglePath">
		</div>
		<div @click="nextTrack">
			<img class="control-buttons" ref="forwardButton"/>
		</div>
	</div>
</template>

<script>
import BackButton from '../assets/back_idle.png'
import ForwardButton from '../assets/forward_idle.png'
import PlayButton from '../assets/play_idle.png'
import PauseButton from '../assets/pause_idle.png'

export default{
	name: "ControlButtons",
	computed:{
		currentTrack(){
			return this.$store.state.currentTrack;
		},
		playing(){
			return this.$store.state.playing;
		}
		,TogglePath(){
			if(!this.playing){
				return PlayButton;
			} else {
				return PauseButton;
			}
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
	},
	mounted:function(){
		this.$refs.backButton.src = BackButton;
		this.$refs.forwardButton.src = ForwardButton;
	}

}
</script>

<style scoped>
	.control-buttons-container{
		height: 100px;
		display: inline-block;
		padding-left: 30px;
		padding-right: 30px;
	}

	.control-buttons-container>div{
		display: inline-block;
		margin-right: 20px;
		margin-top: 25px;
	}

	.control-buttons-container>div:last-child{
		margin-right: 0px;
	}

	.control-buttons:hover{
		filter: brightness(1.18) saturate(87%);
	}
</style>