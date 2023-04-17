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
import troll from "/src/scenes/troll_face.png";
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

export default makeScene2D(function* (view){
	
	const VIRTUE_VS_MORALITY_BLOCK = createRef<Rect>();
	const VIRTUE_VS_MORALITY = createRef<Txt>();

	const VIRTUE_EXP = createRef<Txt>();
	const MORALITY_EXP = createRef<Txt>();

	view.add(
		<Rect layout ref={VIRTUE_VS_MORALITY_BLOCK} stroke={BRIGHT_YELLOW} lineWidth={10} padding={20} radius={50} smoothCorners={true} opacity={0}>
			<Txt
				antialiased={true}
				ref={VIRTUE_VS_MORALITY}
				fontSize={150}
				fontFamily={'Fira Code Retina'}
				fill={BRIGHT_PURPLE}
			/>
		</Rect>
	);

	view.add(
		<Txt
			antialiased={true}
			ref={VIRTUE_EXP}
			fontFamily={'Fira Code Retina'}
			fontSize={80}
			fill={BRIGHT_GREEN}
			lineHeight={110}
			x={0}
			y={100}
		/>
	);

	yield* beginSlide('Seventh Slide');

	yield* all(
		VIRTUE_VS_MORALITY_BLOCK().opacity(1, 0.5, easeInCubic),
		VIRTUE_VS_MORALITY().text("VIRTUE VS MORALS", 1),
	);
	yield* waitFor(15);

	yield* all(
		VIRTUE_VS_MORALITY_BLOCK().position.y(-400, 1, easeInOutCubic),
		VIRTUE_VS_MORALITY().text("VIRTUE", 1),
	);

	yield* VIRTUE_EXP().text(`A moral excellence valued as a\n foundation of good moral character.\n It refers to traits or qualities\n that are considered morally good,\n promoting collective and individual\n greatness.`, 3);
	yield* waitFor(20);
	yield* VIRTUE_EXP().text("", 3);

	yield* all(
		VIRTUE_VS_MORALITY().text(`MORALS`, 1),
		VIRTUE_EXP().text(`Refer to proper behavior in society,\n which comes from the Latin term\n "moralis" and pertains to manners.\n It is the order and arrangement\n that we establish through our will to\n control and regulate ourselves.`, 3),
	);
	yield* waitFor(20);		

	yield* all(
		VIRTUE_VS_MORALITY_BLOCK().position.y(0, 1, easeInOutCubic),
		VIRTUE_VS_MORALITY().text(`ETHICS VS MORALS`, 1),
		VIRTUE_EXP().opacity(0, 0.4),
	);

	yield* waitFor(10);		

	yield* all(
		VIRTUE_VS_MORALITY_BLOCK().position.y(-1000, 1, easeInOutCubic),
		VIRTUE_VS_MORALITY_BLOCK().opacity(0, 0.5),
	);
});
