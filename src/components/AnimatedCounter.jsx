import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import PropTypes from "prop-types";

export const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "", decimals = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <span ref={ref}>
      {inView && (
        <CountUp
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
        />
      )}
    </span>
  );
};

AnimatedCounter.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  suffix: PropTypes.string,
  prefix: PropTypes.string,
  decimals: PropTypes.number,
};

// Stats Section Example
export const StatsSection = () => {
  const stats = [
    {
      value: 50,
      suffix: "+",
      label: "Projects Completed",
      color: "text-blue-500",
    },
    {
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
      color: "text-green-500",
    },
    {
      value: 5,
      suffix: "+",
      label: "Years Experience",
      color: "text-purple-500",
    },
    {
      value: 30,
      suffix: "+",
      label: "Happy Clients",
      color: "text-orange-500",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`text-5xl font-bold mb-2 ${stat.color}`}>
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
