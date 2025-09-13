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
