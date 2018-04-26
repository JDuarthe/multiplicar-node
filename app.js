const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');
let comando = argv._[0];
console.log(argv);
switch (comando) {
  case 'listar':
      console.log('listar');
      listarTabla(argv.base,argv.limite);
    break;
  case 'crear':
      console.log('crear');
      crearArchivo(argv.base,argv.limite)
        .then( archivo => console.log(`El nombre del archivo es ${colors.red(archivo)}`))
        .catch(error => console.log(error));
    break;
  default:
    console.log('Comando no reconocido');
}
