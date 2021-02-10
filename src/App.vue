<template>
	<div
		class="backgroundColour"
		:style="{ backgroundColor: config.Main.backgroundColour }"
	></div>
	<!--Allows us to dynamically set a background colour -->
	<img
		v-if="config.Main.backgroundImageUrl"
		:src="config.Main.backgroundImageUrl"
		class="backgroundImage animate__animated animate__fadeIn"
	/>
	<!--Allows us to dynamically set a background image -->
	<div id="wrapper" class="animate__animated animate__fadeIn">
		<weather />
		<date-and-time />
		<user-settings />
		<google-search-bar />
		<bookmarks />
	</div>
</template>

<script>
	import DateAndTime from './components/DateAndTime.vue';
	import GoogleSearchBar from './components/GoogleSearchBar.vue';
	import UserSettings from './components/UserSettings.vue';
	import Weather from './components/Weather.vue';
	import Bookmarks from './components/Bookmarks.vue';
	import useConfig from './modules/config';

	export default {
		components: {
			DateAndTime,
			GoogleSearchBar,
			Weather,
			UserSettings,
			Bookmarks,
		},
		setup() {
			const { config } = useConfig();

			return { config };
		},
	};
</script>

<style lang="scss">
	$nord0: #2e3440;
	$nord1: #3b4252;
	$nord2: #434c5e;
	$nord3: #4c566a;
	$nord4: #d8dee9;
	$nord5: #e5e9f0;
	$nord6: #eceff4;
	$nord7: #8fbcbb;
	$nord8: #88c0d0;
	$nord9: #81a1c1;
	$nord10: #5e81ac;
	$nord11: #bf616a;
	$nord12: #d08770;
	$nord13: #ebcb8b;
	$nord14: #a3be8c;
	$nord15: #b48ead;
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background: $nord2;
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb {
		background: $nord8;
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: $nord9;
	}

	body {
		position: relative;
		overflow-x: hidden;
	}

	google-search-bar {
		margin-top: -10vh;
	}

	user-settings {
		position: fixed;
	}
	.wrapper {
		z-index: 5;
	}

	.backgroundImage {
		z-index: 0;
		width: 101vw;
		height: 107vh;
		object-fit: cover;
		margin-top: -80px;
		margin-left: -10px;
		position: fixed;
	}

	.backgroundColour {
		z-index: 0;
		width: 101vw;
		height: 107vh;
		object-fit: cover;
		margin-top: -80px;
		margin-left: -10px;
		position: fixed;
	}
</style>
