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
import Eudaimonist from "/src/scenes/WellBeing.png";
import Target_Center from "/src/scenes/Target.svg";
import Platonic from "/src/scenes/Wisdom.png";
import Agent from "/src/scenes/FreeWill.png";

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
	
	const FORMS_OF_VIRTUE = createRef<Txt>();

	const CAMERA_2 = createRef<CameraView>();
	const VIRTUE_FORMAT = createRef<Node>();
	const VIRTUE_BLOCK = createRef<Rect>();
	const VIRTUE_TEXT = createRef<Txt>();

	const PRACTICAL_BLOCK = createRef<Rect>();
	const PRACTICAL_TEXT = createRef<Txt>();

	const EUDAIMONIST_FORMAT = createRef<Node>();
	const EUDAIMONIST_IMG = createRef<Img>();
	const EUDAIMONIST_TEXT = createRef<Txt>();

	const AGENT_FORMAT = createRef<Node>();
	const AGENT_IMG = createRef<Img>();
	const AGENT_TEXT = createRef<Txt>();

	const TARGET_FORMAT = createRef<Node>();
	const TARGET_IMG = createRef<Img>();
	const TARGET_TEXT = createRef<Txt>();

	const PLATONIC_FORMAT = createRef<Node>();
	const PLATONIC_IMG = createRef<Img>();
	const PLATONIC_TEXT = createRef<Txt>();

	const EUDAIMONIST_EXP = createRef<Txt>();
	const AGENT_EXP = createRef<Txt>();
	const TARGET_EXP = createRef<Txt>();
	const PLATONIC_EXP = createRef<Txt>();

	view.add(
		<Txt
			antialiased={true}
			ref={FORMS_OF_VIRTUE}
			fontSize={150}
			fontFamily={'Fira Code Retina'}
			fill={BRIGHT_YELLOW}
		/>
	);

	view.add(
		<CameraView ref={CAMERA_2} width={"100%"} height={"100%"}>
			<Node ref={VIRTUE_FORMAT}>
				<Rect layout ref={VIRTUE_BLOCK} antialiased={true} stroke={BRIGHT_RED} padding={5} lineWidth={8} x={-2000}>
					<Txt
						antialiased={true}
						ref={VIRTUE_TEXT}
						fontFamily={'Fira Code Retina'}
						fontSize={150}
							fill={BRIGHT_YELLOW}
						text={"VIRTUE"}
					/>
				</Rect>
	
				<Rect layout ref={PRACTICAL_BLOCK} antialiased={true} stroke={BRIGHT_RED} padding={5} lineWidth={8} x={2000}>
					<Txt
						antialiased={true}
						ref={PRACTICAL_TEXT}
						fontFamily={'Fira Code Retina'}
						fontSize={150}
						textAlign={"center"}
						fill={BRIGHT_YELLOW}
						text={"PRACTICAL\nWISDOM"}
					/>
				</Rect>
			</Node>
		</CameraView>
	);

	view.add(
		<Node ref={EUDAIMONIST_FORMAT} x={-2000}>
			<Img
				antialiased={true}
				ref={EUDAIMONIST_IMG}
				src={Eudaimonist}
				scale={0.7}
				y={-100}>

				<Txt
					antialiased={true}
					ref={EUDAIMONIST_TEXT}
					fontSize={280}
					fontFamily={'Fira Code Retina'}
					fontStyle={"italic"}
					fill={BRIGHT_GREEN}
					text={"EUDAIMONIST"}
					y={600}
				/>
			</Img>
		</Node>
	);

	view.add(
		<Node ref={AGENT_FORMAT} x={2000}>
			<Img
				antialiased={true}
				ref={AGENT_IMG}
				src={Agent}
				scale={0.7}
				y={-200}>

				<Txt
					antialiased={true}
					ref={EUDAIMONIST_TEXT}
					fontSize={280}
					fontFamily={'Fira Code Retina'}
					fontStyle={"italic"}
					fill={BRIGHT_GREEN}
					text={"AGENT-BASED"}
					y={750}
				/>
			</Img>
		</Node>
	);

	view.add(
		<Node ref={TARGET_FORMAT} y={2000}>
			<Img
				antialiased={true}
				ref={TARGET_IMG}
				src={Target_Center}
				scale={1}
				y={-200}>

				<Txt
					antialiased={true}
					ref={TARGET_TEXT}
					fontSize={180}
					fontFamily={'Fira Code Retina'}
					fontStyle={"italic"}
					fill={BRIGHT_GREEN}
					text={"TARGET-CENTERED"}
					y={520}
				/>
			</Img>
		</Node>
	);

	view.add(
		<Node ref={PLATONIC_FORMAT} y={-2000}>
			<Img
				antialiased={true}
				ref={PLATONIC_IMG}
				src={Platonic}
				scale={0.35}
				y={-150}>

				<Txt
					antialiased={true}
					ref={PLATONIC_TEXT}
					fontSize={550}
					fontFamily={'Fira Code Retina'}
					fontStyle={"italic"}
					fill={BRIGHT_GREEN}
					text={"PLATONISTIC"}
					y={1350}
				/>
			</Img>
		</Node>
	);

	view.add(
		<Txt
			antialiased={true}
			ref={EUDAIMONIST_EXP}
			fontSize={80}
			fontFamily={'Fira Code Retina'}
			lineHeight={120}
			fill={BRIGHT_AQUA}
			text={'A moral philosophy that\n defines right action as\n that which leads to the\n "well-being" of the\n individual, thus holding\n "well-being" as having\n essential value.'}
			opacity={0}
			x={350}
		/>
	);

	yield* beginSlide('Eight Slide');
	yield* waitFor(1);
	yield* FORMS_OF_VIRTUE().text("Forms of Virtue", 1);
	yield* waitFor(2);

	yield* all(
		FORMS_OF_VIRTUE().text("", 0.5),
		VIRTUE_BLOCK().position.x(-600, 1, easeInOutCubic),
	);

	yield* PRACTICAL_BLOCK().position.x(450, 1, easeInOutCubic);
	yield* waitFor(1);
	yield* CAMERA_2().zoomOnto(VIRTUE_BLOCK(), 1, 100),
	yield* waitFor(6);
	yield* CAMERA_2().zoomOnto(PRACTICAL_BLOCK(), 1, 100),
	yield* waitFor(9);

	yield* CAMERA_2().reset(1);

	yield* all(
		VIRTUE_BLOCK().position.x(-2000, 1, easeInOutCubic),
		PRACTICAL_BLOCK().position.x(2000, 1, easeInOutCubic),
		FORMS_OF_VIRTUE().text("Forms of Virtue", 1),
	);

	yield* waitFor(20);		
	yield* FORMS_OF_VIRTUE().text("", 1);

	yield* beginSlide('Ninth Slide');

	yield* waitFor(1);
	yield* EUDAIMONIST_FORMAT().position.x(0, 1, easeInOutCubic);
	yield* waitFor(1);

	yield* all(
		EUDAIMONIST_FORMAT().position.x(-2000, 1, easeInOutCubic),
		AGENT_FORMAT().position.x(0, 1, easeInOutCubic),
	);
	yield* waitFor(1);

	yield* all(
		AGENT_FORMAT().position.x(2000, 1, easeInOutCubic),
		TARGET_FORMAT().position.y(0, 1, easeInOutCubic),
	);
	yield* waitFor(1);

	yield* all(
		TARGET_FORMAT().position.y(2000, 1, easeInOutCubic),
		PLATONIC_FORMAT().position.y(0, 1, easeInOutCubic),
	);
	yield* waitFor(3);

	yield* all(
		PLATONIC_FORMAT().position.y(-2000, 1, easeInOutCubic),
		EUDAIMONIST_FORMAT().position.x(-610, 1, easeInOutCubic),
		EUDAIMONIST_FORMAT().scale(0.51, 1, easeInOutCubic),
		EUDAIMONIST_EXP().opacity(1, 1),
	);
	yield* waitFor(25);

	yield* all(
		EUDAIMONIST_FORMAT().position.x(-2000, 1, easeInOutCubic),
		EUDAIMONIST_EXP().position.x(-350, 1),
		EUDAIMONIST_EXP().text(`Defines moral\n concepts such\n as duties, right/wrong.\n acts, good/bad\n ends in terms\n of the motives\n or dispositions\n of agents.`, 1),
		AGENT_FORMAT().position.x(350, 1, easeInOutCubic),
		AGENT_FORMAT().position.y(200, 1, easeInOutCubic),
		AGENT_FORMAT().scale(0.7, 1),
	);
	yield* waitFor(25);

	yield* all(
		AGENT_FORMAT().position.x(2000, 1, easeInOutCubic),
		EUDAIMONIST_EXP().position.x(100, 1),
		EUDAIMONIST_EXP().position.y(250, 1),
		EUDAIMONIST_EXP().text(`It takes the virtues themselves\n as the basic, and focuses more\n on how one can have a virtue.`, 1),
		TARGET_FORMAT().scale(0.65, 1),
		TARGET_FORMAT().position.x(-400, 1, easeInOutCubic),
		TARGET_FORMAT().position.y(-230, 1, easeInOutCubic),
	);
	yield* waitFor(25);

	yield* all(
		TARGET_FORMAT().position.y(-2000, 1, easeInOutCubic),
		PLATONIC_FORMAT().scale(0.8, 1),
		PLATONIC_FORMAT().position.x(300, 1, easeInOutCubic),
		PLATONIC_FORMAT().position.y(200, 1, easeInOutCubic),

		EUDAIMONIST_EXP().position.x(-350, 1),
		EUDAIMONIST_EXP().position.y(-200, 1),
		EUDAIMONIST_EXP().text(`“The good” is born of\n knowledge and “evil”\n is born of lack of\n knowledge.`, 1),
	);
	yield* waitFor(25);

	yield* all(
		EUDAIMONIST_EXP().text(``, 1),
		PLATONIC_FORMAT().position.y(2000, 1, easeInOutCubic),
	);
});
