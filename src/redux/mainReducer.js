import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2102444Reducer from '../features/SignIn2102444/redux/reducers'
import SignIn2102430Reducer from '../features/SignIn2102430/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2102444: SignIn2102444Reducer,
SignIn2102430: SignIn2102430Reducer,

});