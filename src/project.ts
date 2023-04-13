import {makeProject} from '@motion-canvas/core';

import Lucas from './scenes/Lucas?scene';
import testing from './scenes/testing?scene';
import './global.css';

export default makeProject({
  scenes: [Lucas, testing],
});
