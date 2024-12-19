import React, { useEffect, useState } from "react";

interface HideForTimeProps {
  children: React.ReactNode;
  time: number;
}

export function HideForTime({ children, time }: HideForTimeProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, time);

    return () => clearTimeout(timer);
  }, [time]);

  if (!show) {
    return null;
  }

  return <>{children}</>;
}
