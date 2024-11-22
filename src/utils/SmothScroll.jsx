import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  // lenis options for configuration
  const lenisOptions = {
    lerp: 0.05,
    duration: 0.3,
    smoothTouch: true, //smooth scroll for touch devices
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;