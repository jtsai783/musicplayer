<template>
	<div class="music-control">
		<ControlButtons/>
		<Infobox/>
	</div>
</template>

<script>
import ControlButtons from './ControlButtons.vue'
import Infobox from './Infobox.vue'

export default{
	name: "MusicControl",
	components: {
		ControlButtons,
		Infobox
	}
}
</script>

<style scoped>
.music-control{
	width: 500px;
	height: 100px;
	background-color: blue;
}

</style>