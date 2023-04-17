import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Txt, Rect, Spline, Knot, Img, Node} from '@motion-canvas/2d/lib/components';
import {beginSlide, createRef, makeRef} from '@motion-canvas/core/lib/utils';
import {waitFor, all} from '@motion-canvas/core/lib/flow';
import {easeInOutCubic, easeInOutElastic} from '@motion-canvas/core/lib/tweening';
import {PossibleVector2} from '@motion-canvas/core/lib/types';
import {Gear, StrutConfig} from '@jtstrader/motion-canvas-components';
import Aristotle from "/src/scenes/Aristotle_Pic.png";
import Books from '/src/scenes/Books.svg';
import Brains from '/src/scenes/Brain.svg';

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

	const NICOMACHEAN_BLOCK = createRef<Rect>();
	const NICOMACHEAN_TEXT = createRef<Txt>();

	const GEAR_FORMAT = createRef<Node>();
	const MAIN_GEAR = createRef<Gear>();
	const SECONDARY_GEAR = createRef<Gear>();
	const PRACTICE_TEXT = createRef<Txt>();

	const HABITUATION_FORMAT = createRef<Node>();
	const HABITUATION_TEXT = createRef<Txt>();

	const INTELLECTUAL_FORMAT = createRef<Node>();
	const INTELLECTUAL_TEXT = createRef<Txt>();
	const BOOKS_SVG = createRef<Img>();
	const BRAINS_SVG = createRef<Img>();

	const EUDAIMONIA_FORMAT = createRef<Node>();
	const EUDAIMONIA = createRef<Txt>();
	const HAPPINESS = createRef<Txt>();
	const OR = createRef<Txt>();
	const FLOURISHING = createRef<Txt>();

	const HABITUATION_KNOTPOSITIONS: PossibleVector2[] = [
		[-200, 0],
		[-100, -80],
		[0, 80],
		[100, -80],
		[200, 0],
	];

	const knots: Knot[] = [];

	const MAIN_GEAR_CONFIG: StrutConfig = {
		struts: 5,
		widthFactor: 0.5,
		concenctricDiameter: 200,
		concentricThicknessFactor: 2,
	};

	const SECONDARY_GEAR_CONFIG: StrutConfig = {
		struts: 5,
		widthFactor: 0.5,
		concenctricDiameter: 150,
		concentricThicknessFactor: 2,
	};


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
		<Rect layout ref={NICOMACHEAN_BLOCK} antialiased stroke={BRIGHT_YELLOW} lineWidth={6.5} lineHeight={160} x={300} padding={25} opacity={0}>	
			<Txt
				antialiased
				ref={NICOMACHEAN_TEXT}
				fontSize={140}
				fontFamily={'Fira Code Retina'}
				textAlign={'center'}
				fill={BRIGHT_AQUA}
				y={0}
			/>
		</Rect>
	);

	view.add(
		<Node ref={GEAR_FORMAT} x={-100} y={-50} opacity={0}>
			<Gear
				ref={MAIN_GEAR}
				diameter={250}
				teeth={8}
				color={BRIGHT_GREEN}>
			</Gear>

			<Gear
				ref={SECONDARY_GEAR}
				diameter={200}
				teeth={8}
				color={BRIGHT_YELLOW}
				x={100}
				y={255}>
			</Gear>

			<Txt
				antialiased
				ref={PRACTICE_TEXT}
				fill={BRIGHT_RED}
				fontSize={80}
				fontFamily={'Fira Code Retina'}
				text={"PRACTICE"}
				y={450}
			/>
		</Node>
	);
	view.add(
		<Node ref={HABITUATION_FORMAT} opacity={0} x={550}>
			<Spline scale={1.5} lineWidth={10} stroke={BRIGHT_PURPLE}>
				{HABITUATION_KNOTPOSITIONS.map((pos, i) => (
					<Knot ref={makeRef(knots, i)} position={pos} />
				))}
			</Spline>

			<Txt
				antialiased
				ref={HABITUATION_TEXT}
				fill={BRIGHT_RED}
				fontSize={80}
				fontFamily={'Fira Code Retina'}
				text={"HABITUATION"}
				y={400}
			/>
		</Node>
  );

	view.add(
		<Node ref={INTELLECTUAL_FORMAT}>
			<Txt
				antialiased
				ref={INTELLECTUAL_TEXT}
				text={'INTELLECTUAL\nVIRTUE'}
				fontSize={120}
				fontFamily={'Fira Code Retina'}
				fill={BRIGHT_GREEN}
				opacity={0}
				x={-500}
				y={-380}
			/>

			<Img
				antialiased
				ref={BOOKS_SVG}
				src={Books}
				scale={5}
				opacity={0}
				x={-650}
				y={50}
			/>

			<Img
				antialiased
				ref={BRAINS_SVG}
				src={Brains}
				scale={2.5}
				opacity={0}
				x={0}
				y={300}
			/>
		</Node>
	);

	view.add(
		<Node ref={EUDAIMONIA_FORMAT} x={0} y={0}>
			<Txt
				antialiased
				ref={EUDAIMONIA}
				fontSize={150}
				fontStyle={'italic'}
				fontFamily={'Fira Code Retina'}
				fill={BRIGHT_AQUA}
				x={0}
				y={-350}
			/>

			<Txt
				antialiased
				ref={HAPPINESS}
				fontSize={135}
				fontFamily={'Fira Code Retina'}
				fill={BRIGHT_YELLOW}
				x={-500}
				y={-80}
			/>

			<Txt
				antialiased
				ref={OR}
				fontSize={90}
				fontFamily={'Fira Code Retina'}
				fill={BRIGHT_RED}
				x={0}
				y={100}
			/>

			<Txt
				antialiased
				ref={FLOURISHING}
				fontSize={120}
				fontFamily={'Fira Code Retina'}
				fill={BRIGHT_YELLOW}
				x={500}
				y={300}
			/>
		</Node>
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

	yield* all(
		NICOMACHEAN_BLOCK().opacity(1, 1),
		NICOMACHEAN_TEXT().text("NICOMACHEAN\n ETHICS", 1),
	); 
	yield* waitFor(8);

	yield* all(
		NICOMACHEAN_TEXT().text("VIRTUES", 1),
		NICOMACHEAN_BLOCK().position.y(-400, 1, easeInOutElastic),
	);

	yield* all(
		MAIN_GEAR().struts(MAIN_GEAR_CONFIG, 0),
		SECONDARY_GEAR().struts(SECONDARY_GEAR_CONFIG, 0),
		GEAR_FORMAT().opacity(1, 0.5),	
	);

	yield* all(
		MAIN_GEAR().crank(0.5),
		SECONDARY_GEAR().crank(0.5, -1),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5, -1),
		SECONDARY_GEAR().crank(0.5, 1),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5),
		SECONDARY_GEAR().crank(0.5, -1),
		HABITUATION_FORMAT().opacity(1, 1),

		knots[1].position.y(80, 0.5).to(-80, 0.5),
		knots[2].position.y(-80, 0.5).to(80, 0.5),
		knots[3].position.y(80, 0.5).to(-80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5, -1),
		SECONDARY_GEAR().crank(0.5, 1),

		knots[1].position.y(-80, 0.5).to(80, 0.5),
		knots[2].position.y(80, 0.5).to(-80, 0.5),
		knots[3].position.y(-80, 0.5).to(80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5),
		SECONDARY_GEAR().crank(0.5, -1),

		knots[1].position.y(80, 0.5).to(-80, 0.5),
		knots[2].position.y(-80, 0.5).to(80, 0.5),
		knots[3].position.y(80, 0.5).to(-80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5, -1),
		SECONDARY_GEAR().crank(0.5, 1),

		knots[1].position.y(-80, 0.5).to(80, 0.5),
		knots[2].position.y(80, 0.5).to(-80, 0.5),
		knots[3].position.y(-80, 0.5).to(80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5),
		SECONDARY_GEAR().crank(0.5, -1),

		knots[1].position.y(80, 0.5).to(-80, 0.5),
		knots[2].position.y(-80, 0.5).to(80, 0.5),
		knots[3].position.y(80, 0.5).to(-80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5, -1),
		SECONDARY_GEAR().crank(0.5, 1),

		knots[1].position.y(-80, 0.5).to(80, 0.5),
		knots[2].position.y(80, 0.5).to(-80, 0.5),
		knots[3].position.y(-80, 0.5).to(80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5),
		SECONDARY_GEAR().crank(0.5, -1),

		knots[1].position.y(80, 0.5).to(-80, 0.5),
		knots[2].position.y(-80, 0.5).to(80, 0.5),
		knots[3].position.y(80, 0.5).to(-80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5, -1),
		SECONDARY_GEAR().crank(0.5, 1),

		knots[1].position.y(-80, 0.5).to(80, 0.5),
		knots[2].position.y(80, 0.5).to(-80, 0.5),
		knots[3].position.y(-80, 0.5).to(80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5),
		SECONDARY_GEAR().crank(0.5, -1),

		knots[1].position.y(80, 0.5).to(-80, 0.5),
		knots[2].position.y(-80, 0.5).to(80, 0.5),
		knots[3].position.y(80, 0.5).to(-80, 0.5),

		GEAR_FORMAT().opacity(0, 0.5),
		HABITUATION_FORMAT().opacity(0, 0.5),
		NICOMACHEAN_BLOCK().opacity(0, 0.5),
		ARISTOTLE_FORMAT().position.x(650, 1, easeInOutCubic),
	); 

	yield* waitFor(13);
	yield* INTELLECTUAL_TEXT().opacity(1, 0.5);
	yield* waitFor(1);
	yield* BOOKS_SVG().opacity(1, 0.5);
	yield* waitFor(1);
	yield* BRAINS_SVG().opacity(1, 0.5);
	yield* waitFor(13);

	yield* all(
		INTELLECTUAL_TEXT().position.x(-450, 1),
		INTELLECTUAL_TEXT().position.y(-450, 1),
		INTELLECTUAL_TEXT().text("MORAL VIRTUES", 1),

		BOOKS_SVG().opacity(0, 0.5),
		BRAINS_SVG().opacity(0, 0.5),
	);

	yield* waitFor(3);

	yield* all(
		GEAR_FORMAT().position.x(-730, 0),
		HABITUATION_FORMAT().position.x(-100, 0),

		GEAR_FORMAT().opacity(1, 0.5),
		HABITUATION_FORMAT().opacity(1, 0.5),

		MAIN_GEAR().crank(0.5),
		SECONDARY_GEAR().crank(0.5, -1),

		knots[1].position.y(80, 0.5).to(-80, 0.5),
		knots[2].position.y(-80, 0.5).to(80, 0.5),
		knots[3].position.y(80, 0.5).to(-80, 0.5),
	);

	yield* all(
		MAIN_GEAR().crank(0.5, -1),
		SECONDARY_GEAR().crank(0.5, 1),

		knots[1].position.y(-80, 0.5).to(80, 0.5),
		knots[2].position.y(80, 0.5).to(-80, 0.5),
		knots[3].position.y(-80, 0.5).to(80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5),
		SECONDARY_GEAR().crank(0.5, -1),

		knots[1].position.y(80, 0.5).to(-80, 0.5),
		knots[2].position.y(-80, 0.5).to(80, 0.5),
		knots[3].position.y(80, 0.5).to(-80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5, -1),
		SECONDARY_GEAR().crank(0.5, 1),

		knots[1].position.y(-80, 0.5).to(80, 0.5),
		knots[2].position.y(80, 0.5).to(-80, 0.5),
		knots[3].position.y(-80, 0.5).to(80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5),
		SECONDARY_GEAR().crank(0.5, -1),

		knots[1].position.y(80, 0.5).to(-80, 0.5),
		knots[2].position.y(-80, 0.5).to(80, 0.5),
		knots[3].position.y(80, 0.5).to(-80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5, -1),
		SECONDARY_GEAR().crank(0.5, 1),

		knots[1].position.y(-80, 0.5).to(80, 0.5),
		knots[2].position.y(80, 0.5).to(-80, 0.5),
		knots[3].position.y(-80, 0.5).to(80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5),
		SECONDARY_GEAR().crank(0.5, -1),

		knots[1].position.y(80, 0.5).to(-80, 0.5),
		knots[2].position.y(-80, 0.5).to(80, 0.5),
		knots[3].position.y(80, 0.5).to(-80, 0.5),
	); 

	yield* all(
		MAIN_GEAR().crank(0.5, -1),
		SECONDARY_GEAR().crank(0.5, 1),

		knots[1].position.y(-80, 0.5).to(80, 0.5),
		knots[2].position.y(80, 0.5).to(-80, 0.5),
		knots[3].position.y(-80, 0.5).to(80, 0.5),
		
		GEAR_FORMAT().opacity(0, 0.5),
		HABITUATION_FORMAT().opacity(0, 0.5),
		INTELLECTUAL_TEXT().opacity(0, 0.5),

		ARISTOTLE_FORMAT().scale(1, 1),
		ARISTOTLE_FORMAT().position.x(0, 1, easeInOutCubic),
	); 

	yield* waitFor(13);
	yield* all(
		ARISTOTLE_FORMAT().opacity(0.04, 0.5),
		EUDAIMONIA().text("EUDAIMONIA", 1),
	);

	yield* HAPPINESS().text("HAPPINESS", 1);
	yield* waitFor(1);

	yield* all(
		OR().text("OR", 1),
		FLOURISHING().text("FLOURISHING", 1),
	);

	yield* waitFor(8);

	yield* all(
		EUDAIMONIA_FORMAT().opacity(0, 0.5),
		ARISTOTLE_FORMAT().opacity(1, 0.5),
	);
});
