import { toast } from "react-hot-toast";

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
