import {Circle, Polygon, Node } from "@motion-canvas/2d/lib/components";
import {makeScene2D} from "@motion-canvas/2d/lib/scenes";
import {waitFor} from "@motion-canvas/core/lib/flow";
import {Color} from "@motion-canvas/core/lib/types";
import {createRef, range} from "@motion-canvas/core/lib/utils";

const linearTimingFunction = (value: number) => value;

export default makeScene2D(function* (view) {

  const runeColor = new Color("#8ff");
  const runeColor3 = runeColor.darken(1.5);
  const cirlceRefs = range(3).map(() => createRef<Circle>());
  const radius = 200;
  const strokeWidth = radius / 20;

  const polyRef1 = createRef<Polygon>();
  const polyRef2 = createRef<Polygon>();


	view.add(
		<Node shadowBlur={20} shadowColor={runeColor3} scale={0.5}>
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

  yield polyRef1().rotation(-360 - 180, 80, linearTimingFunction);
  yield polyRef2().rotation(-360, 80, linearTimingFunction);

  yield* waitFor(20);
});
