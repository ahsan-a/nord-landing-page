<template>
	<div class="searchWrapper">
		<form id="googleSearch" onsubmit="return false">
			<input
				id="googleSearchBar"
				type="text"
				autocomplete="off"
				placeholder="Search here..."
				v-model="state.searchText"
				@input="retrieveQueries"
				:class="{ enabled: state.enabled }"
				@keydown.down="inputDown"
				@keydown.up.prevent="inputUp"
				@keydown.enter="enterInput"
				ref="input"
				:style="{
					backgroundColor: state.config.barBg,
					fontFamily: state.config.barFont,
				}"
			/>
		</form>

		<ul class="searchSuggestions">
			<li
				ref="arrowKeys"
				v-for="(query, index) in state.queries"
				:key="query.query"
				:class="{ focused: index == state.focus }"
			>
				<a :href="query.link">{{ query.query }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import { reactive } from 'vue';

	const defaultProperties = {
		barBg: '#434c5e',
		barFont: 'Quicksand',
		searchSuggestions: '4',
	};
	export default {
		name: 'GoogleSearch',
		setup() {
			window.onload = () => {
				document.getElementById('googleSearchBar').focus();
			};
			const state = reactive({
				searchText: '',
				enabled: false,
				focus: null,
				queries: {},
				config: JSON.parse(localStorage.getItem('GoogleSearchBar')),
			});

			function setDefaultStyles() {
				var googleSearchBar = {};
				const defaultPropertiesArray = Object.entries(
					defaultProperties
				);
				for (const [type, property] of defaultPropertiesArray) {
					googleSearchBar[type] = property;
				}
				localStorage.setItem(
					'GoogleSearchBar',
					JSON.stringify(googleSearchBar)
				);
			}
			if (localStorage.getItem('GoogleSearchBar') == null) {
				setDefaultStyles(); // sets styles to default if they aren't in localstorage
				location.reload();
			}

			function updateStyles() {
				if (
					JSON.stringify(state.config) !==
					localStorage.getItem('GoogleSearchBar')
				) {
					state.config = JSON.parse(
						localStorage.getItem('GoogleSearchBar')
					);
				}
			}
			setInterval(updateStyles, 1000);
			updateStyles(); // updates the styles from local storage

			function retrieveQueries() {
				state.focus = null;
				fetch(
					`https://corsanywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=chrome&q=${state.searchText}`
				)
					.then((res) => res.json())
					.then((data) => {
						data = JSON.parse(JSON.stringify(data));
						var results = {};
						for (
							let i = 0;
							data[1].length < state.config.searchSuggestions
								? i < data[1].length
								: i < state.config.searchSuggestions;
							i++
						) {
							results[i] = {
								query: data[1][i],
								type: data[4]['google:suggesttype'][i],
								link:
									data[4]['google:suggesttype'][i] ==
									'NAVIGATION'
										? data[1][i]
										: 'https://www.google.co.uk/search?q=' +
										  encodeURI(data[1][i]),
							};
						}

						state.enabled = !!state.searchText.replace(/\s/g, '')
							.length;
						state.queries = results;
					})
					.catch((err) => {
						console.error(err);
					});
			}

			function changeTextbox() {
				state.searchText = state.queries[state.focus].query;
			}

			function inputDown() {
				if (!state.searchText.replace(/\s/g, '').length) {
					state.focus = null;
					return;
				} else if (state.focus == null) {
					state.focus = 0;
					changeTextbox();
				} else if (
					state.focus <
					Object.keys(state.queries).length - 1
				) {
					state.focus++;
					changeTextbox();
				} else if (
					state.focus ==
					Object.keys(state.queries).length - 1
				) {
					state.focus = 0;
					changeTextbox();
				}
			}

			function inputUp() {
				if (!state.searchText.replace(/\s/g, '').length) {
					state.focus = null;
					return;
				} else if (state.focus == null) {
					state.focus = 0;
					changeTextbox();
				} else if (state.focus > 0) {
					state.focus--;
					changeTextbox();
				} else if (state.focus == 0) {
					state.focus = Object.keys(state.queries).length - 1;
					changeTextbox();
				}
			}

			function enterInput() {
				if (state.focus == null) {
					if (state.searchText.replace(/\s/g, '').length) {
						window.open(
							`https://www.google.co.uk/search?q=${state.searchText}`,
							'_self'
						);
					} else {
						return;
					}
				} else {
					window.open(state.queries[state.focus].link, '_self');
				}
			}

			return {
				state,
				retrieveQueries,
				inputDown,
				inputUp,
				enterInput,
			};
		},
	};
</script>

<style lang="scss" scoped>
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

	input[type='text'] {
		position: absolute;
		width: 50%;
		box-sizing: border-box;
		border-radius: 3rem;
		font-size: 3rem;
		font-family: Quicksand, sans-serif;
		color: $nord6;
		outline: none;
		border: none;
		box-shadow: none;
		background-image: url('../assets/google-icon.svg');

		background-position: 2rem;
		background-repeat: no-repeat;
		background-size: 3rem;
		padding: 0.5rem 3rem 0.5rem 6.5rem;
		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, 0%);
		opacity: 0.8;
		-webkit-transition: background-color 0.4s ease-in-out;
		transition: background-color 0.4s ease-in-out;
		-webkit-transition: opacity 0.4s ease-in-out;
		transition: opacity 0.4s ease-in-out;
		box-shadow: 0.2rem 0.2rem 10px rgba(0, 0, 0, 0.205);

		&:focus {
			background-color: $nord3;
			opacity: 1;
		}

		&::placeholder {
			color: $nord4;
		}
	}

	.enabled {
		border-radius: 2.4rem 2.4rem 0 0 !important;
		background-color: $nord3;
		box-shadow: 0 0 0 !important;
	}

	.searchWrapper {
		position: relative;
		margin-top: -6vw;
	}
	.searchSuggestions {
		position: absolute;
		text-align: left;
		list-style-type: none;
		font-family: Quicksand;
		color: #fff;
		font-size: 2vw;
		background-color: $nord3;
		width: 50%;
		box-sizing: border-box;
		border-radius: 0 0 2.4rem 2.4rem;
		margin-top: 75px;
		z-index: 1;

		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, 0%);
		li {
			transition: background-color 0.1s ease-in-out;
			-webkit-transition: background-color 0.1s ease-in-out;
			margin-right: 4vw;
			margin-bottom: 0.4vw;
			padding: 0.1vw;

			&:not(.focused) {
				background-color: $nord3;
				&:hover {
					background-color: $nord2;
				}
			}
		}
	}

	a {
		text-decoration: none;
		color: white;
	}

	.focused {
		background-color: $nord2;
	}
</style>
