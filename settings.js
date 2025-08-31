// settings.js
// Sample settings configuration

const settings = {
  theme: "light",
  language: "en",
  notifications: true
};

function updateSetting(key, value) {
  settings[key] = value;
}

function getSetting(key) {
  return settings[key];
}

// Example usage
updateSetting("theme", "dark");
console.log(getSetting("theme"));
