import React, { useEffect, useRef, useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Navbar from "./Navbar";

const Container = () => {
  const container = useRef(null);
  const [stops, setStops] = useState({ left: [], top: [] });
  const [size, setSize] = useState(() => window.innerWidth);

  const { scrollYProgress, scrollY } = useScroll({
    container: container,
  });
  useMotionValueEvent(scrollYProgress, "change", (lat) => {
    console.log(lat);
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const springProgress = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const scrollX =
    size > 640
      ? useTransform(
          springProgress,
          [0, 40, 80, 100],
          [
            0,
            parseInt(`-${stops.left[0]}`),
            parseInt(`-${stops.left[0]}`),
            parseInt(`-${stops.left[1]}`),
          ]
        )
      : 0;
  const scrolllY =
    size > 640
      ? 0
      : useTransform(
          springProgress,
          [0, 40, 80, 100],
          [
            0,
            parseInt(`-${stops.top[0]}`),
            parseInt(`-${stops.top[0]}`),
            parseInt(`-${stops.top[1]}`),
          ]
        );

  const containerStyle = {
    height: "100vh", // Full small viewport height
    // Prevent body scrolling
    position: "relative",
    backgroundColor: "#f4f4f4",
  };

  useEffect(() => {
    function handleResize() {
      // setSize(window.innerWidth)
      window.location.reload();
    }
    if (container.current) {
      const pages = Array.from(container.current.querySelectorAll(".stop"));
      pages.forEach((page) => {
        setStops((prev) => {
          return {
            left: [...prev.left, Math.floor(page.getBoundingClientRect().left)],
            top: [...prev.top, Math.floor(page.getBoundingClientRect().top)],
          };
        });
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={container}
      style={containerStyle}
      className="hero overflow-y-auto overflow-x-hidden "
    >
      <div className={"h-[800vh] box-border relative "}>
        <div className="sticky left-0 top-0 w-full h-screen bg-[var(--silk)] dark:bg-bg-dark  overflow-hidden">
          <Navbar stops={stops}></Navbar>
          <motion.div
            className="content bg-inherit flex  flex-col sm:flex-row "
            style={{ x: scrollX, y: scrolllY }}
          >
            <Page1 progress={springProgress} size={size} />
            <Page2 progress={springProgress} size={size} />
            <Page3 progress={springProgress} size={size} />
            <Page4 progress={springProgress} size={size} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Container;
