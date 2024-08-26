// src/store/rootReducer.ts
import { combineReducers } from 'redux';
//import plantsReducer from './plants/plantsSlice'; // Ajustez le chemin selon l'emplacement de plantsSlice

const rootReducer = combineReducers({
  //plants: plantsReducer,
  // Ajoutez d'autres réducteurs ici si nécessaire
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
