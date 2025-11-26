import { motion } from "framer-motion";

export const GradientBlobs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1 - Purple */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "10%", left: "10%" }}
      />

      {/* Blob 2 - Blue */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "50%", right: "10%" }}
      />

      {/* Blob 3 - Pink */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.5) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ bottom: "15%", left: "50%" }}
      />

      {/* Blob 4 - Cyan */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "70%", right: "30%" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg5OSwgMTAyLCAyNDEsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
    </div>
  );
};

// Simpler static version for better performance
export const GradientBlobsSimple = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Light mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-transparent dark:via-transparent dark:to-transparent" />

      {/* Dark mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="absolute top-0 left-0 w-full h-full">
        {/* Purple blob */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/30 dark:bg-purple-600/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob" />

        {/* Blue blob */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300/30 dark:bg-blue-600/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob"
             style={{ animationDelay: '2s' }} />

        {/* Pink blob */}
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300/30 dark:bg-pink-600/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob"
             style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};
