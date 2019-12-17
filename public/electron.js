const { BrowserWindow, ipcMain, app } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const GoogleClient = require('./js/GoogleClient');
const { getAuthCodeByInteraction, getAuthUrl } = require('./js/GoogleAuth');

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({
			show: false,
			webPreferences: {
				nodeIntegration: false,
				preload: __dirname + '/preload.js'
			}
	});

	mainWindow.maximize();

	mainWindow.show();

	mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

	ipcMain.on('auth-start', async (e, user_id) => {
		var authWindow = new BrowserWindow({
			width: 400,
			height: 600
		})

		const client = new GoogleClient();
		const auth_url = client.get_auth_uri(user_id);
		
		const code = await getAuthCodeByInteraction(authWindow, auth_url);

		const res = await client.get_access_token(code);

		mainWindow.send('auth-success', res.tokens);

		authWindow.on('closed', () => { authWindow = null });
	})

	mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
