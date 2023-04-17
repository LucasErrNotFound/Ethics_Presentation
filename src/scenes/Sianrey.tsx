import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Txt, Rect, Img, Node} from '@motion-canvas/2d/lib/components';
import {beginSlide, createRef} from '@motion-canvas/core/lib/utils';
import {waitFor, all} from '@motion-canvas/core/lib/flow';
import {easeInOutCubic, easeInOutElastic} from '@motion-canvas/core/lib/tweening';
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

	const VIRTUE_APPROACH_FORMAT = createRef<Node>();
	const VIRTUE_APPROACH_BLOCK = createRef<Rect>();
	const VIRTUE_APPROACH_TEXT = createRef<Txt>();

	const CHARACTER_BASED_TEXT = createRef<Txt>();

	const ARISTOTLE_PICTURE = createRef<Img>();
	const ARISTOTLE_QUOTE = createRef<Txt>();

	const EXAMPLE_WORD = createRef<Txt>();

	view.add(
		<Node ref={VIRTUE_APPROACH_FORMAT} scale={0} opacity={0}>	
			<Rect layout ref={VIRTUE_APPROACH_BLOCK} antialiased={true} stroke={BRIGHT_YELLOW} lineWidth={5} padding={13}>
				<Txt
					antialiased={true}
					ref={VIRTUE_APPROACH_TEXT}	
					fontSize={65}
					fontFamily={'Fira Code Retina'}
					lineHeight={100}
					fill={BRIGHT_AQUA}
					text={"- In virtue ethics, the character-based\n approach to  morality assumes that we acquire\n virtue through  practice. Moral character is the\n foundation of personal acceptance and  growth,\n healthy relationships and success. Also, by\n practicing being honest, brave, generous,\n and so on."}
					
				/>
			</Rect>
		</Node>	
	);

	view.add(
		<Txt
			antialiased={true}
			ref={CHARACTER_BASED_TEXT}
			fontSize={75}
			fontFamily={'Fira Code Retina'}
			lineHeight={100}
			fill={BRIGHT_GREEN}
		/>
	);

	view.add(
			<Img
				antialiased={true}
				ref={ARISTOTLE_PICTURE}
				src={Aristotle}
				lineWidth={50}
				stroke={BRIGHT_YELLOW}
				scale={0.35}
				x={0}
				y={1500}
			/>
	);

	view.add(
		<Txt
			antialiased={true}
			ref={ARISTOTLE_QUOTE}
			fontSize={78}
			fontFamily={'Fira Code Retina'}
			fill={BRIGHT_BLUE}
			fontStyle={"italic"}
			textAlign={"center"}
			y={250}
		/>
	);

	view.add(
		<Txt
			antialiased={true}
			ref={EXAMPLE_WORD}
			fontSize={300}
			fontFamily={'Fira Code Retina'}
			fill={BRIGHT_PURPLE}
			x={0}
			y={0}
		/>
	);

	yield* beginSlide('Sixth Slide');

	yield* all(
		VIRTUE_APPROACH_FORMAT().scale(1, 1, easeInOutCubic),
		VIRTUE_APPROACH_FORMAT().opacity(1, 1, easeInOutCubic),
	);

	yield* waitFor(20);
	yield* all(
		VIRTUE_APPROACH_TEXT().fontSize(75, 1),
		VIRTUE_APPROACH_TEXT().text("So What Is The Character-Based Approach?", 2),
		VIRTUE_APPROACH_FORMAT().position.y(-450, 1, easeInOutCubic),
	); 

	yield* CHARACTER_BASED_TEXT().text("A character-based approach to virtue\n ethics aims to develop particular\n character or personality traits\n including honesty, courage, and empathy.", 4);

	yield* waitFor(15);

	yield* all(
		VIRTUE_APPROACH_FORMAT().position.y(-700, 1, easeInOutElastic),
		CHARACTER_BASED_TEXT().position.y(-800, 1, easeInOutElastic),

		ARISTOTLE_PICTURE().position.y(0, 1, easeInOutElastic),
	);

	yield* all(
		ARISTOTLE_PICTURE().position.y(-190, 1, easeInOutCubic),
		ARISTOTLE_PICTURE().scale(0.28, 1),
		ARISTOTLE_QUOTE().text(`"Virtue is the excellence of a thing to \nperform its proper function."`, 5),
	);

	yield* waitFor(8);

	yield* all(
		ARISTOTLE_QUOTE().opacity(0.1, 1),
		ARISTOTLE_PICTURE().opacity(0.1, 1),
		EXAMPLE_WORD().text("EXAMPLE", 1),
	);

	yield* waitFor(18);

	yield* all(
		EXAMPLE_WORD().text("", 1),
		ARISTOTLE_QUOTE().opacity(1, 1),
		ARISTOTLE_PICTURE().opacity(1, 1),

		ARISTOTLE_PICTURE().position.y(-1500, 1, easeInOutElastic),
		ARISTOTLE_QUOTE().text("", 1),
	);
});
