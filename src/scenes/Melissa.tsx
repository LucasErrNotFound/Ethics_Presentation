import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Txt, Node} from '@motion-canvas/2d/lib/components';
import {beginSlide, createRef} from '@motion-canvas/core/lib/utils';
import {waitFor, all} from '@motion-canvas/core/lib/flow';
import {easeInOutCubic} from '@motion-canvas/core/lib/tweening';

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

	const PURPOSE_OF_ETHICS = createRef<Txt>();

	const PURPOSE_OF_ETHICS_FORMAT = createRef<Node>();

	const PURPOSE_1 = createRef<Txt>();
	const PURPOSE_1_CITATION = createRef<Txt>();
	
	const PURPOSE_2 = createRef<Txt>();
	const PURPOSE_2_CITATION = createRef<Txt>();

	const PURPOSE_3 = createRef<Txt>();
	const PURPOSE_3_CITATION = createRef<Txt>();
	
	view.add(
		<Txt
			antialiased
			ref={PURPOSE_OF_ETHICS}		
			fontSize={150}
			fontFamily={'Fira Code Retina'}
			fill={BRIGHT_GREEN}
			text={"PURPOSE OF\n VIRTUE ETHICS"}
			textAlign="center"
			opacity={0}
		/>
	);

	view.add(
		<Node ref={PURPOSE_OF_ETHICS_FORMAT} x={-100} y={-30}>
			<Txt
				antialiased
				ref={PURPOSE_1}
				fontFamily={'Fira Code Retina'}
				fontSize={70}
				fill={BRIGHT_AQUA}
				text={"- Centers ethics on the person and\n what it means to be human. It includes\n the whole of a person's life."}
				y={-350}
				opacity={0}
			/>

			<Txt
				antialiased
				ref={PURPOSE_1_CITATION}
				fontSize={55}
				fontFamily={'Fira Code Retina'}
				fill={BRIGHT_RED}
				text={"(BBC, 2014)"}
				x={700}
				y={-260}
				opacity={0}
			/>

			<Txt
				antialiased
				ref={PURPOSE_2}
				fontFamily={'Fira Code Retina'}
				fontSize={70}
				fill={BRIGHT_AQUA}
				text={"- Urges people to live a moral life\n by cultivating virtuous habits."}
				x={200}
				y={-20}
				opacity={0}
			/>

			<Txt
				antialiased
				ref={PURPOSE_2_CITATION}
				fontSize={55}
				fontFamily={'Fira Code Retina'}
				fill={BRIGHT_RED}
				text={"(McCombs School of Business, 2018)"}
				x={450}
				y={100}
				opacity={0}
			/>

			<Txt
				antialiased
				ref={PURPOSE_3}
				fontFamily={'Fira Code Retina'}
				fontSize={70}
				fill={BRIGHT_AQUA}
				text={"- Outs emphasis on developing good\n habits of character and avoiding\n bad character traits and vices."}
				x={-100}
				y={350}
				opacity={0}
			/>

			<Txt
				antialiased
				ref={PURPOSE_3_CITATION}
				fontSize={55}
				fontFamily={'Fira Code Retina'}
				fill={BRIGHT_RED}
				text={"(McCombs School of Business, 2018)"}
				x={450}
				y={100}
				opacity={0}
			/>
		</Node>
	);

	yield* beginSlide('Third Slide');
	yield* PURPOSE_OF_ETHICS().opacity(1, 0.5);
	yield* waitFor(5);

	yield* all(
		PURPOSE_OF_ETHICS().opacity(0, 0.5),
		PURPOSE_1().opacity(1, 0.5),
		PURPOSE_1_CITATION().opacity(1, 0.5),
	);

	yield* waitFor(15);

	yield* all(
		PURPOSE_2().opacity(1, 0.5),
		PURPOSE_2_CITATION().opacity(1, 0.5),
	);
	yield* waitFor(15);

	yield* all(
		PURPOSE_3().opacity(1, 0.5),
		PURPOSE_3_CITATION().opacity(1, 0.5),
	);

	yield* waitFor(28);

	yield* all(
		PURPOSE_OF_ETHICS_FORMAT().position.x(-1500, 0.5, easeInOutCubic),
		PURPOSE_OF_ETHICS_FORMAT().opacity(0, 0.5),
	);
});
