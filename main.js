console.log('Escreva uma palavra e receba seus anagramas');
let ent;
let ana = [];

process.stdin.on('data', function (data) {
    ent = data.toString().trim();
    ent = ent.split('');

    for (i = 0; i < ent.length; i++) {
        for (j = 0; j < ent.length; j++) {
            let aux = ent[i];
            ent[i] = ent[j];
            ent[j] = aux;
            if (!ana.includes(ent)) {
                ana.push(ent.join(''));
                console.log(ent.join(''));
            }
        }

    }


})
