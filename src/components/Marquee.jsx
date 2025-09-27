import { motion, useScroll, useTransform, useSpring } from "motion/react";

import { useRef } from "react";

function Marquee({ text }) {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	const xTransform = useTransform(scrollYProgress, [0, 1], ["-50%", "-20%"]);
	const xSpring = useSpring(xTransform, {
		stiffness: 200,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<div
			ref={targetRef}
			className="bg-yellow relative py-1 md:py-2 overflow-hidden"
		>
			<motion.div
				className=" text-2xl md:text-4xl relative flex gap-10 "
				style={{ left: xSpring }}
			>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
				<span>{text}</span>
			</motion.div>
			<slot />
		</div>
	);
}

export default Marquee;
