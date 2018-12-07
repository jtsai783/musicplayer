<template>
	<div class="infobox">
		<div class="center-box">
			<div class="artist-name">{{artistName}}</div>
			<ProgressBar />
			<div class="track-name">{{trackName}}</div>
		</div>
	</div>
</template>

<script>
import ProgressBar from './ProgressBar.vue'

export default{
	name: "infobox",
	components: {
		ProgressBar
	},
	computed: {
		artistName(){
			return this.$store.state.artist;
		},
		trackName(){
			if(this.$store.state.tracks){
				return this.$store.state.tracks[this.$store.state.currentTrack].name;	
			}
			return null;
		}
	}
}
</script>

<style scoped>
	.infobox{
		width: 320px;
		height: 100px;
		position: absolute;
		color: #2C3E50;
		font-size: 13px;
		display: inline-block;
	}

	.artist-name{
		font-weight: 100;
	}

	.center-box{
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
</style>