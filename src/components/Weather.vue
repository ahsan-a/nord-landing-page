<template>
	<div
		id="weather"
		:style="{ backgroundColor: config.Weather.backgroundColour }"
		v-if="config.Weather.weatherEnabled"
	>
		<div class="icon">
			<img
				:src="state.weatherOutput.icon"
				alt="image to show weather"
				:style="{
					filter: toFilter(config.Weather.imageColour),
				}"
			/>
		</div>
		<h2
			class="main"
			:style="{
				color: config.Weather.titleColour,
				fontFamily: config.Weather.font,
			}"
			>{{ state.weatherOutput.main }}</h2
		>
		<h2
			class="temperature"
			:style="{
				color: config.Weather.tempColour,
				fontFamily: config.Weather.font,
			}"
			>{{ state.weatherOutput.temp }}°</h2
		>
		<p
			class="description"
			:style="{
				color: config.Weather.descColour,
				fontFamily: config.Weather.font,
			}"
			>{{ state.weatherOutput.description }}</p
		>
		<p
			class="location"
			:style="{
				color: config.Weather.locationColour,
				fontFamily: config.Weather.font,
			}"
		>
			{{ state.weatherOutput.city }}, {{ state.weatherOutput.country }}
		</p>
	</div>
</template>

<script>
	import { reactive } from 'vue';
	import { hexToCSSFilter } from 'hex-to-css-filter';
	import useConfig from '../modules/config';
	export default {
		name: 'Weather',
		setup() {
			const { config } = useConfig();

			const state = reactive({
				weatherOutput: {
					city: '',
					country: '',
					temp: '',
					main: '',
					description: '',
					icon: '',
				}, //all of the data we need.
			});

			function toFilter(hex) {
				var output = hexToCSSFilter(hex);
				return output['filter'].replace(/;/g, '');
			}

			function capitilise(string) {
				//capitalises the first letter of every word of a sentence.
				return string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
					letter.toUpperCase()
				);
			}

			function updateWeather() {
				fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
						config.Weather.location
					)}&appid=${process.env.VUE_APP_WEATHERAPIKEY}&units=${
						config.Weather.unit
					}`
				) //fetches the weather from the openweathermap api.
					.then((res) => res.json())
					.then((data) => {
						Object.assign(
							state.weatherOutput,
							{ city: data.name },
							{ country: data.sys.country },
							{ temp: Math.floor(data.main.temp) },
							{ main: data.weather[0].main },
							{
								description: capitilise(
									data.weather[0].description
								),
							},
							{
								icon: require(`../assets/weatherIcons/${data.weather[0].icon}.svg`),
							} //Writes all of the data we need to a reactive object.
						);
					})
					.catch((err) => {
						console.error(err);
					});
			}
			setInterval(updateWeather, 10000);
			updateWeather(); //updates every 5 minutes

			return {
				state,
				toFilter,
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

	#weather {
		width: 300px;
		height: 400px;
		border-radius: 20px;
		box-shadow: 0.2rem 0.2rem 10px rgba(0, 0, 0, 0.205);
		position: absolute;
		margin-top: -3vw;
		margin-left: 1vw;
		display: flex;
		flex-direction: column;

		transition: opacity 0.1s ease-in-out;

		.icon {
			img {
				width: 110px;
			}
			order: 0;
			margin-top: 50px;
			margin-left: 10px;
		}

		.main {
			font-size: 40px;
			order: 1;
			align-self: flex-end;
			margin-top: -135px;
			text-align: right;
			word-wrap: break-word;
			max-width: 175px;
			margin-right: 20px;
		}

		.temperature {
			font-weight: 300;
			order: 2;
			align-self: flex-end;
			font-size: 100px;
			margin-top: -20px;
			margin-right: 20px;
		}

		.description {
			order: 3;
			word-wrap: normal;
			max-width: 1px;
			margin-top: -70px;
			margin-left: 10px;
			font-size: 35px;
		}

		.location {
			order: 4;
			align-self: center;
			margin-top: 20px;
		}
		opacity: 0.9;
		transition: margin-top 0.2s ease-in-out;
		@media (max-width: 1300px) {
			opacity: 0;
		}
		@media (min-width: 1300px) {
			&:hover {
				opacity: 1;
				margin-top: -2.5vw;
			}
		}
	}
</style>
