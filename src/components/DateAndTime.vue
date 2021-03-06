<template>
	<div class="wrapper">
		<h1
			class="date"
			:style="{
				color: config.DateAndTime.dateColour,
				fontFamily: config.DateAndTime.dateFont,
			}"
		>
			<!--current date-->
			{{ state.date.date }}, {{ state.date.day }} {{ state.date.month }}
		</h1>
		<ul class="time">
			<!-- Current Time -->
			<li
				:style="{
					color: config.DateAndTime.timeColour,
					fontFamily: config.DateAndTime.timeFont,
				}"
				>{{ state.time.hour }}</li
			>
			<li
				class="seperator"
				:style="{ color: config.DateAndTime.timeSeperator }"
				>:</li
			>
			<li
				:style="{
					color: config.DateAndTime.timeColour,
					fontFamily: config.DateAndTime.timeFont,
				}"
				>{{ state.time.minute }}</li
			>
			<li
				class="seperator"
				:style="{ color: config.DateAndTime.timeSeperator }"
				>:</li
			>
			<li
				:style="{
					color: config.DateAndTime.timeColour,
					fontFamily: config.DateAndTime.timeFont,
				}"
				>{{ state.time.second }}</li
			>
		</ul>
	</div>
</template>

<script>
	import { reactive } from 'vue';
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]; // getDate and getMonth returns an index. We need these arrays to get an actual day/month

	import useConfig from '../modules/config';

	export default {
		name: 'DateAndTime',
		setup() {
			const { config } = useConfig();

			const state = reactive({
				time: {
					hour: '',
					minute: '',
					second: '',
				},
				date: {
					date: '',
					day: '',
					month: '',
				}, // This writes all of the data we need to to a reactive object
			});

			function updateTime() {
				var cd = new Date();
				function zp(num) {
					//This adds a 0 in front of any number we get that is only 1 digit long
					var zero = '';
					for (var i = 0; i < 2; i++) {
						zero += '0';
					}
					return (zero + num).slice(-2);
				}
				state.time.hour = `${zp(cd.getHours())}`;
				state.time.minute = `${zp(cd.getMinutes())}`;
				state.time.second = `${zp(cd.getSeconds())}`;

				state.date.date = `${days[cd.getDay()]}`;
				state.date.day = `${cd.getDate()}`;
				state.date.month = `${months[cd.getMonth()]}`;
			}
			setInterval(updateTime, 1000);
			updateTime(); //This runs the update time function every second.

			return {
				state,
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
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

	$timeSeperator: #88c0d0;
	$timeColour: #d8dee9;

	.date {
		margin-top: 4vw;
		font-weight: 700;
		font-size: 2.75vw;
		text-align: center;
	}

	ul.time {
		font-family: 'Roboto Mono';
		font-weight: 650;
		font-size: 10vw;
		color: $timeColour;
		text-align: center;
		margin-top: -2.5vw;
		letter-spacing: 0.1vw;
		.seperator {
			color: $timeSeperator;
		}
		li {
			display: inline;
		}
	}

	.wrapper {
		z-index: 20;
	}
</style>
