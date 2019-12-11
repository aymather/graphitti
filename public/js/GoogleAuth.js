const getAuthCodeByInteraction = (authWindow, authUrl) => {

	// Load the authorization url
	authWindow.loadURL(authUrl);

	return new Promise((resolve, reject) => {
		const onclosed = () => {
			reject('Auth interaction ended intentionally :(');
		}
		authWindow.on('closed', onclosed);
		authWindow.on('page-title-updated', (event) => {
			const url = new URL(event.sender.getURL());
			if (url.searchParams.get('approvalCode')) {
                authWindow.removeListener('closed', onclosed);
                authWindow.close();
                return resolve(url.searchParams.get('approvalCode'));
            }
            if ((url.searchParams.get('response') || '').startsWith('error=')) {
                authWindow.removeListener('closed', onclosed);
                authWindow.close();
                return reject(url.searchParams.get('response'));
            }
		})
	})
}

module.exports = {
	getAuthCodeByInteraction
}