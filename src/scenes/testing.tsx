import {Circle, Polygon, Node, Txt, Spline, Rect, Line} from "@motion-canvas/2d/lib/components";
import {makeScene2D} from "@motion-canvas/2d/lib/scenes";
import {waitFor, all, waitUntil} from "@motion-canvas/core/lib/flow";
import {Color} from "@motion-canvas/core/lib/types";
import {createRef, range} from "@motion-canvas/core/lib/utils";
import {CameraView} from "@ksassnowski/motion-canvas-camera";
import {createSignal} from "@motion-canvas/core/lib/signals";
import {easeInOutCubic, easeOutCubic, easeInCubic, easeInOutElastic, tween, map, linear} from '@motion-canvas/core/lib/tweening';
import {Gear, StrutConfig} from '@jtstrader/motion-canvas-components';
import { CircleText } from "../components/CircleText";

const BRIGHT_RED = "#fb4934"
const BRIGHT_GREEN = "#b8bb26"
const BRIGHT_YELLOW = "#fabd2f"
const BRIGHT_BLUE = "#83a598"
const BRIGHT_PURPLE = "#d3869b"
const BRIGHT_AQUA = "#8ec07c"
const BRIGHT_ORANGE = "#fe8019"
const WHITE = "#fff"
const GRUVBOX_DARK = "#1d2021"

export default makeScene2D(function* (view) {
	yield* waitFor(5);
});
