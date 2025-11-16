# ChatGPT Enter Key Remap

A simple, lightweight Chrome extension that modifies ChatGPT’s keyboard behavior:
Enter → inserts a newline
Ctrl+Enter → sends the message

This extension exists for people who prefer natural text editing in ChatGPT without accidentally sending half-written messages.

✨ Features
📝 Enter inserts a newline (like any normal text editor)
🚀 Ctrl+Enter sends the message
🔒 Runs only on chatgpt.com — nowhere else
⚡ Ultra-lightweight (tiny code, extremely fast)
🧩 No ads, no tracking, no telemetry
🛡️ 100% privacy-respecting (collects nothing)

## 📦 Installation
### From the Chrome Web Store
Visit this link to enable the Chrome Extension
https://chrome.google.com/webstore/detail/XXXXXXXX

### Manual Installation (Developer Mode)
Download or clone this repository
Open chrome://extensions/
Enable Developer mode (top right)
Click Load unpacked
Select this folder
Done!

## 🛠️ How It Works
This extension injects a small, safe content script into ChatGPT pages:
It listens for key events inside ChatGPT’s text editor
It prevents the default send-on-Enter behavior
It manually inserts a newline when Enter is pressed
It triggers the normal send function when Ctrl+Enter is pressed
All logic runs locally in your browser — nothing is uploaded or transmitted.

## 🔐 Permissions
The extension uses only one permission:
https://chatgpt.com/*
This is required so the script can run on ChatGPT’s message editor.
The extension is deliberately restricted to this domain so that it:
Does not run on any other website
Does not modify any other input fields
Does not affect your browsing experience elsewhere

## 🕵️ Privacy
This extension:
❌ Does not collect data
❌ Does not track usage
❌ Does not send anything to any server
❌ Does not store any information
❌ Does not access your ChatGPT conversations

Read the full Privacy Policy here:
➡️ [https://github.com/GlynDavidson1/chatgpt-ctrlEntSend/blob/main/Privacy%20Policy](Privacy%20Policy)
