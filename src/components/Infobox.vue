<template>
	<div class="infobox">
		<div>{{artistName}}</div>
		<div>{{trackName}}</div>
		<ProgressBar />
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
		width: 350px;
		height: 100px;
		background-color: pink;
		float: right;
	}
</style>