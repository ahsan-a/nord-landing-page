<template>
	<div class="searchWrapper">
		<form
			id="googleSearch"
			method="get"
			action="https://www.google.co.uk/search"
		>
			<input
				id="googleSearchBar"
				type="text"
				name="q"
				autocomplete="off"
				placeholder="Search here..."
				v-model="state.searchText"
				@input="retrieveQueries"
				:class="{ enabled: state.enabled }"
			/>
		</form>

		<ul class="searchSuggestions">
			<li v-for="query in state.queries" :key="query.query">
				<a :href="query.link">{{ query.query }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		name: 'GoogleSearch',
		setup() {
			const state = reactive({
				searchText: '',
				enabled: false,
				queries: {},
			});

			window.onload = () => {
				document.getElementById('googleSearchBar').focus();
			};

			function retrieveQueries() {
				fetch(
					`https://corsanywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=chrome&q=${state.searchText}`
				)
					.then((res) => res.json())
					.then((data) => {
						data = JSON.parse(JSON.stringify(data));
						var results = {};
						for (
							let i = 0;
							data[1].length < 4 ? i < data[1].length : i < 4;
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

							console.log(results[i]['link']);
						}

						state.enabled = !!state.searchText.replace(/\s/g, '')
							.length;
						state.queries = results;
					})
					.catch((err) => {
						console.error(err);
					});
			}
			return {
				state,
				retrieveQueries,
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
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

	input[type='text'] {
		width: 50%;
		box-sizing: border-box;
		border-radius: 10vw;
		font-size: 3rem;
		font-family: Quicksand, sans-serif;
		color: $nord6;
		outline: none;
		border: none;
		box-shadow: none;
		background-color: $nord2;
		background-image: url('../assets/google-icon.svg');
		background-position: 2rem;
		background-repeat: no-repeat;
		background-size: 3rem;
		padding: 0.5rem 3rem 0.5rem 6.5rem;
		display: block;
		margin: -7vw auto;
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
		border-radius: 2vw 2vw 0 0 !important;
		background-color: $nord3 !important;
		box-shadow: 0 0 0 !important;
	}

	.searchWrapper {
		position: relative;

		.searchSuggestions {
			text-align: left;
			list-style-type: none;
			font-family: Quicksand;
			color: #fff;
			margin-left: 24.8vw;
			margin-top: 7vw;
			font-size: 2vw;
			background-color: $nord3;
			width: 50%;
			box-sizing: border-box;
			border-radius: 0 0 2vw 2vw;
			li {
				transition: background-color 0.4s ease-in-out;
				-webkit-transition: background-color 0.2s ease-in-out;
				margin-right: 2vw;
				padding: 0.1vw 0;

				background-color: $nord3;
				&:hover {
					background-color: $nord2;
				}
			}
		}
	}

	a {
		text-decoration: none !important;
		color: white !important;
	}
</style>
