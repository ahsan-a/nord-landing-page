<template>
	<div id="weather">
		<div class="icon"><img :src="state.weatherOutput.icon" /></div>
		<h2 class="main">{{ state.weatherOutput.main }}</h2>
		<h2 class="temperature">{{ state.weatherOutput.temp }}°</h2>
		<p class="description">{{ state.weatherOutput.description }}</p>
		<p class="location">
			{{ state.weatherOutput.city }}, {{ state.weatherOutput.country }}
		</p>
	</div>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		name: 'Weather',
		setup() {
			const state = reactive({
				weatherInput: {
					location: 'Widnes',
					unit: 'metric',
				},
				weatherOutput: {
					city: '',
					country: '',
					temp: '',
					main: '',
					description: '',
					icon: '',
				},
			});

			function capitilise(string) {
				return string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
					letter.toUpperCase()
				);
			}

			function updateWeather() {
				fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${state.weatherInput.location}&appid=${process.env.VUE_APP_WEATHERAPIKEY}&units=${state.weatherInput.unit}`
				)
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
							}
						);
					})
					.catch((err) => {
						console.error(err);
					});
			}
			var weatherInterval = setInterval(updateWeather, 600000);
			updateWeather();

			return {
				state,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
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

	#weather {
		font-family: Quicksand, sans-serif;
		background: $nord1;
		width: 15vw;
		height: 20vw;
		border-radius: 1vw;
		box-shadow: 0.2rem 0.2rem 10px rgba(0, 0, 0, 0.205);
		position: absolute;
		margin-top: -3vw;

		.icon {
			img {
				filter: invert(73%) sepia(18%) saturate(561%) hue-rotate(147deg)
					brightness(95%) contrast(98%);
				width: 50%;
			}
		}

		.main {
			margin-top: -1.7vw;
			margin-left: 5%;
			font-size: 2vw;
			text-align: left;
			color: $nord8;
		}

		.temperature {
			float: right;
			font-size: 5vw;
			margin-top: -2.8vw;
			margin-right: 1.5vw;
			color: $nord8;
			font-weight: 300;
		}

		.description {
			margin-top: 4.8vw;
			font-size: 1.6vw;
			margin-left: 1vw;
			color: $nord8;
		}

		.location {
			margin-top: -0.2vw;
			color: $nord8;
			font-size: 0.8vw;
			text-align: center;
			float: center;
		}
	}
</style>
