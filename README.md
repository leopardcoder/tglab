# TASK

This API designed to get list of files from specified path.
API is running on a specified port.

PATH and PORT variables should be configured in .env file.

___________________________________

Endpoinst of API are: 

/list/ - provides a JSON object of files in a path.

/scan/ - provides an updated JSON object of a files in a path.

/download-state/ - provides object of files in a path.

___________________________________

Libraries: Node.js, Express.Js, Dotenv, Redux, Lodash, Fs

___________________________________

Instalation: npm install

___________________________________

To run a project run: node server.js

_______________________________
TASK DESCRIPTION:

Atlikinėjant užduotį, naudoti ES6 standartą.

1. Startuojanti programa turi nuskaityti failus nurodytame PATH ir išsaugoti jų sąrašą redux state objekte.
2. Programa turi gebėti grąžinti nuskaitytų failų sąrašą (json pavidalu) iškviečiant ją per naršyklę. (http://127.0.0.1:3000/list)
{
name: 'File_name.jpg',
active: true
}
3. Programai turime turėti galimybę pasakyti nuskaityti dar karta nurodyta PATH ir taip atnaujinti redux state objektą nauju sąrašu, pažymint senus įrašus kurių nebėra "active":false . (http://127.0.0.1:3000/scan)
4. Programai turime turėti galimybę pasakyti, jog ji grąžintu ir atsiųstų visą state objektą. (http://127.0.0.1:3000/download-state)
