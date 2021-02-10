import { reactive } from 'vue';
const defaults = {
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
		searchBarText: '#eceff4',
		barFont: 'Quicksand',
		searchSuggestions: '4',
		searchSuggestionsColour: '#4c566a',
		searchSuggestionsText: '#eceff4',
		searchSuggestionsFont: 'Quicksand',
	},
	Main: {
		backgroundColour: '#2e3440',
	},
	Settings: {
		wheelColour: '#88c0d0',
	},
};

const config = reactive({
	DateAndTime: JSON.parse(localStorage.getItem('DateAndTime')),
	Weather: JSON.parse(localStorage.getItem('Weather')),
	Main: JSON.parse(localStorage.getItem('Main')),
	GoogleSearchBar: JSON.parse(localStorage.getItem('GoogleSearchBar')),
	Bookmarks: JSON.parse(localStorage.getItem('Bookmarks')),
	Settings: JSON.parse(localStorage.getItem('Settings')),
}); // Sets the config to values in local storage. This runs on page load meaning that we can grab user prefs.

function updateLocalStorage() {
	for (const key of Object.keys(config)) {
		localStorage.setItem(key, JSON.stringify(config[key]));
	}
} // Updates the local storage values. Basically every item in config stringified, as a seperate key.

for (const key of Object.keys(config)) {
	if (config[key] == null) {
		config[key] = defaults[key]; // sets the config key to default if it doesn't exist, for new users.
	} else {
		for (const setting of Object.keys(config[key])) {
			if (config[key][setting] == null || config[key] == 'null') {
				config[key][setting] == defaults[key][setting];
			} // checks that every item inside of each key that is supposed to exist exists. This stops future updates breaking any edits.
		}
	}
}
updateLocalStorage();

export default function useConfig() {
	return { config, defaults, updateLocalStorage };
}
