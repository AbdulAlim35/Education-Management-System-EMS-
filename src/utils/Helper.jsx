import toast from "react-hot-toast";
export const singleValidataionError = (formData, name) => {
  return (
    formData.form.formState.errors &&
    formData.form.formState.errors[name] && (
      <p className=" text-xs mt-1 text-red-500">
        {formData.form.formState.errors[name].message}
      </p>
    )
  );
};

export const servierValidataionError = (error, form) => {
  const { data } = error.response;
  if (data.message && !data.errors) {
    toast.error(data.message || "Something went wrong");
  } else {
    data.errors.forEach((err) => {
      form.setError(err.path, {
        type: "server",
        message: err.msg,
      });
    });
  }
};
