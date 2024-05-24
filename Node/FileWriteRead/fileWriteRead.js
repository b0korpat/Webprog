var fs = require('fs');

function readMusicFile(filePath) {
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
  });
}
function writeMusicFile(filePath, content) {
  
  fs.writeFile(filePath, content, 'utf8', function(err) {
    if (err) throw err;
    console.log('File has been saved!');
  });
}

writeMusicFile('music.txt', 'Az ember végül homokos,\nszomorú, vizes síkra ér,\nszétnéz merengve és okos\nfejével biccent, nem remél.\n\n\nÉn is így próbálok csalás\nnélkül szétnézni könnyedén.\nEzüstös fejszesuhanás\njátszik a nyárfa levelén.\n\n\nA semmi ágán ül szivem,\nkis teste hangtalan vacog,\nköréje gyűlnek szeliden\ns nézik, nézik a csillagok.\n\n\nVas-színű égboltban...\n\n\nVas-színű égboltban forog\na lakkos, hűvös dinamó.\nÓh, zajtalan csillagzatok!\nSzikrát vet fogam közt a szó - -\n\n\nBennem a mult hull, mint a kő\naz űrön által hangtalan.\nElleng a néma, kék idő.\nKard éle csillan: a hajam - -\n\n\nBajszom mint telt hernyó terül\nelillant ízű számra szét.\nFáj a szívem, a szó kihül.\nDehát kinek is szólanék - -');
readMusicFile('music.txt');