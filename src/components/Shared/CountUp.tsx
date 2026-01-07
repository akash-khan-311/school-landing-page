"use client";
import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

export default function Counter({ count }: { count: number }) {
  const [counterOn, setCounterOn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounterOn(true);
        } else {
          setCounterOn(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <>
      <span ref={ref}>
        {counterOn && <CountUp duration={5} start={0} end={count} />}
      </span>
    </>
  );
}
