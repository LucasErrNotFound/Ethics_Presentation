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

const linearTimingFunction = (value: number) => value;

export default makeScene2D(function* (view){
	
	const ARISTOTLE_NAME = createRef<Txt>();
	const ARISTOTLE_PICTURE = createRef<Img>();
	const ARISTOTLE_FORMAT = createRef<Node>();

	const NICOMACHEAN_BLOCK = createRef<Rect>();
	const NICOMACHEAN_TEXT = createRef<Txt>();

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
				y={-1500}
			/>

			<Img
				antialiased
				ref={ARISTOTLE_PICTURE}
				src={Aristotle}
				lineWidth={50}
				stroke={BRIGHT_BLUE}
				scale={0.35}
				x={0}
				y={1500}
			/>
		</Node>
	);

	view.add(
		<Rect layout ref={NICOMACHEAN_BLOCK} antialiased stroke={BRIGHT_YELLOW} lineWidth={5} lineHeight={160} x={300}>	
			<Txt
				antialiased
				ref={NICOMACHEAN_TEXT}
				fontSize={120}
				fontFamily={'Fira Code Retina'}
				fill={BRIGHT_AQUA}
				y={0}
			/>
		</Rect>
	);

	yield* beginSlide('Fourth Slide');
	yield* all(
		ARISTOTLE_NAME().position.y(-400, 1, easeInOutCubic),
		ARISTOTLE_PICTURE().position.y(100, 1, easeInOutCubic),
	);

	yield* waitFor(5);

	yield* all(
		ARISTOTLE_FORMAT().scale(0.8, 1, easeInOutCubic),
		ARISTOTLE_FORMAT().position.x(-650, 1, easeInOutCubic),
	);
	yield* waitFor(1);

	yield* NICOMACHEAN_TEXT().text("NICOMACHEAN\n ETHICS", 1);
	yield* waitFor(8);

	yield* all(
		NICOMACHEAN_TEXT().text("VIRTUES", 1),
		NICOMACHEAN_BLOCK().position.y(-400, 1, easeInOutElastic),
	);

	yield* waitFor(3);

});
