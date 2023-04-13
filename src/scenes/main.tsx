import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {createSignal} from "@motion-canvas/core/lib/signals";
import {Txt, Layout, Rect, Line, Circle, Spline, Knot, Img, Polygon, Node} from '@motion-canvas/2d/lib/components';
import {beginSlide, createRef, makeRef, range} from '@motion-canvas/core/lib/utils';
import {waitFor, waitUntil, all, loop} from '@motion-canvas/core/lib/flow';
import {easeInOutCubic, easeOutCubic, easeInCubic, easeInOutElastic, tween, map, linear} from '@motion-canvas/core/lib/tweening';
import {join} from "@motion-canvas/core/lib/threading";
import {Vector2, Color} from '@motion-canvas/core/lib/types';
import {Gradient} from '@motion-canvas/2d/lib/partials';
import {CameraView} from "@ksassnowski/motion-canvas-camera";
import {Gear, StrutConfig} from '@jtstrader/motion-canvas-components';
import courage from "/src/scenes/Courage.png";
import troll from "/src/scenes/troll_face.png";


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

	const HEART = createRef<Spline>();
	const MAIN_GEAR = createRef<Gear>();
	const SECONDARY_GEAR = createRef<Gear>();
	const TERTIARY_GEAR = createRef<Gear>();

	const WORD_VIRTUE = createRef<Txt>();
	const WHAT_EVEN_IS = createRef<Txt>();

	const VIRTUE_BLOCK = createRef<Rect>();
	const VIRTUE_EXPLANATION = createRef<Txt>();

	const spline = createRef<Spline>();
	const rect = createRef<Rect>();
	const knots: Knot[] = [];

	const petals = 6;
	const theta = (Math.PI * 2) / petals;

	const HEART_1 = createRef<Spline>();
	const HEART_2 = createRef<Spline>();
	const HEART_3  = createRef<Spline>();
	const HEART_4 = createRef<Spline>();
	const HEART_5 = createRef<Spline>();

	const COURAGE = createRef<Img>();
	const HUMOR = createRef<Img>();

	const OF_COURSE = createRef<Txt>();
	const ITS_NOT_ALWAYS = createRef<Txt>();

	const runeColor = new Color("#1BFFFF");
	const runeColor3 = runeColor.brighten(2.5);
	const cirlceRefs = range(3).map(() => createRef<Circle>());
	const radius = 200;
	const strokeWidth = radius / 20;

	const polyRef1 = createRef<Polygon>();
	const polyRef2 = createRef<Polygon>();
	const STAR = createRef<Node>();

	const MAIN_GEAR_CONFIG: StrutConfig = {
		struts: 5,
		widthFactor: 0.5,
		concenctricDiameter: 300,
		concentricThicknessFactor: 2,
	};
	
	const SECONDARY_GEAR_CONFIG: StrutConfig = {
		struts: 3,
		widthFactor: 0.5,
		concenctricDiameter: 250,
		concentricThicknessFactor: 2,
	};

	const TERTIARY_GEAR_CONFIG: StrutConfig = {
		struts: 0,
		widthFactor: 5,
		concenctricDiameter: 350,
		concentricThicknessFactor: 2,
	};

	view.add(
		<Spline ref={HEART} x={0} y={1000} scale={3} lineWidth={4} fill={BRIGHT_RED} closed>
			<Knot position={[-120, -30]} startHandle={[0, 70]} />
				<Knot
					position={[0, -50]}
					startHandle={[-40, -60]}
					endHandle={[40, -60]}
				/>
			<Knot position={[120, -30]} startHandle={[0, -70]} />
			<Knot position={[0, 100]} startHandle={[5, 0]} />
		</Spline>,
	);

	view.add(
		<Gear 
			ref={MAIN_GEAR} 
			diameter={500} 
			teeth={10} 
			x={-2000}
			y={20}
			color={BRIGHT_ORANGE}>
		</Gear>
	);

	view.add(
		<Gear 
			ref={SECONDARY_GEAR} 
			diameter={400} 
			teeth={10} 
			x={-2000}
			y={-150}
			color={BRIGHT_AQUA}
		/>
	);

	view.add(
		<Gear 
			ref={TERTIARY_GEAR} 
			diameter={400} 
			teeth={10} 
			x={-2000}
			y={275}
			color={BRIGHT_GREEN}
			scale={0.8}
		/>
	);

	view.add(
		<Txt
			ref={WORD_VIRTUE}
			fontSize={150}
			fill={BRIGHT_RED}
			fontFamily={'Fira Code Retina'}
			x={500}
			y={0}
		/>
	);

	view.add(
		<Txt
			ref={WHAT_EVEN_IS}
			fontSize={120}
			fill={BRIGHT_YELLOW}
			fontFamily={'Fira Code Retina'}
			x={-250}
			y={-450}
		/>
	);

	view.add(
		<>
			<Rect
				ref={VIRTUE_BLOCK}
				radius={10}
			    width={1600}
				height={600}
			    scale={0}
				x={0}
				y={0}
				// fill={BRIGHT_YELLOW}
				opacity={0}
				lineWidth={3}>

			<Txt
				ref={VIRTUE_EXPLANATION}
				fontFamily={"Jetbrains Mono"}
				fontSize={60}
				lineHeight={90}
				fill={BRIGHT_AQUA}
			/>

			</Rect>
		</>
	);


	view.add(
		<Spline ref={HEART_1} x={2000} y={0} scale={3} lineWidth={4} fill={BRIGHT_RED} closed>
			<Knot position={[-120, -30]} startHandle={[0, 70]} />
				<Knot
					position={[0, -50]}
					startHandle={[-40, -60]}
					endHandle={[40, -60]}
				/>
			<Knot position={[120, -30]} startHandle={[0, -70]} />
			<Knot position={[0, 100]} startHandle={[5, 0]} />
		</Spline>,
	);
	
	view.add(
		<Spline ref={HEART_2} x={2000} y={-400} rotation={-20} scale={1} lineWidth={4} fill={BRIGHT_GREEN} closed>
			<Knot position={[-120, -30]} startHandle={[0, 70]} />
				<Knot
					position={[0, -50]}
					startHandle={[-40, -60]}
					endHandle={[40, -60]}
				/>
			<Knot position={[120, -30]} startHandle={[0, -70]} />
			<Knot position={[0, 100]} startHandle={[5, 0]} />
		</Spline>,
	);
		
	view.add(
		<Spline ref={HEART_3} x={2000} y={-350} rotation={15} scale={1.6} lineWidth={4} fill={BRIGHT_YELLOW} closed>
			<Knot position={[-120, -30]} startHandle={[0, 70]} />
				<Knot
					position={[0, -50]}
					startHandle={[-40, -60]}
					endHandle={[40, -60]}
				/>
			<Knot position={[120, -30]} startHandle={[0, -70]} />
			<Knot position={[0, 100]} startHandle={[5, 0]} />
		</Spline>,
	);

	view.add(
		<Spline ref={HEART_4} x={2000} y={380} rotation={-23} scale={1.5} lineWidth={4} fill={BRIGHT_BLUE} closed>
			<Knot position={[-120, -30]} startHandle={[0, 70]} />
				<Knot
					position={[0, -50]}
					startHandle={[-40, -60]}
					endHandle={[40, -60]}
				/>
			<Knot position={[120, -30]} startHandle={[0, -70]} />
			<Knot position={[0, 100]} startHandle={[5, 0]} />
		</Spline>,
	);

	view.add(
		<Spline ref={HEART_5} x={2000} y={180} rotation={20} scale={2} lineWidth={4} fill={BRIGHT_PURPLE} closed>
			<Knot position={[-120, -30]} startHandle={[0, 70]} />
				<Knot
					position={[0, -50]}
					startHandle={[-40, -60]}
					endHandle={[40, -60]}
				/>
			<Knot position={[120, -30]} startHandle={[0, -70]} />
			<Knot position={[0, 100]} startHandle={[5, 0]} />
		</Spline>,
	);

	view.add(
		<Img 
			ref={COURAGE}
			src={courage}
			x={0}
			y={8000}
		/>
	);

	view.add(
		<Img 
			ref={HUMOR}
			src={troll}
			y={1500}
			scale={2}
		/>
	);

	view.add(
		<Txt
			ref={OF_COURSE}
			fontSize={120}
			fontFamily={'Fira Code Retina'}
			fill={BRIGHT_AQUA}
			opacity={0}
		/>
	);

	view.add(
		<Txt
			ref={ITS_NOT_ALWAYS}
			fontSize={120}
			fontFamily={'Fira Code Retina'}
			fill={BRIGHT_RED}
			opacity={0}
			y={0}
		/>
	);

	view.add(
		<Node ref={STAR} shadowBlur={20} shadowColor={runeColor3} scale={0.85} x={-1500} y={200}>
			<Polygon
				ref={polyRef1}
				width={radius * 4}
				height={radius * 4}
				sides={3}
				rotation={0}
				lineWidth={strokeWidth}
				 stroke={runeColor3}
			/>
			<Polygon
				ref={polyRef2}
				width={radius * 4}
				height={radius * 4}
				sides={3}
				rotation={180}
				lineWidth={strokeWidth}
				stroke={runeColor3}
			/>

			{cirlceRefs.map((_, i) => {
				return (
					<Circle
						lineWidth={strokeWidth}
						ref={cirlceRefs[i]}
						width={(i + 1) * radius}
						opacity={0.9}
						height={(i + 1) * radius}
						stroke={runeColor}
					/>
				);
			})}
		</Node>
	);

	yield* beginSlide("First Slide");
	yield* waitFor(2);
	yield* WORD_VIRTUE().text("VIRTUE...", 1);
	yield* waitFor(1);

	yield* all(
		WORD_VIRTUE().text("VIRTUE", 1),
		WORD_VIRTUE().rotation(360, 1),
		WORD_VIRTUE().fontSize(120, 1),
		WORD_VIRTUE().position.y(-450, 1, easeInOutCubic),

		WHAT_EVEN_IS().text("WHAT EVEN IS ", 1),
		VIRTUE_BLOCK().stroke(BRIGHT_YELLOW, 1),
		VIRTUE_BLOCK().scale(1, 2, easeInOutCubic),
		VIRTUE_BLOCK().opacity(1, 1),
		VIRTUE_EXPLANATION().text("The word virtue comes from the Latin word\n virtus which means being really good at\n something or having the ability to do it.\n Nowadays, virtue means having a certain\n trait or behavior that people think is\n really cool and admirable.", 8),

		waitFor(5),


	);	yield* waitFor(5);	

	yield* all(
		WHAT_EVEN_IS().position.y(-800, 1, easeInOutElastic),
		WORD_VIRTUE().position.y(-800, 1, easeInOutElastic),
		VIRTUE_BLOCK().position.y(-900, 1, easeInOutElastic),

		HEART().scale(3.5, 0.1).to(3, 0.5),
		HEART().position.y(0, 1, easeInOutElastic),
	);

	for(let i = 0; i <= 5; ++i){
		yield* HEART().scale(3.5, 0.1).to(3, 0.5);

		if(i == 3){
			yield* all( 
				HEART().position.x(1500, 0.5, easeInOutCubic),
				MAIN_GEAR().position.x(-280, 1, easeInOutElastic),
				SECONDARY_GEAR().position.x(250, 1, easeInOutElastic),
				TERTIARY_GEAR().position.x(380, 1, easeInOutElastic),

				MAIN_GEAR().struts(MAIN_GEAR_CONFIG, 0.5),
				SECONDARY_GEAR().struts(SECONDARY_GEAR_CONFIG, 0.5),
				TERTIARY_GEAR().struts(TERTIARY_GEAR_CONFIG, 0.5),

				MAIN_GEAR().rotation(720, 5),
				SECONDARY_GEAR().rotation(-720, 5),
				TERTIARY_GEAR().rotation(720, 5),
				waitUntil('TERTIARY_GEAR'),
			);
		}
	};
	yield* all(
		MAIN_GEAR().position.x(-2000, 1, easeInOutElastic),
		SECONDARY_GEAR().position.x(-2000, 1, easeInOutElastic),
		TERTIARY_GEAR().position.x(-2000, 1, easeInOutElastic),
		
		HEART_1().position.x(0, 1, easeInOutElastic),
		HEART_2().position.x(450, 1, easeInOutElastic),
		HEART_3().position.x(-600, 1, easeInOutElastic),
		HEART_4().position.x(-500, 1, easeInOutElastic),
		HEART_5().position.x(700, 1, easeInOutElastic),
	);

	for(let i = 0; i <= 5; ++i){
		yield* all(
			HEART_1().scale(3.5, 0.1).to(3, 0.5),
			HEART_2().scale(1.5, 0.1).to(1, 0.5),
			HEART_3().scale(2.2, 0.1).to(1.6, 0.5),
			HEART_4().scale(3.0, 0.1).to(1.5, 0.5),
			HEART_5().scale(2.5, 0.1).to(2, 0.5),
		);
		if(i == 3){
			yield* all(
				HEART_1().position.y(-2000, 1, easeInOutElastic),
				HEART_2().position.y(-2000, 1, easeInOutElastic),
				HEART_3().position.y(-2000, 1, easeInOutElastic),
				HEART_4().position.y(-2000, 1, easeInOutElastic),
				HEART_5().position.y(-2000, 1, easeInOutElastic),

				COURAGE().position.y(0, 1, easeInOutCubic).to(-50, 1, easeInCubic).to(-5000, 0.5, easeOutCubic),
			);
		}
	}

	view.add(
		<Spline ref={spline} lineWidth={6} scale={2.5} y={0} stroke={BRIGHT_PURPLE} clip closed>
			<Rect
				ref={rect}
				x={-400}
				size={400}
				fill={
					new Gradient({
						from: [-400, 0],
						to: [400, 0],
							stops: [
								{offset: 0, color: BRIGHT_GREEN},
								{offset: 1, color: BRIGHT_AQUA},
							],
					})
				}
			/>
      <>
		{...range(petals).map(i => (
			<>
				<Knot position={[0, 0]} />,
					<Knot
						ref={makeRef(knots, i)}
						position={Vector2.fromRadians(theta * i).scale(160)}
						endHandle={Vector2.fromRadians(theta * i).perpendicular.scale(60)}
					/>
				</>
		))}
		</>
	</Spline>,
  );

	yield* spline().end(0).end(1, 1);
	yield* all(rect().position.x(0, 1), spline().lineWidth(0, 1));
	yield* all(
			spline().rotation(240, 6, linear),
			...knots.map(knot => all(knot.rotation(180, 3, linear).to(0, 3), knot.scale(2, 3).to(1, 3)),
			),
	);
	yield* all(
		spline().position.y(-1500, 1, easeInOutElastic),
		HUMOR().position.y(0, 1, easeInOutElastic),
		HUMOR().rotation(10, 0.3).to(-10, 0.3).to(10, 0.3).to(-10, 0.3),
	);

	for(let k = 1; k <= 3; ++k){
		yield* HUMOR().rotation(10, 0.3).to(-10, 0.3).to(10, 0.3).to(-10, 0.3);
	};

	yield* HUMOR().position.y(-1500, 1, easeInOutElastic);
	yield* beginSlide('Second Slide');

	yield* all(
		OF_COURSE().opacity(1, 1),
		OF_COURSE().text("OF COURSE,", 1),
	);
	yield* waitFor(1);
	yield* all(
		OF_COURSE().position.y(-350, 1),
		ITS_NOT_ALWAYS().opacity(1, 1),
		ITS_NOT_ALWAYS().position.y(-200, 1, easeInCubic),
		ITS_NOT_ALWAYS().text("IT IS VIRTUE", 1),
	);

	yield all(
		STAR().position.x(0, 1, easeInOutCubic),

		polyRef1().rotation(-360 - 180, 80, linearTimingFunction),
		polyRef2().rotation(-360, 80, linearTimingFunction),
	);

	yield* waitFor(10);

	yield* all(
		STAR().position.y(-1500, 1, easeInOutCubic),
		OF_COURSE().opacity(0, 0.5),
		ITS_NOT_ALWAYS().opacity(0, 0.5),
	);

	yield* waitFor(1);

});
