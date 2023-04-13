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

const linearTimingFunction = (value: number) => value;

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
	const runcolors = new Color("#1BFFFF");
	const runcolors2 = runcolors.brighten(2);
	const runcolors3 = runcolors.darken(2);

	const CircleRefs = range(3).map(() => createRef<Circle>());
	const Radius = 200;
	const WidthStroke = Radius / 20;

	const bigCircleTextRef = createRef<CircleText>();
	const cleTextRef = createRef<CircleText>();
	const STAR_BRO = createRef<Node>();
	const PolygonRef1 = createRef<Polygon>();
	const PolygonRef2 = createRef<Polygon>();

	const first_small_main_gear = createRef<Gear>();
	const second_small_main_gear = createRef<Gear>();
	const gears = createRef<Node>();

	const EVIL = createRef<Txt>();
	const BAD_VICES = createRef<Txt>();
	const LOST = createRef<Txt>();
	const DELUSION = createRef<Txt>();
	const DELUSION_FORMAT = createRef<Node>();

	const REALITY_BLOCK = createRef<Rect>();
	const FANTASY_BLOCK = createRef<Rect>();

	const ARROW = createRef<Line>();

	const first_small_main_gear_config: StrutConfig = {
		struts: 5,
		widthFactor: 0.5,
		concenctricDiameter: 300,
		concentricThicknessFactor: 2,
	};
	
	const second_small_main_gear_config: StrutConfig = {
		struts: 3,
		widthFactor: 0.5,
		concenctricDiameter: 250,
		concentricThicknessFactor: 2,
	};

	const runeCircleText = "ANGER || SADNESS || HATRED || EVIL ||";

	const overall_sadness_line = createRef<Node>();
	const SADNESS_LINE = createRef<Spline>();
	const progress = createSignal(0);

	view.add(
		<Node shadowBlur={20} ref={STAR_BRO} shadowColor={runcolors3} scale={1} x={0} y={1800}>
			<Polygon
				ref={PolygonRef1}
				width={Radius * 4}
				height={Radius * 4}
				sides={3}
				rotation={0}
				lineWidth={WidthStroke}
				stroke={runcolors3}
			/>
			<Polygon
				ref={PolygonRef2}
				width={Radius * 4}
				height={Radius * 4}
				sides={3}
				rotation={180}
				lineWidth={WidthStroke}
				stroke={runcolors3}
			/>

			{CircleRefs.map((_, i) => {
				return (
					<Circle
						lineWidth={WidthStroke}
						ref={CircleRefs[i]}
						width={(i + 1) * Radius}
						opacity={0.9}
						height={(i + 1) * Radius}
						stroke={runcolors}
					/>
				);
			})}
			<CircleText
				ref={cleTextRef}
				radius={Radius * 0.75}
				fontSize={Radius * 0.2}
				color={runcolors2}
				text={runeCircleText}
			/>
			<CircleText
				ref={bigCircleTextRef}
				radius={Radius * 1.25}
				fontSize={Radius * 0.2}
				color={runcolors2}
				text={runeCircleText + runeCircleText}
			/>
		</Node>
	);

	view.add(
		<Node ref={gears} x={0} y={1800}>
			<Gear 
				ref={first_small_main_gear} 
				diameter={500} 
				teeth={10} 
				x={-250}
				y={0}
				scale={1}
				color={BRIGHT_ORANGE}>
			</Gear>

			<Gear 
				ref={second_small_main_gear} 
				diameter={400} 
				teeth={10} 
				x={250}
				y={180}
				scale={0.9}
				color={BRIGHT_RED}
			/>
		</Node>
	);

	view.add(
		<Txt
			ref={EVIL}
			fontFamily={'Fira Code Retina'}
			fontSize={100}
			text={'EVIL'}
			fill={BRIGHT_PURPLE}
			x={0}
			y={-850}
		/>
	);

	view.add(
		<Txt
			ref={BAD_VICES}
			fontFamily={'Fira Code Retina'}
			fontSize={100}
			text={"BAD VICES"}
			fill={BRIGHT_PURPLE}
			x={0}
			y={-850}
		/>
	);

	view.add(
		<Txt
			ref={LOST}
			fontFamily={'Fira Code Retina'}
			fontSize={100}
			text={"LOST"}
			fill={BRIGHT_PURPLE}
			x={0}
			y={-850}
		/>
	);

	view.add(
		<Node ref={overall_sadness_line} scale={0.8} x={-150} y={1800}>
			<Spline
				ref={SADNESS_LINE}
				lineWidth={10}
				stroke={BRIGHT_AQUA}
					points={[
						[0, 0],
						[-100, -100],
						[10, -400],
						[350, 4],
						[-100, 100],
						[150, -50],
						[250, -300],
						[10, -300],
						[-150, 150],
						[400, -100],
						[450, -500],
						[0, -500],
						[-300, 0],
						[390, 300],
						[10, -500],
						[100, -150],
						[10, -4],
						[350, 4],
						[100, 110],
						[150, -90],
						[10, -320],
						[-90, -345],
					]}
			/>
			<Rect
				size={55}
				fill={BRIGHT_YELLOW}
				position={() => SADNESS_LINE().getPointAtPercentage(progress()).position}
				rotation={() => SADNESS_LINE().getPointAtPercentage(progress()).tangent.degrees}
			/>,
		</Node>,
	);

	view.add(
		<Node ref={DELUSION_FORMAT} x={0} y={0} scale={1}>	
			<Rect layout ref={REALITY_BLOCK}
				lineWidth={5}
				lineHeight={190}
				radius={50}
				stroke={BRIGHT_RED}
				x={1500}>

				<Txt
					fontFamily={'Fira Code Retina'}
					fontSize={150}
					fill={BRIGHT_GREEN}
					text={"REALITY"}
				/>
			</Rect>

			<Rect layout ref={FANTASY_BLOCK}
				lineWidth={5}
				radius={50}
				lineHeight={190}
				stroke={BRIGHT_RED}
				x={-1500}>

				<Txt
					fontFamily={'Fira Code Retina'}
					fontSize={150}
					fill={BRIGHT_GREEN}
					text={"FANTASY"}
				/>
			</Rect>
		</Node>
	);


	yield* EVIL().position.y(-450, 1, easeInOutElastic);
	yield all(
		STAR_BRO().position.y(0, 1, easeInOutElastic),
		cleTextRef().rotation(-360, 5, linearTimingFunction),
		bigCircleTextRef().rotation(360, 5, linearTimingFunction),
		PolygonRef1().rotation(-360 - 180, 10, linearTimingFunction),
		PolygonRef2().rotation(-360, 10, linearTimingFunction),
	);

	yield all(
		STAR_BRO().position.y(0, 1).to(1800, 3, easeInOutElastic),
	);

	yield* waitUntil('EVILGO UP');
	yield* EVIL().position.y(-850, 1, easeInOutElastic);


	yield* waitUntil('STAR_BRO');
	yield *all(
		gears().position.y(0, 1, easeInOutElastic),
		first_small_main_gear().struts(first_small_main_gear_config, 2),
		second_small_main_gear().struts(second_small_main_gear_config, 2),	
		BAD_VICES().position.y(-450, 1, easeInOutElastic),
	);

	for(let r = 1; r <= 10; r++){
		yield* all(
			first_small_main_gear().crank(1),
			second_small_main_gear().crank(1, -1),
		);
	}

	yield* all(
		BAD_VICES().position.y(-850, 1, easeInOutElastic),
		gears().position.y(1800, 1, easeInOutElastic),
		LOST().position.y(-450, 1, easeInOutElastic),
		overall_sadness_line().position.y(190, 1, easeInOutElastic),
		progress(1, 2).to(0, 2),
	);

	for(let p = 1; p <= 3; ++p){
		yield* progress(1, 2).to(0, 2);
	}

	view.add(
		<Line
			ref={ARROW}
			antialiased
			lineWidth={10}
			arrowSize={50}
			offset={true}
			startArrow
			start={0}
			stroke={BRIGHT_AQUA}
			x={0}
			y={1800}
			points={[
				[0, 0],
				[0, 900],
			]}
		/>
	);

	view.add(
		<Txt
			ref={DELUSION}
			text={"DELUSION"}
			fontFamily={'Fira Code Retina'}
			fontSize={100}
			fill={BRIGHT_PURPLE}
			x={0}
			y={-850}
		/>
	);
	yield* all(
		DELUSION().position.y(-450, 1, easeInOutElastic),
		LOST().position.y(-850, 1, easeInOutElastic),
		overall_sadness_line().position.y(1800, 1, easeInOutElastic),
		REALITY_BLOCK().position.x(500, 1, easeInOutElastic),
		FANTASY_BLOCK().position.x(-500, 1, easeInOutElastic),
		ARROW().position.y(500, 1, easeInOutCubic),
	);

	for(let q = 1; q <= 10; ++q){
		yield* ARROW().rotation(30, 0.5, easeInOutElastic).to(-30, 0.5, easeInOutElastic);
	}

	yield* all(
		DELUSION().position.y(-850, 1, easeInOutElastic),
		REALITY_BLOCK().position.x(1500, 1, easeInOutElastic),
		FANTASY_BLOCK().position.x(-1500, 1, easeInOutElastic),
		ARROW().position.y(1800, 1, easeInOutCubic),
	);

	yield* waitFor(1);
});
