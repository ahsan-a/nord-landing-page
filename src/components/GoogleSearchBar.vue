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
					backgroundColor: config.GoogleSearchBar.barBg,
					fontFamily: config.GoogleSearchBar.barFont,
					color: config.GoogleSearchBar.searchBarText,
				}"
			/>
		</form>

		<ul
			class="searchSuggestions"
			:style="{
				backgroundColor: config.GoogleSearchBar.searchSuggestionsColour,
				fontFamily: config.GoogleSearchBar.searchSuggestionsFont,
			}"
		>
			<li
				ref="arrowKeys"
				v-for="(query, index) in state.queries"
				:key="query.query"
				:class="{ focused: index == state.focus }"
				@click="openPage(query.link)"
			>
				<a
					:href="query.link"
					:style="{
						color: config.GoogleSearchBar.searchSuggestionsText,
					}"
					>{{ query.query }}</a
				>
			</li>
		</ul>
	</div>
</template>

<script>
	import { reactive } from 'vue';
	import useConfig from '../modules/config';
	export default {
		name: 'GoogleSearch',
		setup() {
			const { config } = useConfig();

			window.onload = () => {
				document.getElementById('googleSearchBar').focus();
			};
			const state = reactive({
				searchText: '',
				enabled: false,
				focus: null,
				queries: {},
			});

			function openPage(url) {
				window.open(url, '_self');
			} // Just a useful function that allows us to open a page in the same tab.

			function retrieveQueries() {
				state.focus = null; // state.focus is teh current value we're focused on with out arrows.
				fetch(
					//fetches from google suggestqueries api and uses corsanywhere to remove CORS, it's a hach
					`https://corsanywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=chrome&q=${state.searchText}`
				)
					.then((res) => res.json())
					.then((data) => {
						data = JSON.parse(JSON.stringify(data));
						var results = {};
						for (
							let i = 0;
							data[1].length <
							config.GoogleSearchBar.searchSuggestions
								? i < data[1].length
								: i < config.GoogleSearchBar.searchSuggestions; //adds the set amount of search results to state.queries
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
							}; // creates a link. If the query is a website link, the link is that link. If it is a query the link is a google link.
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
				state.searchText = state.queries[state.focus].query; // Changes the value of the search text depending on our arrow key input.
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
			} // Logic to decide which search suggestion is currently being focused on down arrow key.

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
			} // Logic to decide which search suggestion is currently being focused on up arrow key.

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
					openPage(state.queries[state.focus].link);
				}
			} // Functionality to hit enter to open a link

			return {
				state,
				retrieveQueries,
				inputDown,
				inputUp,
				enterInput,
				openPage,
				config,
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
		opacity: 0.9;
		-webkit-transition: background-color 0.4s ease-in-out;
		transition: background-color 0.4s ease-in-out;
		-webkit-transition: opacity 0.4s ease-in-out;
		transition: opacity 0.4s ease-in-out;
		box-shadow: 0.2rem 0.2rem 10px rgba(0, 0, 0, 0.205);

		&:focus {
			background-color: $nord3;
			opacity: 0.95;
		}

		&::placeholder {
			color: $nord4;
		}
	}

	.enabled {
		border-radius: 2.4rem 2.4rem 0 0 !important;
		box-shadow: 0 0 0 !important;
	}

	.searchWrapper {
		position: relative;
		margin-top: -6vw;
		z-index: 10;
	}
	.searchSuggestions {
		position: absolute;
		text-align: left;
		list-style-type: none;
		font-family: Quicksand;
		font-size: 2vw;
		width: 50%;
		box-sizing: border-box;
		border-radius: 0 0 2.4rem 2.4rem;
		margin-top: 71px;
		z-index: 1;
		opacity: 0.95;

		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, 0%);
		li {
			transition: background-color 0.1s ease-in-out;
			-webkit-transition: background-color 0.1s ease-in-out;
			margin-right: 4vw;
			margin-bottom: 0.4vw;
			padding: 0.1vw;
			cursor: pointer;

			&:not(.focused) {
				&:hover {
					background-color: rgba($color: #000000, $alpha: 0.1);
				}
			}
		}
	}

	a {
		text-decoration: none;
	}

	.focused {
		background-color: rgba($color: #000000, $alpha: 0.1);
	}
</style>
