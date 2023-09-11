import React from "react";
import {trees, wildlife} from "./parks/RockyMountain";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";


function ColoradoStateParks() {
  console.log(trees); 
  console.log(RMFunctions.trees);
  console.log(parkTrees);

  RMFunctions.wildlife();

  RMFunctions.elevation();

  parkWildlife();

  wildlife();
  howManyParks(); // => "42 parks!" 





  return (
    <div>

      <MesaVerde />
      
    </div>
    // <h1>Colorado State Parks!</h1>;
  )
}

export default ColoradoStateParks;