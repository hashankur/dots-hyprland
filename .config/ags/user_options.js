const userConfigOptions = {
  // For every option, see ~/.config/ags/modules/.configuration/user_options.js
  // (vscode users ctrl+click this: file://./modules/.configuration/user_options.js)
  // (vim users: `:vsp` to split window, move cursor to this path, press `gf`. `Ctrl-w` twice to switch between)
  //   options listed in this file will override the default ones in the above file
  // Here's an example
  keybinds: {
    sidebar: {
      pin: "Ctrl+p",
      nextTab: "Ctrl+Page_Down",
      prevTab: "Ctrl+Page_Up",
    },
  },
  sidebar: {
    imageAllowNsfw: true,
  },
  time: {
    // See https://docs.gtk.org/glib/method.DateTime.format.html
    // Here's the 12h format: "%I:%M%P"
    // For seconds, add "%S" and set interval to 1000
    format: "%I:%M %p",
    interval: 5000,
    dateFormatLong: "%a, %d %b", // On bar
    dateInterval: 5000,
    dateFormat: "%d/%m", // On notif time
  },
  icons: {
    substitutions: {
      "code-url-handler": "vscode",
    },
  },
};

export default userConfigOptions;
