(function (e) {
	function t(t) {
		for (
			var c, a, u = t[0], s = t[1], i = t[2], p = 0, l = [];
			p < u.length;
			p++
		)
			(a = u[p]),
				Object.prototype.hasOwnProperty.call(r, a) &&
					r[a] &&
					l.push(r[a][0]),
				(r[a] = 0);
		for (c in s)
			Object.prototype.hasOwnProperty.call(s, c) && (e[c] = s[c]);
		f && f(t);
		while (l.length) l.shift()();
		return o.push.apply(o, i || []), n();
	}
	function n() {
		for (var e, t = 0; t < o.length; t++) {
			for (var n = o[t], c = !0, u = 1; u < n.length; u++) {
				var s = n[u];
				0 !== r[s] && (c = !1);
			}
			c && (o.splice(t--, 1), (e = a((a.s = n[0]))));
		}
		return e;
	}
	var c = {},
		r = { app: 0 },
		o = [];
	function a(t) {
		if (c[t]) return c[t].exports;
		var n = (c[t] = { i: t, l: !1, exports: {} });
		return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
	}
	(a.m = e),
		(a.c = c),
		(a.d = function (e, t, n) {
			a.o(e, t) ||
				Object.defineProperty(e, t, { enumerable: !0, get: n });
		}),
		(a.r = function (e) {
			'undefined' !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: 'Module',
				}),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(a.t = function (e, t) {
			if ((1 & t && (e = a(e)), 8 & t)) return e;
			if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (
				(a.r(n),
				Object.defineProperty(n, 'default', {
					enumerable: !0,
					value: e,
				}),
				2 & t && 'string' != typeof e)
			)
				for (var c in e)
					a.d(
						n,
						c,
						function (t) {
							return e[t];
						}.bind(null, c)
					);
			return n;
		}),
		(a.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e['default'];
					  }
					: function () {
							return e;
					  };
			return a.d(t, 'a', t), t;
		}),
		(a.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(a.p = '');
	var u = (window['webpackJsonp'] = window['webpackJsonp'] || []),
		s = u.push.bind(u);
	(u.push = t), (u = u.slice());
	for (var i = 0; i < u.length; i++) t(u[i]);
	var f = s;
	o.push([0, 'chunk-vendors']), n();
})({
	0: function (e, t, n) {
		e.exports = n('56d7');
	},
	'0111': function (e, t, n) {
		e.exports = n.p + 'img/11n.b9ee5038.svg';
	},
	'101c': function (e, t, n) {
		e.exports = n.p + 'img/09n.bc016c3b.svg';
	},
	'218e': function (e, t, n) {
		'use strict';
		n('3e49');
	},
	2200: function (e, t, n) {
		e.exports = n.p + 'img/03d.82408b66.svg';
	},
	2908: function (e, t, n) {
		'use strict';
		n('9c1c');
	},
	'2ac9': function (e, t, n) {
		e.exports = n.p + 'img/02n.7c36f2b5.svg';
	},
	'3cbf': function (e, t, n) {
		e.exports = n.p + 'img/13d.10a793eb.svg';
	},
	'3e49': function (e, t, n) {},
	'42b4': function (e, t, n) {},
	5243: function (e, t, n) {
		e.exports = n.p + 'img/11d.42698e35.svg';
	},
	'56d7': function (e, t, n) {
		'use strict';
		n.r(t);
		n('e260'), n('e6cf'), n('cca6'), n('a79d');
		var c = n('7a23'),
			r = { id: 'wrapper' };
		function o(e, t, n, o, a, u) {
			var s = Object(c['k'])('weather'),
				i = Object(c['k'])('date-and-time'),
				f = Object(c['k'])('google-search-bar');
			return (
				Object(c['f'])(),
				Object(c['d'])(
					c['b'],
					{ name: 'fade' },
					{
						default: Object(c['n'])(function () {
							return [
								Object(c['e'])('div', r, [
									Object(c['e'])(s),
									Object(c['e'])(i),
									Object(c['e'])(f),
								]),
							];
						}),
						_: 1,
					}
				)
			);
		}
		var a = Object(c['r'])('data-v-4d759d8e');
		Object(c['h'])('data-v-4d759d8e');
		var u = { class: 'date' },
			s = { class: 'time' },
			i = Object(c['e'])('li', { class: 'seperator' }, ':', -1),
			f = Object(c['e'])('li', { class: 'seperator' }, ':', -1);
		Object(c['g'])();
		var p = a(function (e, t, n, r, o, a) {
				return (
					Object(c['f'])(),
					Object(c['d'])(
						c['a'],
						null,
						[
							Object(c['e'])(
								'h1',
								u,
								Object(c['l'])(r.state.date.date) +
									', ' +
									Object(c['l'])(r.state.date.day) +
									' ' +
									Object(c['l'])(r.state.date.month),
								1
							),
							Object(c['e'])('ul', s, [
								Object(c['e'])(
									'li',
									null,
									Object(c['l'])(r.state.time.hour),
									1
								),
								i,
								Object(c['e'])(
									'li',
									null,
									Object(c['l'])(r.state.time.minute),
									1
								),
								f,
								Object(c['e'])(
									'li',
									null,
									Object(c['l'])(r.state.time.second),
									1
								),
							]),
						],
						64
					)
				);
			}),
			l =
				(n('fb6a'),
				[
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
				]),
			d = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
			],
			b = {
				name: 'DateAndTime',
				setup: function () {
					var e = Object(c['i'])({
						time: { hour: '', minute: '', second: '' },
						date: { date: '', day: '', month: '' },
					});
					function t(e) {
						for (var t = '', n = 0; n < 2; n++) t += '0';
						return (t + e).slice(-2);
					}
					function n() {
						var n = new Date();
						(e.time.hour = ''.concat(t(n.getHours()))),
							(e.time.minute = ''.concat(t(n.getMinutes()))),
							(e.time.second = ''.concat(t(n.getSeconds()))),
							(e.date.date = ''.concat(d[n.getDay()])),
							(e.date.day = ''.concat(n.getDate())),
							(e.date.month = ''.concat(l[n.getMonth()]));
					}
					setInterval(n, 1e3);
					return n(), { state: e };
				},
			};
		n('68eb');
		(b.render = p), (b.__scopeId = 'data-v-4d759d8e');
		var g = b,
			h = (n('9911'), { class: 'searchWrapper' }),
			O = { id: 'googleSearch', onsubmit: 'return false' },
			v = { class: 'searchSuggestions' };
		function j(e, t, n, r, o, a) {
			return (
				Object(c['f'])(),
				Object(c['d'])('div', h, [
					Object(c['e'])('form', O, [
						Object(c['o'])(
							Object(c['e'])(
								'input',
								{
									id: 'googleSearchBar',
									type: 'text',
									autocomplete: 'off',
									placeholder: 'Search here...',
									'onUpdate:modelValue':
										t[1] ||
										(t[1] = function (e) {
											return (r.state.searchText = e);
										}),
									onInput:
										t[2] ||
										(t[2] = function () {
											return (
												r.retrieveQueries &&
												r.retrieveQueries.apply(
													r,
													arguments
												)
											);
										}),
									class: { enabled: r.state.enabled },
									onKeydown: [
										t[3] ||
											(t[3] = Object(c['p'])(
												function () {
													return (
														r.inputDown &&
														r.inputDown.apply(
															r,
															arguments
														)
													);
												},
												['down']
											)),
										t[4] ||
											(t[4] = Object(c['p'])(
												Object(c['q'])(
													function () {
														return (
															r.inputUp &&
															r.inputUp.apply(
																r,
																arguments
															)
														);
													},
													['prevent']
												),
												['up']
											)),
										t[5] ||
											(t[5] = Object(c['p'])(
												function () {
													return (
														r.enterInput &&
														r.enterInput.apply(
															r,
															arguments
														)
													);
												},
												['enter']
											)),
									],
									ref: 'input',
								},
								null,
								34
							),
							[[c['m'], r.state.searchText]]
						),
					]),
					Object(c['e'])('ul', v, [
						(Object(c['f'])(!0),
						Object(c['d'])(
							c['a'],
							null,
							Object(c['j'])(r.state.queries, function (e, t) {
								return (
									Object(c['f'])(),
									Object(c['d'])(
										'li',
										{
											ref: 'arrowKeys',
											key: e.query,
											class: {
												focused: t == r.state.focus,
											},
										},
										[
											Object(c['e'])(
												'a',
												{ href: e.link },
												Object(c['l'])(e.query),
												9,
												['href']
											),
										],
										2
									)
								);
							}),
							128
						)),
					]),
				])
			);
		}
		n('b64b'), n('d3b7'), n('ac1f'), n('5319');
		var m = {
			name: 'GoogleSearch',
			setup: function () {
				var e = Object(c['i'])({
					searchText: '',
					enabled: !1,
					focus: null,
					queries: {},
				});
				function t() {
					(e.focus = null),
						fetch(
							'https://corsanywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=chrome&q='.concat(
								e.searchText
							)
						)
							.then(function (e) {
								return e.json();
							})
							.then(function (t) {
								t = JSON.parse(JSON.stringify(t));
								for (
									var n = {}, c = 0;
									t[1].length < 6 ? c < t[1].length : c < 6;
									c++
								)
									n[c] = {
										query: t[1][c],
										type: t[4]['google:suggesttype'][c],
										link:
											'NAVIGATION' ==
											t[4]['google:suggesttype'][c]
												? t[1][c]
												: 'https://www.google.co.uk/search?q=' +
												  encodeURI(t[1][c]),
									};
								(e.enabled = !!e.searchText.replace(/\s/g, '')
									.length),
									(e.queries = n);
							})
							.catch(function (e) {
								console.error(e);
							});
				}
				function n() {
					e.searchText = e.queries[e.focus].query;
				}
				function r() {
					e.searchText.replace(/\s/g, '').length
						? null == e.focus
							? ((e.focus = 0), n())
							: e.focus < Object.keys(e.queries).length - 1
							? (e.focus++, n())
							: e.focus == Object.keys(e.queries).length - 1 &&
							  ((e.focus = 0), n())
						: (e.focus = null);
				}
				function o() {
					e.searchText.replace(/\s/g, '').length
						? null == e.focus
							? ((e.focus = 0), n())
							: e.focus > 0
							? (e.focus--, n())
							: 0 == e.focus &&
							  ((e.focus = Object.keys(e.queries).length - 1),
							  n())
						: (e.focus = null);
				}
				function a() {
					if (null == e.focus) {
						if (!e.searchText.replace(/\s/g, '').length) return;
						window.open(
							'https://www.google.co.uk/search?q='.concat(
								e.searchText
							),
							'_self'
						);
					} else window.open(e.queries[e.focus].link, '_self');
				}
				return (
					(window.onload = function () {
						document.getElementById('googleSearchBar').focus();
					}),
					{
						state: e,
						retrieveQueries: t,
						inputDown: r,
						inputUp: o,
						enterInput: a,
					}
				);
			},
		};
		n('218e');
		m.render = j;
		var y = m,
			w = (n('a4d3'), n('e01a'), Object(c['r'])('data-v-8551183a'));
		Object(c['h'])('data-v-8551183a');
		var x = { id: 'weather' },
			k = { class: 'icon' },
			q = { class: 'main' },
			S = { class: 'temperature' },
			T = { class: 'description' },
			_ = { class: 'location' };
		Object(c['g'])();
		var I = w(function (e, t, n, r, o, a) {
				return (
					Object(c['f'])(),
					Object(c['d'])('div', x, [
						Object(c['e'])('div', k, [
							Object(c['e'])(
								'img',
								{ src: r.state.weatherOutput.icon },
								null,
								8,
								['src']
							),
						]),
						Object(c['e'])(
							'h2',
							q,
							Object(c['l'])(r.state.weatherOutput.main),
							1
						),
						Object(c['e'])(
							'h2',
							S,
							Object(c['l'])(r.state.weatherOutput.temp) + '°',
							1
						),
						Object(c['e'])(
							'p',
							T,
							Object(c['l'])(r.state.weatherOutput.description),
							1
						),
						Object(c['e'])(
							'p',
							_,
							Object(c['l'])(r.state.weatherOutput.city) +
								', ' +
								Object(c['l'])(r.state.weatherOutput.country),
							1
						),
					])
				);
			}),
			D =
				(n('99af'),
				n('b0c0'),
				{
					name: 'Weather',
					setup: function () {
						var e = Object(c['i'])({
							weatherOutput: {
								city: '',
								country: '',
								temp: '',
								main: '',
								description: '',
								icon: '',
							},
						});
						function t(e) {
							return e.replace(
								/(^\w{1})|(\s+\w{1})/g,
								function (e) {
									return e.toUpperCase();
								}
							);
						}
						function r() {
							fetch(
								'https://api.openweathermap.org/data/2.5/weather?q='
									.concat('Widnes', '&appid=')
									.concat(
										'726d30084c9c84a49cfbe222a43329e8',
										'&units='
									)
									.concat('metric')
							)
								.then(function (e) {
									return e.json();
								})
								.then(function (c) {
									Object.assign(
										e.weatherOutput,
										{ city: c.name },
										{ country: c.sys.country },
										{ temp: Math.floor(c.main.temp) },
										{ main: c.weather[0].main },
										{
											description: t(
												c.weather[0].description
											),
										},
										{
											icon: n('63cb')(
												'./'.concat(
													c.weather[0].icon,
													'.svg'
												)
											),
										}
									);
								})
								.catch(function (e) {
									console.error(e);
								});
						}
						setInterval(r, 3e5);
						return r(), { state: e };
					},
				});
		n('ec2e');
		(D.render = I), (D.__scopeId = 'data-v-8551183a');
		var M = D,
			U = {
				components: { DateAndTime: g, GoogleSearchBar: y, Weather: M },
				setup: function () {},
			};
		n('2908');
		U.render = o;
		var J = U;
		Object(c['c'])(J).mount('#app');
	},
	'5a60': function (e, t, n) {
		e.exports = n.p + 'img/10n.86f986fc.svg';
	},
	'5f82': function (e, t, n) {
		e.exports = n.p + 'img/50n.7f68f0ff.svg';
	},
	'63cb': function (e, t, n) {
		var c = {
			'./01d.svg': 'a6f7',
			'./01n.svg': '76d8',
			'./02d.svg': 'dc1e',
			'./02n.svg': '2ac9',
			'./03d.svg': '2200',
			'./03n.svg': 'be4e',
			'./04d.svg': 'ad1a',
			'./04n.svg': 'd77d',
			'./09d.svg': 'dc5c',
			'./09n.svg': '101c',
			'./10d.svg': 'e903',
			'./10n.svg': '5a60',
			'./11d.svg': '5243',
			'./11n.svg': '0111',
			'./13d.svg': '3cbf',
			'./13n.svg': 'dcf7',
			'./50d.svg': 'f7eb',
			'./50n.svg': '5f82',
		};
		function r(e) {
			var t = o(e);
			return n(t);
		}
		function o(e) {
			if (!n.o(c, e)) {
				var t = new Error("Cannot find module '" + e + "'");
				throw ((t.code = 'MODULE_NOT_FOUND'), t);
			}
			return c[e];
		}
		(r.keys = function () {
			return Object.keys(c);
		}),
			(r.resolve = o),
			(e.exports = r),
			(r.id = '63cb');
	},
	'68eb': function (e, t, n) {
		'use strict';
		n('89aa');
	},
	'76d8': function (e, t, n) {
		e.exports = n.p + 'img/01n.f86c33c4.svg';
	},
	'89aa': function (e, t, n) {},
	'9c1c': function (e, t, n) {},
	a6f7: function (e, t, n) {
		e.exports = n.p + 'img/01d.4b9869a6.svg';
	},
	ad1a: function (e, t, n) {
		e.exports = n.p + 'img/04d.2d0410c5.svg';
	},
	be4e: function (e, t, n) {
		e.exports = n.p + 'img/03n.82408b66.svg';
	},
	d77d: function (e, t, n) {
		e.exports = n.p + 'img/04n.2d0410c5.svg';
	},
	dc1e: function (e, t, n) {
		e.exports = n.p + 'img/02d.3237f7da.svg';
	},
	dc5c: function (e, t, n) {
		e.exports = n.p + 'img/09d.ac93e407.svg';
	},
	dcf7: function (e, t, n) {
		e.exports = n.p + 'img/13n.10a793eb.svg';
	},
	e903: function (e, t, n) {
		e.exports = n.p + 'img/10d.8ea1ac4e.svg';
	},
	ec2e: function (e, t, n) {
		'use strict';
		n('42b4');
	},
	f7eb: function (e, t, n) {
		e.exports = n.p + 'img/50d.493be2a8.svg';
	},
});
//# sourceMappingURL=app.92ef4d9b.js.map
