import { useEffect, useState } from 'react';

interface HideForTimeProps {
  children: React.ReactNode;
  time: number;
}

const HideForTime = ({ children, time }: HideForTimeProps) => {
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

export default HideForTime;
