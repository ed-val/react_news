import axios from 'axios';
import Helpers from './helpers';

import { BASE_API } from './config';

class Api {

  // async getPokemon(id) {
  //   let result = null;
  //   try {
  //     const resDetails = await axios({
  //       method: 'GET',
  //       url: `${BASE_API}/api/v2/pokemon/${id}`
  //     });

  //     if (!!resDetails.data) {
  //       const resCharacteristics = await axios({
  //         method: 'GET',
  //         url: `${BASE_API}/api/v2/pokemon-species/${resDetails.data.id}`
  //       });
      
  //       const pokemon = Helpers.buildPokemon(
  //         resDetails.data,
  //         resCharacteristics.data
  //       );
  //       result = { error: false, pokemon };
  //     } else {
  //       result = { error: true, errorMsg: 'No hay resultados' };
  //     }
        
  //     } catch (e) {
  //       console.log(e);
  //       if (e.message.match(/Network request failed/)) {
  //         result = { error: true, errorMsg: 'Error al conectarse con el servidor.' };
  //       } else {
  //         // por ahora tratar todos los errores con un mensaje generico
  //         result = { error: true, errorMsg: 'Error al conectarse con el servidor.' };
  //       }
  //     }

  //   return result;
  // }
}

export default new Api();
