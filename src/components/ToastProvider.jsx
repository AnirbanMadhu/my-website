import { Toaster as HotToaster, toast } from "react-hot-toast";

// Toast Provider Component
export const ToastProvider = () => {
  return (
    <HotToaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        // Default options
        duration: 4000,
        style: {
          background: "hsl(var(--card))",
          color: "hsl(var(--card-foreground))",
          border: "1px solid hsl(var(--border))",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        // Success style
        success: {
          duration: 3000,
          iconTheme: {
            primary: "#10b981",
            secondary: "#fff",
          },
        },
        // Error style
        error: {
          duration: 4000,
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
        },
        // Loading style
        loading: {
          iconTheme: {
            primary: "#6366f1",
            secondary: "#fff",
          },
        },
      }}
    />
  );
};

// Toast utility functions
export const showToast = {
  success: (message) => {
    toast.success(message, {
      style: {
        background: "#10b981",
        color: "#fff",
      },
    });
  },
  error: (message) => {
    toast.error(message, {
      style: {
        background: "#ef4444",
        color: "#fff",
      },
    });
  },
  loading: (message) => {
    return toast.loading(message);
  },
  promise: (promise, messages) => {
    toast.promise(promise, {
      loading: messages.loading,
      success: messages.success,
      error: messages.error,
    });
  },
  custom: (message, options = {}) => {
    toast(message, options);
  },
  dismiss: (toastId) => {
    toast.dismiss(toastId);
  },
};

// Example Component using toasts
export const ToastDemo = () => {
  const handleSuccessToast = () => {
    showToast.success("Successfully saved!");
  };

  const handleErrorToast = () => {
    showToast.error("Something went wrong!");
  };

  const handleLoadingToast = () => {
    const toastId = showToast.loading("Loading...");

    // Simulate async operation
    setTimeout(() => {
      showToast.dismiss(toastId);
      showToast.success("Done!");
    }, 2000);
  };

  const handlePromiseToast = () => {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => resolve(), 2000);
    });

    showToast.promise(myPromise, {
      loading: "Saving...",
      success: "Saved successfully!",
      error: "Failed to save",
    });
  };

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Toast Notifications Demo</h2>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleSuccessToast}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Success Toast
        </button>
        <button
          onClick={handleErrorToast}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Error Toast
        </button>
        <button
          onClick={handleLoadingToast}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Loading Toast
        </button>
        <button
          onClick={handlePromiseToast}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          Promise Toast
        </button>
      </div>
    </div>
  );
};
