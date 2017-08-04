const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const ipcMain = electron.ipcMain;

let mainWindow;

function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 900,
		height: 475
	});

	mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Uncomment to open dev tools (Inspect Element) automatically
	// mainWindow.webContents.openDevTools();

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
	if (mainWindow === null) createWindow();
});

ipcMain.on('renderData', function(event, arg) {
	dataWindow = new BrowserWindow({
		width: 1000,
		height: 500
	});
	dataWindow.loadURL(`file://${ __dirname}/data.html`);

	dataWindow.on('closed', function() {
		dataWindow = null;
	});
});
