<template>
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
	import { reactive } from 'vue';
	import Bookmarks from './components/Bookmarks.vue';

	const defaultProperties = {
		backgroundColour: '#2e3440',
	};

	export default {
		components: {
			DateAndTime,
			GoogleSearchBar,
			Weather,
			UserSettings,
			Bookmarks,
		},
		setup() {
			const state = reactive({
				config: JSON.parse(localStorage.getItem('Main')),
			});

			function setDefaultStyles() {
				var main = {};
				const defaultPropertiesArray = Object.entries(
					defaultProperties
				);
				for (const [type, property] of defaultPropertiesArray) {
					main[type] = property;
				}
				localStorage.setItem('Main', JSON.stringify(main));
			}
			if (localStorage.getItem('Main') == null) setDefaultStyles(); // sets styles to default if they aren't in localstorage

			function updateStyles() {
				if (
					JSON.stringify(state.config) !==
					localStorage.getItem('Main')
				) {
					state.config = JSON.parse(localStorage.getItem('Main'));
				}
				document.body.style.backgroundColor =
					state.config.backgroundColour;
			}
			setInterval(updateStyles, 1000);
			updateStyles(); // updates the styles from local storage

			function checkIfUpdated() {
				if (!localStorage.getItem('Version')) {
					alert(
						'Welcome to this project! Hit the settings icon to configure.'
					);
					localStorage.setItem(
						'Version',
						process.env.VUE_APP_VERSION
					);
				} else if (
					localStorage.getItem('Version') !=
						process.env.VUE_APP_VERSION &&
					process.env.VUE_APP_VERSION == '1.0.1'
				) {
					alert(
						'This page has been updated. Search suggestions will not work until you set the amount you want to show in settings. (default is 4)'
					);
					localStorage.setItem(
						'Version',
						process.env.VUE_APP_VERSION
					);
				} else if (
					localStorage.getItem('Version') !=
						process.env.VUE_APP_VERSION &&
					process.env.VUE_APP_VERSION
				) {
					alert(
						'NEW UPDATE: Boomarks! Open an issue if you find any bugs or unintended behaviour. You can also set your settings back to default.'
					);
					localStorage.setItem(
						'Version',
						process.env.VUE_APP_VERSION
					);
				}
			}
			checkIfUpdated();
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
	}

	google-search-bar {
		margin-top: -10vh;
	}

	user-settings {
		position: fixed;
	}
</style>
