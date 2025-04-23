const overlayState = (() => {
	const state = { activeOverlayCount: 0 };

	const proxy = new Proxy(state, {
		set: (state, key, value) => {
			state[key as keyof typeof state] = value;
			if (key === 'activeOverlayCount') {
				document.body.style.overflow = value > 0 ? 'hidden' : 'visible';
			}

			return true;
		}
	});

	const addActiveOverlayCount = () => {
		proxy.activeOverlayCount = proxy.activeOverlayCount + 1;
	};
	const minusActiveOverlayCount = () => {
		proxy.activeOverlayCount = Math.max(proxy.activeOverlayCount - 1, 0);
	};

	return {
		count: proxy,
		addActiveOverlayCount,
		minusActiveOverlayCount
	};
})();

export default overlayState;
