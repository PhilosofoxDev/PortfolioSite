import { useEffect, useRef } from "react";
import { useNavigationType } from "react-router-dom";

export default function Page() {
  const targetRef = useRef(null);
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "PUSH") {
      targetRef.current?.scrollIntoView({
        block: "start",
        behavior: "smooth",
        easeing: "ease-in-out",
      });
    }
  }, [navigationType]);
  return (
    <div className="scroll-mt-38" ref={targetRef}>
      <div></div>
    </div>
  );
}
