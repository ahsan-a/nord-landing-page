<template>
	<transition name="fade">
	<div id="wrapper">
		<date-and-time />
		<google-search-bar />
	</div>
	</transition>
</template>

<script>

	import DateAndTime from './components/DateAndTime.vue';
	import GoogleSearchBar from './components/GoogleSearchBar.vue';

	export default {
		components: { DateAndTime, GoogleSearchBar },
		setup() {},
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
		background-color: $nord0;
	}
</style>