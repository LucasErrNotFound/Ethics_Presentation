import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Knot, Rect, Spline} from '@motion-canvas/2d/lib/components';
import {createRef, makeRef, range} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';
import {Vector2} from '@motion-canvas/core/lib/types';
import {linear} from '@motion-canvas/core/lib/tweening';
import {Gradient} from '@motion-canvas/2d/lib/partials';

export default makeScene2D(function* (view) {
		const spline = createRef<Spline>();
		const rect = createRef<Rect>();
		const knots: Knot[] = [];

		const petals = 6;
		const theta = (Math.PI * 2) / petals;

		view.add(
				<Spline ref={spline} lineWidth={6} stroke={'#fdaf09'} clip closed>
				<Rect
				ref={rect}
				x={-400}
				size={400}
				fill={
				new Gradient({
from: [-400, 0],
to: [400, 0],
stops: [
{offset: 0, color: '#fc746d'},
{offset: 1, color: '#fed7b1'},
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
yield* spline().end(0).end(1, 2);
yield* all(rect().position.x(0, 1), spline().lineWidth(0, 1));
yield* all(
		spline().rotation(240, 6, linear),
		...knots.map(knot =>
			all(knot.rotation(180, 3, linear).to(0, 3), knot.scale(2, 3).to(1, 3)),
			),
		);
});
