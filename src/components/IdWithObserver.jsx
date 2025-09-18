import { useInView } from "react-intersection-observer";
import MyId from "./MyId";

export default function IdWithObserver() {
	const { ref, inView } = useInView({
		// Only trigger the animation once to avoid it re-dropping on subsequent scrolls.
		triggerOnce: true,
		threshold: 0.7,
	});

	return (
		<div
			ref={ref}
			class="h-120 md:h-175 w-full flex flex-col items-center relative cursor-move"
		>
			{inView && <MyId client:load />}
			<div class="bg-yellow border-2 border-base-100 p-2 absolute flex flex-col items-center w-fit h-fit bottom-0 text-xs">
				<div>↑↑↑</div>
				<p>Drag me!</p>
			</div>
		</div>
	);
}
