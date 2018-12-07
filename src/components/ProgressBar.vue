<template>
	<div class="progress-bar" @click="handleProgressBarClick">
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
	},
	methods: {
		handleProgressBarClick(e){
			var progress = Math.floor((e.offsetX / 300) * 100);
			this.$store.commit('setProgress', progress);
		}
	}
}
</script>

<style scoped>
.progress-bar{
	width: 300px;
	height: 2px;
	position: relative;
	border-top: 13px;
	border-bottom: 11px;
	display: inline-block;
    border-style: solid;
    border-color: white;
    border-left: 0px;
    border-right: 0px;
}

.total-duration{
	width: 100%;
	height: 100%;
	background-color: #D8D8D8;
}

.current-progress{
	height: 100%;
	background-color: #9EE6D9;
	position: absolute;
	transition: width 0.25s;
}
</style>