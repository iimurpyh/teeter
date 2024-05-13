import Idle from './states/idle.js';
import Run from './states/run.js';
import Fall from './states/fall.js';
import Jump from './states/jump.js';

// List of every character state

const PlayerStateMap = {
    idle: Idle,
    run: Run,
    fall: Fall,
    jump: Jump
}

export default PlayerStateMap;