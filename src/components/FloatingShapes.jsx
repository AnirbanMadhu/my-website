export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />

      {/* Decorative Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-primary/20 rounded-lg rotate-12 animate-rotate-slow" />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-secondary/20 rounded-full animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg animate-wave" />

      {/* Gradient Orbs */}
      <div className="absolute top-60 left-1/2 w-64 h-64 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-2xl animate-blob" />
      <div className="absolute bottom-60 right-1/2 w-48 h-48 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-2xl animate-blob" style={{ animationDelay: '3s' }} />
    </div>
  );
};
