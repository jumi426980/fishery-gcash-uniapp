<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css" />
    <router-view />
  </div>
</template>

<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@font-face {
		font-family: 'Karla';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://www.gcash.com/wp-content/uploads/fusion-gfonts/qkB9XvYC6trAT55ZBi1ueQVIjQTD-JrIH2G7nytkHRyQ8p4wUjm6bnEr.woff2) format('woff2');
		unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: 'Karla';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://www.gcash.com/wp-content/uploads/fusion-gfonts/qkB9XvYC6trAT55ZBi1ueQVIjQTD-JrIH2G7nytkHRyQ8p4wUje6bg.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-display: swap;
		src: url(https://www.gcash.com/wp-content/uploads/fusion-gfonts/pxiByp8kv8JHgFVrLEj6Z11lFc-K.woff2) format('woff2');
		unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF;
	}

	/* latin-ext */
	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-display: swap;
		src: url(https://www.gcash.com/wp-content/uploads/fusion-gfonts/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format('woff2');
		unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-display: swap;
		src: url(https://www.gcash.com/wp-content/uploads/fusion-gfonts/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	.large-button {
		display: block;
		font-weight: 900;
		width: 100%;
		color: #FFF;
		background-color: #297BFA;
		line-height: 300%;
		border-radius: 2em;
	}

	.custom-nav {
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #297BFA;
		color: #FFFFFF;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	}

	.back-btn {
		width: 16px;
		height: 16px;
		margin-left: 10px;
	}

	.title {
		font-size: 18px;
		font-weight: bold;
	}

	.menu-btn {
		width: 16px;
		height: 16px;
		margin-right: 10px;
	}
</style>
