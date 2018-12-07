<template>
	<div class="progress-bar">
		<div class="current-progress" ref="currentProgress"></div>
		<div class="total-duration"></div>
	</div>
</template>

<script>
export default{
	name: 'ProgressBar',
	computed: {
		progress(){
			return this.$store.state.progress || 0;
		}
	},
	watch: {
		progress(val){
			this.$refs.currentProgress.style.width = val + "%";
		}
	}
}
</script>

<style scoped>
.progress-bar{
	width: 300px;
	height: 10px;
	position: relative;
}

.total-duration{
	width: 100%;
	height: 100%;
	background-color: gray;
}

.current-progress{
	height: 100%;
	background-color: green;
	position: absolute;
	transition: width 1s;
}
</style>