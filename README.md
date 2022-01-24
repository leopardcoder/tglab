# tglab

This API designed to get list of files from specified path.
API is running on a specified port.
PATH and PORT variables should be configured in .env file.

Endpoinst of API are: 
/list/ - provides a JSON object of files in a path.
/scan/ - provides an updated JSON object of a files in a path.
/download-state/ - provides object of files in a path.

Libraries: Node.js, Express.Js, Dotenv, Redux, Lodash, Fs

Instalation: npm install

To run a project on windows: npm run start-win. 
On Unix/Max - npm run start-unix.
