<template>
	<div class="wrapper" v-if="config.Bookmarks.enabled">
		<ul class="bookmarksList">
			<li
				v-for="(bookmark, index) in state.bookmarks"
				:key="bookmark.name"
				class="bookmarkLi"
			>
				<div
					class="bookmark"
					:style="{
						backgroundImage: `url(
								https://api.faviconkit.com/${stripUrl(bookmark.URL)}/512
							)`,
						backgroundColor: config.Bookmarks.bookmarkBg,
					}"
				>
					<button
						class="deleteBookmark"
						@click="deleteBookmark(index)"
						><svg
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
							</svg></svg
					></button>
					<div class="clickableLink" @click="openPage(bookmark.URL)"
						><h1
							:style="{
								color: config.Bookmarks.bookmarkTextColour,
								fontFamily: config.Bookmarks.bookmarkFont,
							}"
							>{{ bookmark.name }}</h1
						></div
					>
				</div>
			</li>

			<li>
				<button class="addBookmarkButton">
					<div
						class="addBookmark"
						@click="addBookmarkOn = !addBookmarkOn"
						:style="{
							backgroundColor: config.Bookmarks.addBookmarkBg,
							color: config.Bookmarks.addBookmarkPlusColour,
						}"
						><h1>+</h1></div
					>
				</button>
			</li>
		</ul>
	</div>

	<div
		class="addBookmarkGui animate__animated animate__fadeInDown animate__faster"
		v-if="addBookmarkOn"
	>
		<ul class="settingsBar">
			<li><h1 class="settingsBarTitle">Add New Bookmark</h1></li>
			<li>
				<button
					class="closeSettings"
					@click="addBookmarkOn = !addBookmarkOn"
				>
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

		<div class="addBookmarkMain">
			<ul class="addBookmarkContents">
				<li>
					<h1>Bookmark Name</h1>
					<input type="text" v-model="state.newBookmark.name" />
				</li>
				<li>
					<h1>Bookmark URL</h1>
					<input type="text" v-model="state.newBookmark.URL" />
				</li>
			</ul>
			<button class="submitNewBookmark" @click="addBookmark"
				>Submit</button
			>
		</div>
	</div>
</template>

<script>
	import { reactive, ref } from 'vue';
	import useConfig from '../modules/config';
	export default {
		setup() {
			const { config } = useConfig();
			const state = reactive({
				bookmarks: JSON.parse(localStorage.getItem('BookmarkList')),
				newBookmark: {
					name: '',
					URL: '',
				},
			});

			let addBookmarkOn = ref(false);

			function stripUrl(url) {
				return typeof url == 'undefined'
					? null
					: url.replace(/(^\w+:|^)\/\//, '');
			}

			function addBookmark() {
				if (state.bookmarks == null) {
					state.bookmarks = {};
				}
				let i = 0;
				while (state.bookmarks[i.toString()] != null) i++;
				state.bookmarks[i.toString()] = {
					name: state.newBookmark.name,
					URL: state.newBookmark.URL,
				};
				state.newBookmark.name = '';
				state.newBookmark.URL = '';
				addBookmarkOn.value = !addBookmarkOn.value;
				localStorage.setItem(
					'BookmarkList',
					JSON.stringify(state.bookmarks)
				);
			}

			function openPage(url) {
				window.open(url, '_self');
			}

			function deleteBookmark(index) {
				delete state.bookmarks[index];
				localStorage.setItem(
					'BookmarkList',
					JSON.stringify(state.bookmarks)
				);
			}

			return {
				state,
				stripUrl,
				addBookmark,
				addBookmarkOn,
				openPage,
				deleteBookmark,
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

	.bookmarksList {
		display: flex;
		list-style-type: none;
		flex-wrap: wrap;
		margin-top: 19vw;
		flex-direction: flex-start;
		@media (max-width: 960px) {
			margin-top: 28vw;
		}
	}

	.bookmarksListLink {
		text-decoration: none;
	}

	.bookmark {
		display: flex;
		flex-direction: column;
		width: 15vw;
		height: 9vw;
		border-radius: 2vw;
		box-shadow: 0.2rem 0.2rem 5px rgba(0, 0, 0, 0.205);
		text-align: center;
		padding: 1vw;
		opacity: 0.8;
		margin-left: 2vw;
		margin-right: 2vw;

		position: relative;
		transition: opacity 0.2s ease-in-out;
		transition: margin-top 0.2s ease-in-out;

		background-size: 6vw;
		background-repeat: no-repeat;
		background-position: 50% 15%;
		&:hover {
			margin-top: 1vw;
		}

		h1 {
			font-size: 1.7vw;
			margin-top: 6.3vw;
			text-overflow: ellipsis;
			word-wrap: break-word;
			display: block;
			line-height: 2.1vw; /* a */
			max-height: 2.1vw; /* a x number of line to show (ex : 2 line)  */
		}
	}

	.deleteBookmark {
		border: none;
		padding: 0;
		outline: none;
		cursor: pointer;
		background: none;
		width: 1vw;
		height: 1vw;
		border-radius: 5vw;
		position: absolute;
		margin-left: 14vw;
		margin-top: -0.3vw;
		svg {
			width: 1vw;
			height: 1vw;
			fill: $nord5;
			background-color: $nord11;
			border-radius: 50%;
			padding: 2px;
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

	li.bookmarkLi {
		height: 12vw;
		margin-bottom: 3vw;
	}

	.wrapper {
		position: absolute;
		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, 0%);
		margin-top: -10vw;
		width: 90%;
		z-index: 1;
	}

	.addBookmarkButton {
		background: none;
		outline: none;
		cursor: pointer;
		border: none;
	}

	.addBookmark {
		display: flex;
		flex-direction: column;
		width: 15vw;
		height: 9vw;
		border-radius: 2vw;
		box-shadow: 0.2rem 0.2rem 5px rgba(0, 0, 0, 0.205);
		text-align: center;
		padding: 1vw;
		opacity: 0.7;
		margin-left: 2vw;
		margin-right: 2vw;

		opacity: 0.6;
		position: relative;
		transition: margin-top 0.2s ease-in-out;

		background-size: 7vw;
		background-repeat: no-repeat;
		background-position: 50% 15%;
		&:hover {
			margin-top: 1vw;
		}

		h1 {
			font-size: 10vw;
			margin-top: -1.5vw;
		}
	}

	.clickableLink {
		cursor: pointer;
	}

	.addBookmarkGui {
		z-index: 50;
		background-color: rgba(59, 66, 82, 0.9);
		position: fixed;
		height: 600px;
		width: 900px;
		top: 50%;
		left: 50%;
		margin-top: -300px; /* Negative half of height. */
		margin-left: -450px; /* Negative half of width. */
		border-radius: 2vw;
		box-shadow: 0.2rem 0.2rem 20px rgba(0, 0, 0, 0.205);

		.settingsBar {
			width: 100%;
			list-style-type: none;
			display: inline-flex;
			flex-direction: row;
			justify-content: space-between;

			.settingsBarTitle {
				color: $nord5;
				font-family: Quicksand;
				text-decoration: underline;
				margin-top: -5px;
				font-size: 40px;
			}
		}
	}

	.closeSettings {
		border: none;
		padding: 0;
		outline: none;
		cursor: pointer;
		background: none;
		width: 1.5vw;
		height: 1.5vw;
		border-radius: 50%;
		position: fixed;
		margin-left: -90px;
		svg {
			width: 20px;
			height: 20px;
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

	.addBookmarkMain {
		width: 100%;
		height: 75%;
		margin-top: -20px;

		.addBookmarkContents {
			font-family: Quicksand;
			color: $nord4;
			list-style-type: none;

			li {
				margin-bottom: 100px;

				input[type='text'] {
					margin-left: 2%;
					font-family: Quicksand;
					border: none;
					outline: none;
					background-color: $nord3;
					color: $nord5;
					width: 775px;
					height: 40px;
					font-size: 1.7rem;
				}
			}
		}

		.submitNewBookmark {
			outline: none;
			border: none;
			font-family: Quicksand;
			width: 300px;
			height: 75px;
			border-radius: 20px;
			background-color: rgba($color: $nord8, $alpha: 0.7);
			color: $nord5;
			font-size: 50px;
			font-weight: bold;
			display: block;
			margin-left: auto;
			margin-right: auto;
			transition: background-color 0.2s ease-in-out;
			&:hover {
				background-color: rgba($color: $nord8, $alpha: 1);
				cursor: pointer;
			}
		}
	}
</style>
