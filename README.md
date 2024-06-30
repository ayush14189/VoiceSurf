# VoiceSurf - Empower Your Web Experience with Voice Control

VoiceSurf is a Chrome extension designed to help physically disabled users navigate the web using voice commands. With simple voice instructions, users can scroll, click links, and navigate to different URLs, making web browsing more accessible and convenient.

## Features

- **Voice Commands**: Control your browsing experience with voice commands such as "scroll down," "scroll up," "click," and "go to [URL]."
- **Easy to Use**: Simple interface to start voice recognition and navigate the web hands-free.
- **Continuous Listening**: The extension continuously listens for commands, making it easy to control the browser without repeated manual activation.

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/ayush14189/VoiceSurf.git
    ```

2. **Navigate to the Directory**

    ```bash
    cd VoiceSurf
    ```

3. **Load the Extension in Chrome**

    - Open Chrome and go to `chrome://extensions/`.
    - Enable "Developer mode" by toggling the switch in the top right corner.
    - Click on the "Load unpacked" button and select the `VoiceSurf` directory.

## Usage

1. Click on the VoiceSurf icon in the Chrome toolbar to open the popup.
2. Click the "Start Listening" button to begin voice recognition.
3. Use voice commands to control your browser:
    - **"Scroll down"**: Scroll the page down.
    - **"Scroll up"**: Scroll the page up.
    - **"Click [element description]"**: Click a link or button with the specified description.
    - **"Go to [URL]"**: Navigate to the specified URL.

## Development

### File Structure

- `manifest.json`: Defines the extension and its permissions.
- `popup.html`: The HTML file for the extension's popup interface.
- `popup.js`: JavaScript file for the popup interface logic.
- `background.js`: Background script handling speech recognition and voice commands.
- `icons/`: Directory containing the extension icons.

### Icons

- `icons/icon16.png`: 16x16 pixels icon used in the browser toolbar.
- `icons/icon48.png`: 48x48 pixels icon used in the Extensions page.
- `icons/icon128.png`: 128x128 pixels icon used on the Chrome Web Store.

### Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please create an issue or submit a pull request.

## Contact

For questions or feedback, please contact [ayushjain.official07@gmail.com](ayushjain.official07@gmail.com).

---

Thank you for using Voice Navigator! We hope it makes your web browsing experience more accessible and enjoyable.
