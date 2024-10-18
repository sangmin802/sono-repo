const overlayState = (() => {
	const state = { activeOverlayCount: 0 };

	const proxy = new Proxy(state, {
		set: (state, key, value) => {
			state[key as keyof typeof state] = value;

			if (key === 'activeOverlayCount') {
				document.body.style.overflow = value ? 'hidden' : 'visible';
			}

			return true;
		}
	});

	const addActiveOverlayCount = () => {
		state.activeOverlayCount = proxy.activeOverlayCount + 1;
	};
	const minusActiveOverlayCount = () => {
		state.activeOverlayCount = proxy.activeOverlayCount - 1;
	};

	return {
		count: proxy,
		addActiveOverlayCount,
		minusActiveOverlayCount
	};
})();

export default overlayState;
