import {makeProject} from '@motion-canvas/core';

import Lucas from './scenes/Lucas?scene';
import Melissa from './scenes/Melissa?scene';
import Marion from './scenes/Marion?scene';
import Tizon from './scenes/Tizon?scene';
import Sianrey from './scenes/Sianrey?scene';
import testing from './scenes/testing?scene';
import './global.css';

export default makeProject({
  scenes: [Lucas, Melissa, Marion, Tizon, Sianrey, testing],
});
