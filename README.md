## About The Project

There are many great anti phish discord bots however, I didn't find one that really suited my needs so I created my own to share with you guys. I want to create an anti phish bot so simple it will be so easy to customise for your needs.

Here's why:

- Easy to setup and customise.
- Auto bans the user who posts a scam link whats found in the database.

### Built With

- [node.js](https://nodejs.org/)

## Getting Started

Please follow the steps below to install and run the bot, this will take 5 minutes maximum.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/2cbs/Phisher.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your bot token in `config.json`
   ```json
   { "token": "token here" }
   ```
4. Please customise your embed in `index.js`
   ```
   const embedTitle = 'Server Protection';
   const embedDescription = 'This link has shown up in our database, please do not click it.';
   const embedColor = 'fe4e62';
   ```
5. Start the bot
   ```sh
   npm start
   ```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Discord: Sassy#8099
