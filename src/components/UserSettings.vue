<template>
	<button class="togglePreferences" @click="toggleClicked">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="60"
			height="60"
			viewBox="0 0 24 24"
			:style="{ fill: state.config.Settings.wheelColour }"
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
							v-model="state.config.Main.backgroundColour"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Background Image:</p>
						<input
							type="text"
							v-model="state.config.Main.backgroundImageUrl"
							@change="updateLocalConfig"
							class="textInput"
						/>
					</li>
					<li>
						<p>Settings Wheel Colour:</p>
						<input
							type="color"
							v-model="state.config.Settings.wheelColour"
							@change="updateLocalConfig"
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
							v-model="state.config.DateAndTime.dateColour"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Date Font:</p>
						<input
							type="text"
							v-model="state.config.DateAndTime.dateFont"
							@change="updateLocalConfig"
							class="textInput"
						/>
					</li>
					<li>
						<p>Time Colour:</p>
						<input
							type="color"
							v-model="state.config.DateAndTime.timeColour"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Time Font:</p>
						<input
							type="text"
							v-model="state.config.DateAndTime.timeFont"
							@change="updateLocalConfig"
							class="textInput"
						/>
					</li>
					<li>
						<p>Time Seperator Colour:</p>
						<input
							type="color"
							v-model="state.config.DateAndTime.timeSeperator"
							@change="updateLocalConfig"
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
							v-model="state.config.Weather.weatherEnabled"
							@change="updateLocalConfig"
							class="toggleInput"
						/>
					</li>
					<li>
						<p>Background Colour</p>
						<input
							type="color"
							v-model="state.config.Weather.backgroundColour"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Weather Icon Colour</p>
						<input
							type="color"
							v-model="state.config.Weather.imageColour"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Weather Title Colour</p>
						<input
							type="color"
							v-model="state.config.Weather.titleColour"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Temperature Colour</p>
						<input
							type="color"
							v-model="state.config.Weather.tempColour"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Metric/Imperial</p>
						<input
							type="text"
							v-model="state.config.Weather.unit"
							@change="updateLocalConfig"
							class="textInput"
							placeholder="may need refresh"
						/>
					</li>
					<li>
						<p>Weather Description Colour</p>
						<input
							type="color"
							v-model="state.config.Weather.descColour"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Location</p>
						<input
							type="text"
							v-model="state.config.Weather.location"
							@change="updateLocalConfig"
							class="textInput"
						/>
					</li>
					<li>
						<p>Location Colour</p>
						<input
							type="color"
							v-model="state.config.Weather.locationColour"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Font</p>
						<input
							type="text"
							v-model="state.config.Weather.font"
							@change="updateLocalConfig"
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
							v-model="state.config.GoogleSearchBar.barBg"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Search Bar Text Colour</p>
						<input
							type="color"
							v-model="state.config.GoogleSearchBar.barBg"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Search Bar Font</p>
						<input
							type="text"
							v-model="state.config.GoogleSearchBar.barFont"
							@change="updateLocalConfig"
							class="textInput"
						/>
					</li>
					<li>
						<p>Number of Search Suggestions</p>
						<input
							type="text"
							v-model="
								state.config.GoogleSearchBar.searchSuggestions
							"
							@change="updateLocalConfig"
							class="numberInput"
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
							v-model="state.config.Bookmarks.enabled"
							@change="updateLocalConfig"
							class="toggleInput"
						/>
					</li>
					<li>
						<p>Bookmark Background</p>
						<input
							type="color"
							v-model="state.config.Bookmarks.bookmarkBg"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Bookmark Font</p>
						<input
							type="text"
							v-model="state.config.Bookmarks.bookmarkFont"
							@change="updateLocalConfig"
							class="textInput"
						/>
					</li>
					<li>
						<p>Bookmark Text Colour</p>
						<input
							type="color"
							v-model="state.config.Bookmarks.bookmarkTextColour"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Add Bookmark Background</p>
						<input
							type="color"
							v-model="state.config.Bookmarks.addBookmarkBg"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
					<li>
						<p>Add Bookmark Plus Colour</p>
						<input
							type="color"
							v-model="
								state.config.Bookmarks.addBookmarkPlusColour
							"
							@change="updateLocalConfig"
							class="colourInput"
						/>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	const defaultProperties = {
		wheelColour: '#88c0d0',
	};

	import { reactive, ref } from 'vue';
	export default {
		name: 'UserSettings',
		setup() {
			let preferencesOn = ref(false);
			const state = reactive({
				config: {
					DateAndTime: JSON.parse(
						localStorage.getItem('DateAndTime')
					),
					Weather: JSON.parse(localStorage.getItem('Weather')),
					Main: JSON.parse(localStorage.getItem('Main')),
					GoogleSearchBar: JSON.parse(
						localStorage.getItem('GoogleSearchBar')
					),
					Bookmarks: JSON.parse(localStorage.getItem('Bookmarks')),
					Settings:
						localStorage.getItem('Settings') == null ||
						localStorage.getItem('Settings') == 'null'
							? defaultProperties
							: JSON.parse(localStorage.getItem('Settings')),
				},
			});

			function setDefaultStyles() {
				localStorage.setItem(
					'Settings',
					JSON.stringify(defaultProperties)
				);
			}
			if (
				localStorage.getItem('Settings') == null ||
				localStorage.getItem('Settings') == 'null'
			)
				setDefaultStyles(); // sets styles to default if they aren't in localstorage

			function updateStyles() {
				if (
					localStorage.getItem('Settings') !== state.config.Settings
				) {
					localStorage.setItem(
						'Settings',
						JSON.stringify(state.config.Settings)
					);
				}
			}
			setInterval(updateStyles, 500);
			updateStyles(); // updates the styles from local storage

			function toggleClicked() {
				preferencesOn.value = !preferencesOn.value;
			}

			function updateLocalConfig() {
				var keys = Object.keys(state.config);
				keys.forEach((element) => {
					localStorage.setItem(
						element,
						JSON.stringify(state.config[element])
					);
				});
			}

			function setSettingsToDefaults() {
				const allDefaults = {
					Bookmarks: {
						bookmarkBg: '#3b4252',
						bookmarkFont: 'Quicksand',
						bookmarkTextColour: '#e5e9f0',
						enabled: true,
						addBookmarkBg: '#3b4252',
						addBookmarkPlusColour: '#e5e9f0',
					},
					Weather: {
						weatherEnabled: true,
						backgroundColour: '#3b4252',
						imageColour: '#88c0d0',
						titleColour: '#88c0d0',
						tempColour: '#88c0d0',
						unit: 'metric',
						descColour: '#88c0d0',
						location: 'London',
						locationColour: '#88c0d0',
						font: 'Quicksand',
					},
					DateAndTime: {
						dateColour: '#88c0d0',
						timeSeperator: '#88c0d0',
						timeColour: '#d8dee9',
						dateFont: 'Quicksand',
						timeFont: 'Roboto Mono',
					},
					GoogleSearchBar: {
						barBg: '#434c5e',
						barFont: 'Quicksand',
						searchSuggestions: '4',
					},
					Main: {
						backgroundColour: '#2e3440',
					},
					Settings: {
						wheelColour: '#88c0d0',
					},
				};
				const pushToLocalArray = Object.entries(allDefaults);

				for (var [type, property] of pushToLocalArray) {
					state.config[type] = property;
					updateLocalConfig();
				}
			}

			return {
				state,
				toggleClicked,
				preferencesOn,
				updateLocalConfig,
				setSettingsToDefaults,
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
