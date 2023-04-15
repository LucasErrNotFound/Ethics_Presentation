import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {createSignal} from "@motion-canvas/core/lib/signals";
import {Txt, Rect, Line, Circle, Spline, Knot, Img, Polygon, Node} from '@motion-canvas/2d/lib/components';
import {beginSlide, createRef, makeRef, range} from '@motion-canvas/core/lib/utils';
import {waitFor, waitUntil, all} from '@motion-canvas/core/lib/flow';
import {easeInOutCubic, easeOutCubic, easeInCubic, easeInOutElastic, linear} from '@motion-canvas/core/lib/tweening';
import {Vector2, Color} from '@motion-canvas/core/lib/types';
import {Gradient} from '@motion-canvas/2d/lib/partials';
import {CameraView} from "@ksassnowski/motion-canvas-camera";
import {Gear, StrutConfig} from '@jtstrader/motion-canvas-components';
import courage from "/src/scenes/Courage.png";
import Aristotle from "/src/scenes/Aristotle_Pic.png";

const BRIGHT_RED = "#fb4934"
const BRIGHT_GREEN = "#b8bb26"
const BRIGHT_YELLOW = "#fabd2f"
const BRIGHT_BLUE = "#83a598"
const BRIGHT_PURPLE = "#d3869b"
const BRIGHT_AQUA = "#8ec07c"
const BRIGHT_ORANGE = "#fe8019"
const WHITE = "#fff"
const GRUVBOX_DARK = "#1d2021"


export default makeScene2D(function* (view){

	const ARISTOTLE_NAME = createRef<Txt>();
	const ARISTOTLE_PICTURE = createRef<Img>();
	const ARISTOTLE_FORMAT = createRef<Node>();

	view.add(
		<Node ref={ARISTOTLE_FORMAT}>
			<Txt
				antialiased
				ref={ARISTOTLE_NAME}
				text={'ARISTOTLE'}
				fontSize={120}
				fontFamily={'Fira Code Retina'}
				fill={BRIGHT_YELLOW}
				x={0}
				y={-400}
			/>

			<Img
				antialiased
				ref={ARISTOTLE_PICTURE}
				src={Aristotle}
				lineWidth={50}
				stroke={BRIGHT_BLUE}
				scale={0.35}
				x={0}
				y={100}
			/>
		</Node>
	);

	yield* beginSlide('Fifth Slide');
	yield* waitFor(10);
});
