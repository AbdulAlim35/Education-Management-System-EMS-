import InputText from "@/components/share/InputText";
import InputCheckbox from "@/components/share/InputCheckbox";
import PrimaryButton from "@/components/share/PrimaryButton";
import { singleValidataionError } from "@/utils/Helper";
import DropDown from "@/components/share/DropDown";
export default function FormLayout({ formData, fields: fieldsData }) {
  const id = crypto.randomUUID();
 
  return (
    <form
      onSubmit={formData.form.handleSubmit(
        formData.form.watch("_id")
          ? formData.action.onUpdate
          : formData.action.onSubmit
      )}
      className="grid grid-cols-12 gap-5"
    >
      {fieldsData &&
        fieldsData().map((field, index) => {
          if (field.type === "checkbox") {
            return (
              <div
                className={`${field.colSpan} text-${field.textAlign}`}
                key={id + index}
              >
                <InputCheckbox
                  {...formData.form.register(field.name, {
                    required: field.required,
                  })}
                  label={field.label}
                  id={id}
                />
                {singleValidataionError(formData, field.name)}
              </div>
            );
          } else if (field.type === "link") {
            return (
              <div
                className={`${field.colSpan} ${field.textAlign}`}
                key={id + index}
              >
                <a
                  href={field.href}
                  className={`text-sm text-primary-600 hover:text-primary-500 `}
                >
                  {field.label}
                </a>
              </div>
            );
          } else if (field.type === "button") {
            return (
              <div className={`${field.colSpan}`} key={id + index}>
                <PrimaryButton label={field.label} />
              </div>
            );
          } else if (field.type === "dropdown"){
            return (
              <div className={`${field.colSpan}`} key={id + index}>
                <DropDown
                  {...formData.form.register(field.name, {
                    required: field.required
                      ? `${field.label} is required`
                      : false,
                  })}
                  label={field.label}
                  options={field.options} 
                  placeholder={field.placeholder}
                />
                {singleValidataionError(formData, field.name)}
              </div>
            );
          }
          else {
            // default: input text or other types
            return (
              <div className={`${field.colSpan}`} key={id + index}>
                <InputText
                  {...formData.form.register(field.name, {
                    required: field.required
                      ? `${field.label} is required`
                      : false,
                  })}
                  label={field.label}
                  placeholder={field.placeholder}
                  type={field.type}
                />
                {singleValidataionError(formData, field.name)}
              </div>
            );
          }
        })}
    </form>
  );
}
