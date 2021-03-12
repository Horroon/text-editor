import React from "react";
import CustomEditor  from "./components/custom-editor/index";
import { Provider } from 'react-redux';
import {store} from "./models/index";

const App = ()=><Provider store={store}> <CustomEditor /></Provider>;


export default App;
