import { motion, useScroll, useTransform, useSpring } from "motion/react";

import { useRef } from "react";

import React from "react";

function Marquee({ text }) {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end end"],
	});
	const xTransform = useTransform(scrollYProgress, [0, 1], ["-50%", "-47%"]);
	const xSpring = useSpring(xTransform, {
		stiffness: 200,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<div ref={targetRef} className="bg-yellow relative py-2 overflow-hidden">
			<motion.div
				className="text-4xl relative flex gap-10 "
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
			</motion.div>
		</div>
	);
}

export default Marquee;
