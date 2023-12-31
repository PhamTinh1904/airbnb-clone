"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <h5 className="font-light text-neutral-500 mt-2 mb-4">{subtitle}</h5>
    </div>
  );
};

export default Heading; 
