const {app, Menu, Tray} = require("electron")
const path = require("path")

const traypath = path.join(__static,"./static/weather1.png")
function setTray(tray, mainWindow) {

  tray = new Tray(traypath)
  tray.setToolTip("This is cool")
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "退出", 
      role: "quit"

    },
  ])



  tray.setContextMenu(contextMenu)
  // const contextMenu = Menu.buildFromTemplate([])


  // tray.setContextMenu(contextMenu)

  // tray.on("click", function() {
  //   if (mainWindow.isFocused()) {

  //   } else {
  //     mainWindow.show()
  //   }
  // })
  // tray.on("click", (event, bounds, position) => {
    
  // });

}

module.exports = setTray