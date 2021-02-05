<template>
	<button class="togglePreferences" @click="toggleClicked">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="60"
			height="60"
			viewBox="0 0 24 24"
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
		<h1 class="progress">Currently in progress, come back later!</h1>
	</div>
</template>

<script>
	import { reactive, ref } from 'vue';
	export default {
		name: 'UserSettings',
		setup() {
			const state = reactive({});
			let preferencesOn = ref(false);

			function toggleClicked() {
				preferencesOn.value = !preferencesOn.value;
			}

			return {
				toggleClicked,
				preferencesOn,
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
		margin-top: 33vh;

		svg {
			width: 2.5vw;
			fill: $nord8;

			transition: fill 0.3s ease-in-out;
			-webkit-transition: fill 0.3s ease-in-out;
			transition: transform 0.3s ease-in-out;
			-webkit-transition: transform 0.3s ease-in-out;

			&:hover {
				fill: $nord9;
				cursor: pointer;
				transform: rotate(90deg);
				-webkit-transform: rotate(90deg);
			}
		}
	}

	.userSettings {
		z-index: 100;
		background-color: $nord1;
		position: fixed;
		width: 80vw;
		height: 80vh;
		top: 50%;
		left: 50%;
		margin-top: -40vh; /* Negative half of height. */
		margin-left: -40vw; /* Negative half of width. */
		border-radius: 2vw;
		box-shadow: 0.2rem 0.2rem 20px rgba(0, 0, 0, 0.205);
		backdrop-filter: blur(6px);

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
			margin-top: 0.9vw;
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

	.progress {
		font-family: Quicksand;
		color: $nord5;
		text-align: center;
		font-size: 5vw;
	}
</style>
