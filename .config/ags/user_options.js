const userConfigOptions = {
  // For every option, see ~/.config/ags/modules/.configuration/user_options.js (vscode users ctrl+click this file://./modules/.configuration/user_options.js)
  // Options listed in this file will override the default ones in the above file
  // Here's an example
  keybinds: {
    sidebar: {
      pin: "Ctrl+p",
      nextTab: "Ctrl+Page_Down",
      prevTab: "Ctrl+Page_Up",
    },
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
};

export default userConfigOptions;
