# Spotify Clone 🎵

A fully functional web-based Spotify clone built with HTML, CSS, and JavaScript that provides a complete music streaming experience with authentication, local file playback, and a modern UI.

## ✨ Features

### 🎵 Music Playback
- **Local MP3 Playback**: Play music files from your local `songs/` folder
- **Full Audio Controls**: Play/Pause, Previous, Next, Volume control
- **Progress Tracking**: Real-time progress bar with seeking functionality
- **Time Display**: Current time and total duration display
- **Auto-play Next**: Automatically plays the next song when current song ends

### 🎨 User Interface
- **Spotify-like Design**: Authentic dark theme matching Spotify's aesthetic
- **Responsive Layout**: Works on desktop and mobile devices
- **Waveform Animation**: Dynamic audio visualization
- **Currently Playing Highlight**: Visual indication of the active song
- **Library Management**: Organized song list with metadata

### 🔐 Authentication System
- **Login/Signup**: Complete authentication flow with form validation
- **Session Management**: Persistent login state using localStorage
- **Secure Access**: Protected routes requiring authentication
- **Logout Functionality**: Secure session termination

### 📱 User Experience
- **Song Metadata**: Display song title, artist, and album information
- **Volume Control**: Adjustable volume slider with visual feedback
- **Keyboard Shortcuts**: Spacebar for play/pause functionality
- **Error Handling**: Graceful handling of audio loading errors

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (required for audio playback)

### Installation

1. **Clone or Download** the project files
2. **Navigate** to the project directory:
   ```bash
   cd PROJECTS/Spotify
   ```

3. **Start a local server** using one of these methods:

   **Using Python:**
   ```bash
   python -m http.server 8000
   ```

   **Using Node.js:**
   ```bash
   npx http-server
   ```

   **Using VS Code Live Server:**
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

4. **Open your browser** and navigate to:
   - `http://localhost:8000` (Python)
   - `http://localhost:8080` (Node.js)
   - `http://localhost:5500` (Live Server)

5. **Login** using the authentication system to access the music player

## 📁 Project Structure

```
Spotify/
├── index.html                    # Main application interface
├── script.js                     # Core JavaScript functionality
├── style.css                     # Main stylesheet
├── utility.css                   # Utility classes and animations
├── favicon.ico                   # Application icon
├── hello.html                    # Welcome page
├── README.md                     # This documentation
├── songs/                        # Music files directory
│   ├── Sun Saathiya - Full Song - Disney's ABCD 2  Varun Dhawan - Shraddha Kapoor  Sachin - Jigar - Zee Music Company.mp3
│   ├── Gori Hai Kalaiyan - Mere Husband Ki Biwi 320 Kbps.mp3
│   ├── Dil Diyan Gallan - Tiger Zinda Hai 320 Kbps.mp3
│   ├── Achyutam-Keshavam-Shreya-Ghoshal.mp3
│   └── Dhun_320(PagaiWorld.com).mp3
├── img/                          # Icons and images
│   ├── logo.svg
│   ├── play.svg
│   ├── pause.svg
│   ├── music.svg
│   └── [other UI icons]
└── Spotify Login_SignUp/         # Authentication system
    ├── login.html                # Login page
    ├── style.css                 # Login page styles
    ├── app.js                    # Authentication logic
    └── img/                      # Login page images
```

## 🎵 Adding New Songs

To add new songs to your music library:

1. **Place MP3 files** in the `songs/` folder
2. **Update the metadata** in `script.js` by adding entries to the `songMetadata` array:

```javascript
const songMetadata = [
  // ... existing songs ...
  {
    filename: "your-song-file.mp3",
    title: "Song Title",
    artist: "Artist Name"
  }
];
```

### Current Song Library
- **Sun Saathiya** - Sachin-Jigar, Priya Saraiya
- **Gori Hai Kalaiyan** - Arijit Singh
- **Dil Diyan Gallan** - Atif Aslam
- **Achyutam Keshavam** - Shreya Ghoshal
- **Dhun (From 'Saiyaara')** - Arijit Singh

## 🛠️ Technical Details

### Browser Compatibility
- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Required Features**: ES6+, HTML5 Audio API, CSS3 animations
- **Local Storage**: For session management and user preferences

### Audio Format Support
- **Primary**: MP3 files
- **File Size**: Optimized for files under 50MB
- **Bitrate**: Supports various bitrates (128kbps - 320kbps)

### Security Considerations
- **Local Storage**: User credentials stored locally (for demo purposes)
- **File Access**: Limited to local files in the songs directory
- **CORS**: Requires local server for audio playback

## 🎯 Usage Instructions

### Basic Controls
- **Play/Pause**: Click the play button or press Spacebar
- **Next/Previous**: Use the navigation buttons
- **Volume**: Adjust using the volume slider
- **Seek**: Click on the progress bar to jump to specific time
- **Logout**: Use the logout button to end your session

### Library Navigation
- **Browse Songs**: Scroll through the library section
- **Play Song**: Click "Play Now" next to any song
- **Currently Playing**: Highlighted song shows active status

## 🔧 Troubleshooting

### Common Issues

**Audio won't play:**
- Ensure you're running through a local server (not file:// protocol)
- Check that MP3 files are in the correct `songs/` folder
- Verify browser supports HTML5 Audio API

**Login issues:**
- Clear browser cache and localStorage
- Ensure JavaScript is enabled
- Check browser console for error messages

**Styling problems:**
- Clear browser cache
- Ensure all CSS files are loading properly
- Check for CSS conflicts with browser extensions

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding new features
- Improving the UI/UX
- Fixing bugs
- Adding more songs to the library
- Enhancing the authentication system

## 📄 License

This project is for educational purposes. Please respect copyright laws when adding music files.

## 🙏 Acknowledgments

- Inspired by Spotify's design and functionality
- Built with vanilla HTML, CSS, and JavaScript
- Icons and UI elements designed for educational purposes

---

**Enjoy your music! 🎶**

*Built with ❤️ for music lovers* 