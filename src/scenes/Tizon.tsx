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
import Thomas from "/src/scenes/Thomas.png";
import Aristotle from "/src/scenes/Aristotle_Pic.png";
import Heaven from "/src/scenes/Heaven.png";
import Hidilyn from "/src/scenes/Hidilyn.png";

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

	const THOMAS_NAME = createRef<Txt>();
	const THOMAS_PICTURE = createRef<Img>();
	const THOMAS_FORMAT = createRef<Node>();

	const THOMAS_PHILOSOPHY_1 = createRef<Txt>();

	const CAMERA_1 = createRef<CameraView>();
	const THE_NATURAL_LAW_FORMAT = createRef<Node>();
	const THE_NATURAL_LAW_BLOCK = createRef<Rect>();
	const THE_NATURAL_LAW = createRef<Txt>();

	const LAWS_FORMAT = createRef<Node>();
	const ETERNAL_BLOCK = createRef<Rect>();
	const ETERNAL_LAW = createRef<Txt>();
	const Hidilyn_Diaz = createRef<Img>();

	const NATURAL_BLOCK = createRef<Rect>();
	const NATURAL_LAW = createRef<Txt>();

	const HUMAN_BLOCK = createRef<Rect>();
	const HUMAN_LAW = createRef<Txt>();

	const DIVINE_BLOCK = createRef<Rect>();
	const DIVINE_LAW = createRef<Txt>();

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

	view.add(
		<Node ref={THOMAS_FORMAT} x={1500}>
			<Txt
				antialiased={true}
				ref={THOMAS_NAME}
				text={'THOMAS AQUINAS'}
				fontSize={120}
				fontFamily={'Fira Code Retina'}
				fill={BRIGHT_YELLOW}
				x={0}
				y={-400}
			/>

			<Img
				antialiased
				ref={THOMAS_PICTURE}
				src={Thomas}
				lineWidth={20}
				stroke={BRIGHT_BLUE}
				scale={0.75}
				x={0}
				y={100}
			/>
		</Node>
	);

	view.add(
		<Txt
			antialiased={true}
			ref={THOMAS_PHILOSOPHY_1}
			fontSize={56}
			fontFamily={'Fira Code Retina'}
			fill={BRIGHT_AQUA}
			text={"- According to Aquinas, every task\n has a purpose, and enjoyment is the\n highest goal. He declared that the\n souls of the blessed in Heaven, or\n beatitude with God, are the only\n places where true happiness can be\n found."}
			x={-350}
			y={100}
			opacity={0}
		/>
	);

	view.add(
		<Node ref={THE_NATURAL_LAW_FORMAT} x={0} y={2000}>
			<Rect layout 
				antialiased={true}
				ref={THE_NATURAL_LAW_BLOCK}
				stroke={BRIGHT_YELLOW}
				lineWidth={8}>

				<Txt
					antialiased={true}
					ref={THE_NATURAL_LAW}
					fontFamily={'Fira Code Retina'}
					fontSize={150}
					fill={BRIGHT_AQUA}
					padding={5}
					text={"NATURAL LAW"}
				/>
			</Rect>	
		</Node>
	);

	view.add(
		<Node ref={LAWS_FORMAT} x={0} y={50} opacity={0}>
			<CameraView ref={CAMERA_1} width={"100%"} height={"100%"}>
				<Rect layout ref={ETERNAL_BLOCK} stroke={BRIGHT_YELLOW} lineWidth={5} antialiased={true} x={-550}>
					<Txt
						antialiased={true}
						ref={ETERNAL_LAW}
						fontSize={100}
						fontFamily={'Fira Code Retina'}
						fill={BRIGHT_PURPLE}
						text={"ETERNAL LAW"}
						padding={10}
					/>
				</Rect>

				<Rect layout ref={NATURAL_BLOCK} stroke={BRIGHT_YELLOW} lineWidth={5} antialiased={true} x={550}>
					<Txt
						antialiased={true}
						ref={NATURAL_LAW}
						fontSize={100}
						fontFamily={'Fira Code Retina'}
						fill={BRIGHT_PURPLE}
						text={"NATURAL LAW"}
						padding={10}
					/>
				</Rect>

				<Rect layout ref={HUMAN_BLOCK} stroke={BRIGHT_YELLOW} lineWidth={5} antialiased={true} x={-550} y={350}>
					<Txt
						antialiased={true}
						ref={HUMAN_LAW}
						fontSize={100}
						fontFamily={'Fira Code Retina'}
						fill={BRIGHT_PURPLE}
						text={"HUMAN LAW"}
						padding={10}
					/>
				</Rect>
				
				<Rect layout ref={DIVINE_BLOCK} stroke={BRIGHT_YELLOW} lineWidth={5} antialiased={true} x={550} y={350}>
					<Txt
						antialiased={true}
						ref={DIVINE_LAW}
						fontSize={100}
						fontFamily={'Fira Code Retina'}
						fill={BRIGHT_PURPLE}
						text={"DIVINE LAW"}
						padding={10}
					/>
				</Rect>
			</CameraView>
		</Node>
	);

	view.add(
		<Img
			ref={Hidilyn_Diaz}
			src={Hidilyn}
			stroke={BRIGHT_RED}
			lineWidth={5}
			scale={0}
			opacity={0}
		/>
	);

	yield* beginSlide('Fifth Slide');
	yield* all(
		ARISTOTLE_FORMAT().position.x(-1500, 1, easeInOutCubic),
		THOMAS_FORMAT().position.x(0, 1, easeInOutCubic),
	);
	yield* waitFor(10);

	yield* all(
		THOMAS_FORMAT().scale(0.75, 1, easeInOutCubic),
		THOMAS_FORMAT().position.x(550, 1, easeInOutCubic),
		THOMAS_PHILOSOPHY_1().opacity(1, 1),
	);

	yield* waitFor(30);

	yield* all(
		THOMAS_PHILOSOPHY_1().opacity(0, 0.5),
		THOMAS_FORMAT().position.x(0, 1, easeInOutCubic),
	);

	yield* all(
		THOMAS_FORMAT().position.y(-150, 1, easeInOutCubic),
		THE_NATURAL_LAW_FORMAT().position.y(400, 1, easeInOutCubic),
	);
	yield* waitFor(15);

	yield* all(
		THOMAS_FORMAT().position.y(-1500, 1, easeInOutCubic),
		THE_NATURAL_LAW_FORMAT().position.y(-430, 1, easeInOutCubic),
	);

	yield* LAWS_FORMAT().opacity(1, 1);
	yield* waitFor(3);

	yield* CAMERA_1().zoomOnto(ETERNAL_BLOCK(), 1, 100, easeInOutCubic);
	yield* waitFor(12);

	yield* all(
		ETERNAL_BLOCK().opacity(0.1, 0.5),
		THE_NATURAL_LAW_FORMAT().opacity(0.1, 0.5),
		Hidilyn_Diaz().opacity(1, 1),
		Hidilyn_Diaz().scale(3, 1, easeInOutCubic),
	);
	yield* waitFor(10);

	yield* all(
		ETERNAL_BLOCK().opacity(1, 0.5),
		THE_NATURAL_LAW_FORMAT().opacity(1, 0.5),
		Hidilyn_Diaz().opacity(0, 0.5),
		Hidilyn_Diaz().scale(0, 0.5, easeInOutCubic),
	);
	yield* waitFor(8);
	
	yield* CAMERA_1().zoomOnto(NATURAL_BLOCK(), 1, 100, easeInOutCubic);


	yield* CAMERA_1().zoomOnto(HUMAN_BLOCK(), 1, 100, easeInOutCubic);


	yield* CAMERA_1().zoomOnto(DIVINE_BLOCK(), 1, 100, easeInOutCubic);

	yield* CAMERA_1().reset(1);
	yield* waitFor(1);
	
	yield* all(
		THE_NATURAL_LAW_FORMAT().opacity(0, 1),
		LAWS_FORMAT().opacity(0, 1),
	);

	yield* waitFor(5);
});
