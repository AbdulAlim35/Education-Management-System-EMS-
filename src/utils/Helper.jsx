import toast from "react-hot-toast";


export const singleValidataonError = (formData, fieldName) => {
  const error = formData?.form?.formState?.errors?.[fieldName];
  return (
    error && (
      <p className="text-xs mt-1 text-red-500">
        {error.message}
      </p>
    )
  );
};


export const serverValidataonError = (error, form) => {
  const data = error?.response?.data;

  if (!data) {
    toast.error("Server not responding. Please try again later.");
    console.error("Error object:", error);
    return;
  }

  if (data.message && !data.errors) {
    toast.error(data.message || "Something went wrong");
  } else if (Array.isArray(data.errors)) {
    data.errors.forEach((err) => {
      if (err.path && err.msg) {
        form.setError(err.path, {
          type: "server",
          message: err.msg,
        });
      }
    });
  } else {
    toast.error("Unexpected error format from server.");
  }
};
