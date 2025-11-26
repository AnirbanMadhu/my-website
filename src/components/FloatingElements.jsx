import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

export const FloatingElement = ({ children, delay = 0, duration = 3000 }) => {
  const props = useSpring({
    from: { transform: "translateY(0px)" },
    to: async (next) => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ transform: "translateY(-20px)" });
        await next({ transform: "translateY(0px)" });
      }
    },
    config: { duration },
    delay,
  });

  return <animated.div style={props}>{children}</animated.div>;
};

FloatingElement.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
};

// Example with floating cards
export const FloatingCards = () => {
  const cards = [
    {
      title: "Fast Performance",
      description: "Optimized for speed and efficiency",
      emoji: "⚡",
      delay: 0,
    },
    {
      title: "Modern Design",
      description: "Beautiful and intuitive interfaces",
      emoji: "🎨",
      delay: 500,
    },
    {
      title: "Responsive",
      description: "Works perfectly on all devices",
      emoji: "📱",
      delay: 1000,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Me?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <FloatingElement key={index} delay={card.delay}>
              <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow text-center">
                <div className="text-6xl mb-4">{card.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            </FloatingElement>
          ))}
        </div>
      </div>
    </section>
  );
};
