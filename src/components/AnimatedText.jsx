import { RoughNotation } from "react-rough-notation";
import PropTypes from "prop-types";

export const AnimatedText = ({
  children,
  type = "highlight",
  color = "#6366f1",
  animationDelay = 1000,
  strokeWidth = 2,
  iterations = 2,
}) => {
  return (
    <RoughNotation
      type={type}
      show={true}
      color={color}
      animationDelay={animationDelay}
      strokeWidth={strokeWidth}
      iterations={iterations}
    >
      {children}
    </RoughNotation>
  );
};

AnimatedText.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    "underline",
    "box",
    "circle",
    "highlight",
    "strike-through",
    "crossed-off",
    "bracket",
  ]),
  color: PropTypes.string,
  animationDelay: PropTypes.number,
  strokeWidth: PropTypes.number,
  iterations: PropTypes.number,
};

// Example usage component
export const AnimatedTextShowcase = () => {
  return (
    <div className="space-y-8 p-8">
      <h2 className="text-4xl font-bold">
        I&apos;m a{" "}
        <AnimatedText type="highlight" color="#fbbf24">
          Full Stack Developer
        </AnimatedText>
      </h2>

      <p className="text-2xl">
        Specialized in{" "}
        <AnimatedText type="underline" color="#ef4444">
          React
        </AnimatedText>
        ,{" "}
        <AnimatedText type="underline" color="#3b82f6">
          Node.js
        </AnimatedText>
        , and{" "}
        <AnimatedText type="underline" color="#10b981">
          TypeScript
        </AnimatedText>
      </p>

      <p className="text-xl">
        <AnimatedText type="circle" color="#8b5cf6" animationDelay={1500}>
          Let&apos;s build something amazing!
        </AnimatedText>
      </p>

      <p className="text-xl">
        <AnimatedText type="box" color="#ec4899">
          Available for hire
        </AnimatedText>
      </p>
    </div>
  );
};
