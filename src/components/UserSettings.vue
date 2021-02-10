<template>
	<button class="togglePreferences" @click="toggleClicked">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="60"
			height="60"
			viewBox="0 0 24 24"
			:style="{ fill: config.Settings.wheelColour }"
		>
			<path
				d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
			/>
		</svg>
	</button>
	<div
		class="userSettings animate__animated animate__fadeInDown animate__faster"
		v-if="preferencesOn"
	>
		<ul class="settingsBar">
			<li><h1 class="settingsBarTitle">Settings</h1></li>
			<li>
				<button class="closeSettings" @click="toggleClicked">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path
								d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"
							/>
						</svg>
					</svg>
				</button>
			</li>
		</ul>
		<!--Would higly recommend minimising div below unless you want to work on it. Basically just divs with different inputs, v-modelled to an item in config. Also updates local storage on input. -->
		<div class="userSettingsFrame">
			<li class="resetSettings">
				<button
					class="resetSettingsButton"
					@click="setSettingsToDefaults"
					>Set To Defaults</button
				>
			</li>
			<div class="general">
				<h1 class="settingsTitle">General</h1>
				<ul class="settingsModule">
					<li>
						<p>Background Colour:</p>
						<input
							type="color"
							v-model="config.Main.backgroundColour"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Background Image:</p>
						<input
							type="text"
							v-model="config.Main.backgroundImageUrl"
							@change="updateLocalStorage"
							class="textInput"
						/>
					</li>
					<li>
						<p>Settings Wheel Colour:</p>
						<input
							type="color"
							v-model="config.Settings.wheelColour"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
				</ul>
			</div>
			<div class="dateAndTime">
				<h1 class="settingsTitle">Date and Time</h1>

				<ul class="settingsModule">
					<li>
						<p>Date Colour:</p>
						<input
							type="color"
							v-model="config.DateAndTime.dateColour"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Date Font:</p>
						<input
							type="text"
							v-model="config.DateAndTime.dateFont"
							@change="updateLocalStorage"
							class="textInput"
						/>
					</li>
					<li>
						<p>Time Colour:</p>
						<input
							type="color"
							v-model="config.DateAndTime.timeColour"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Time Font:</p>
						<input
							type="text"
							v-model="config.DateAndTime.timeFont"
							@change="updateLocalStorage"
							class="textInput"
						/>
					</li>
					<li>
						<p>Time Seperator Colour:</p>
						<input
							type="color"
							v-model="config.DateAndTime.timeSeperator"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
				</ul>
			</div>
			<div class="weather">
				<h1 class="settingsTitle">Weather</h1>
				<ul class="settingsModule">
					<li>
						<p>Enable Weather Widget</p>
						<input
							type="checkbox"
							v-model="config.Weather.weatherEnabled"
							@change="updateLocalStorage"
							class="toggleInput"
						/>
					</li>
					<li>
						<p>Background Colour</p>
						<input
							type="color"
							v-model="config.Weather.backgroundColour"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Weather Icon Colour</p>
						<input
							type="color"
							v-model="config.Weather.imageColour"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Weather Title Colour</p>
						<input
							type="color"
							v-model="config.Weather.titleColour"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Temperature Colour</p>
						<input
							type="color"
							v-model="config.Weather.tempColour"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Metric/Imperial</p>
						<input
							type="text"
							v-model="config.Weather.unit"
							@change="updateLocalStorage"
							class="textInput"
							placeholder="may need refresh"
						/>
					</li>
					<li>
						<p>Weather Description Colour</p>
						<input
							type="color"
							v-model="config.Weather.descColour"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Location</p>
						<input
							type="text"
							v-model="config.Weather.location"
							@change="updateLocalStorage"
							class="textInput"
						/>
					</li>
					<li>
						<p>Location Colour</p>
						<input
							type="color"
							v-model="config.Weather.locationColour"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Font</p>
						<input
							type="text"
							v-model="config.Weather.font"
							@change="updateLocalStorage"
							class="textInput"
						/>
					</li>
				</ul>
			</div>
			<div class="googleSearchBar">
				<h1 class="settingsTitle">Google Search Bar Settings</h1>
				<ul class="settingsModule">
					<li>
						<p>Search Bar Background</p>
						<input
							type="color"
							v-model="config.GoogleSearchBar.barBg"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Search Bar Text Colour</p>
						<input
							type="color"
							v-model="config.GoogleSearchBar.searchBarText"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Search Bar Font</p>
						<input
							type="text"
							v-model="config.GoogleSearchBar.barFont"
							@change="updateLocalStorage"
							class="textInput"
						/>
					</li>
					<li>
						<p>Number of Search Suggestions</p>
						<input
							type="text"
							v-model="config.GoogleSearchBar.searchSuggestions"
							@change="updateLocalStorage"
							class="numberInput"
						/>
					</li>
					<li>
						<p>Search Suggestions Background</p>
						<input
							type="color"
							v-model="
								config.GoogleSearchBar.searchSuggestionsColour
							"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Search Suggestions Text Colour</p>
						<input
							type="color"
							v-model="
								config.GoogleSearchBar.searchSuggestionsText
							"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Search Suggestions Font</p>
						<input
							type="text"
							v-model="
								config.GoogleSearchBar.searchSuggestionsFont
							"
							@change="updateLocalStorage"
							class="textInput"
						/>
					</li>
				</ul>
			</div>
			<div class="bookmarks">
				<h1 class="settingsTitle">Bookmarks Settings</h1>
				<ul class="settingsModule">
					<li>
						<p>Show Bookmarks</p>
						<input
							type="checkbox"
							v-model="config.Bookmarks.enabled"
							@change="updateLocalStorage"
							class="toggleInput"
						/>
					</li>
					<li>
						<p>Bookmark Background</p>
						<input
							type="color"
							v-model="config.Bookmarks.bookmarkBg"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Bookmark Font</p>
						<input
							type="text"
							v-model="config.Bookmarks.bookmarkFont"
							@change="updateLocalStorage"
							class="textInput"
						/>
					</li>
					<li>
						<p>Bookmark Text Colour</p>
						<input
							type="color"
							v-model="config.Bookmarks.bookmarkTextColour"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Add Bookmark Background</p>
						<input
							type="color"
							v-model="config.Bookmarks.addBookmarkBg"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Add Bookmark Plus Colour</p>
						<input
							type="color"
							v-model="config.Bookmarks.addBookmarkPlusColour"
							@change="updateLocalStorage"
							class="colourInput"
						/>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import useConfig from '../modules/config';
	export default {
		name: 'UserSettings',
		setup() {
			const { config, defaults, updateLocalStorage } = useConfig();

			let preferencesOn = ref(false);

			function toggleClicked() {
				preferencesOn.value = !preferencesOn.value; // Toggle the preferences menu.
			}

			function setSettingsToDefaults() {
				// Updates the local storage and config state with the default values, taking the default values from config.js.
				for (var [type, property] of Object.entries(
					JSON.parse(JSON.stringify(defaults))
				)) {
					config[type] = property;
					updateLocalStorage();
				}
			}

			return {
				toggleClicked,
				preferencesOn,
				updateLocalStorage,
				setSettingsToDefaults,
				config,
			};
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

	.togglePreferences {
		border: none;
		padding: 0;
		outline: none;
		background: none;
		border-radius: 1vw;
		float: right;
		margin-right: 1vw;
		vertical-align: bottom;
		z-index: 10;
		margin-top: -29vw;

		svg {
			width: 2.5vw;

			transition: fill 0.3s ease-in-out;
			-webkit-transition: fill 0.3s ease-in-out;
			transition: transform 0.3s ease-in-out;
			-webkit-transition: transform 0.3s ease-in-out;

			&:hover {
				fill: $nord9 !important;
				cursor: pointer;
				transform: rotate(90deg);
				-webkit-transform: rotate(90deg);
			}
		}
	}

	.userSettings {
		z-index: 100;
		background-color: rgba(59, 66, 82, 0.9);
		position: fixed;
		width: 80vw;
		height: 80vh;
		top: 50%;
		left: 50%;
		margin-top: -40vh; /* Negative half of height. */
		margin-left: -40vw; /* Negative half of width. */
		border-radius: 2vw;
		box-shadow: 0.2rem 0.2rem 20px rgba(0, 0, 0, 0.205);

		@media (min-width: 1400px) {
			background-image: url('../assets/nord-colours.svg');
			background-repeat: no-repeat;
			background-position: right;
		}

		ul.settingsBar {
			display: inline;
			list-style-type: none;
			.settingsBarTitle {
				font-family: Quicksand;
				color: $nord5;
				font-size: 3rem;
				padding-left: 2vw;
				margin-top: 0%;
				text-decoration: underline;
			}

			.closeSettings {
				border: none;
				padding: 0;
				outline: none;
				cursor: pointer;
				float: right;
				background: none;
				width: 1.5vw;
				height: 1.5vw;
				border-radius: 50%;
				margin-right: 0.9vw;
				margin-top: -5.5%;
				svg {
					width: 70%;
					height: 70%;
					fill: $nord5;
					background-color: $nord11;
					border-radius: 50%;
					padding: 0.3vw;
					transition: transform 0.2s ease-in-out;
					-webkit-transition: transform 0.2s ease-in-out;
					transform: fill 0.2s ease-in-out;
					-webkit-transform: fill 0.2s ease-in-out;
					transform: background-color 0.2s ease-in-out;
					-webkit-transform: background-color 0.2s ease-in-out;

					&:hover {
						transform: rotate(90deg);
						fill: $nord4;
						background-color: $nord12;
					}
				}
			}
		}

		.userSettingsFrame {
			width: 97%;
			height: 82%;
			overflow-x: scroll;
			overflow-x: hidden;
			margin-left: 3%;
			margin-top: -1%;
			list-style-type: none;
		}
	}

	ul.settingsModule {
		list-style-type: none;
		font-family: Quicksand;
		color: $nord5;
		font-size: 1.5rem;
		li {
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
	}

	.settingsTitle {
		font-family: Quicksand;
		color: $nord5;
	}
	.colourInput {
		border: none;
		outline: none;
		background: none;
		width: 50px;
		height: 50px;
		margin-left: 2%;
	}

	.textInput {
		margin-left: 2%;
		font-family: Quicksand;
		border: none;
		outline: none;
		background-color: $nord3;
		color: $nord5;
		width: 15rem;
		height: 2rem;
		font-size: 1.7rem;
	}
	.numberInput {
		margin-left: 2%;
		font-family: Quicksand;
		border: none;
		outline: none;
		background-color: $nord3;
		color: $nord5;
		width: 5rem;
		height: 2rem;
		font-size: 1.7rem;
	}

	.toggleInput {
		margin-left: 2%;
		width: 2rem;
		height: 2rem;
	}

	.resetSettingsButton {
		outline: none;
		border: none;
		background-color: $nord8;
		color: $nord5;
		font-family: Quicksand;
		width: 10vw;
		height: 2vw;
		font-size: 1vw;
		border-radius: 0.2vw;
		&:hover {
			opacity: 0.8;
			cursor: pointer;
		}
	}
</style>
