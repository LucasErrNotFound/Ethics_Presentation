import {makeProject} from '@motion-canvas/core';

import main from './scenes/main?scene';
import testing from './scenes/testing?scene';
import './global.css';

export default makeProject({
  scenes: [main, testing],
});
