const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

function createWindow() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 900,
    height: 550,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
  });
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
ipcMain.on("CloseApp", () => {
  app.quit();
});
