<template>
	<div class="album-image">
		<img class="cover" :src="coverImage"/>
	</div>
</template>

<script>
export default{
	name: "album-image",
	computed: {
		coverImage () {
			if(this.$store.state.tracks){
				return this.$store.state.tracks[this.$store.state.currentTrack].cover_image;	
			}
			return null;
		}
	}
}
</script>

<style>
	.album-image{
		width: 500px;
		height: 500px;
	}

	.cover{
		width: 100%;
	}
</style>