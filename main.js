const { app, BrowserWindow } = require('electron')

function createWindow () {
    var win = new BrowserWindow({
        width: 1100,
        height: 768,
        icon: __dirname + '/icons/icon.png',
    })

    win.loadURL('https://Interescolare.com')
    win.removeMenu()
}

app.whenReady().then(() => {
    createWindow()
})