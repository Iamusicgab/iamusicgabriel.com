import { useInView } from "react-intersection-observer";
import MyId from "./MyId";

export default function IdWithObserver() {
  const { ref, inView } = useInView({
    // Only trigger the animation once to avoid it re-dropping on subsequent scrolls.
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <div
      ref={ref}
      className="h-120 md:h-175 w-full flex flex-col items-center relative "
    >
      {inView && <MyId client:load />}
      <div className="bg-yellow border-4 border-base-100 p-2 absolute flex flex-col items-center w-fit h-fit top-0 translate -translate-x-20 translate-y-25 md:-translate-x-30 md:translate-y-45 -rotate-12 text-sm">
        <p>Drag the ID!</p>
        <div>↓↓↓</div>
      </div>
    </div>
  );
}
