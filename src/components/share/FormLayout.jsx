import InputText from "@/components/share/inputText";
import InputCheckbox from "@/components/share/InputCheckbox";
import PrimaryButton from "@/components/share/PrimaryButton";

export default function FormLayout({ fields: fieldsData }) {
  return (
    <form className="grid grid-cols-12 gap-4">
      {fieldsData &&
        fieldsData().map((field, index) => {
          const id = `field-${index}`;
          if (field.type === "checkbox") {
            return (
              <div className={`col-span-${field.colSpan}`} key={id}>
                <InputCheckbox label={field.label} id={id} />
              </div>
            );
          } else if (field.type === "link") {
            return (
              <div
                className={`col-span-${field.colSpan} text-${field.textAlign}`}
                key={id}
              >
                <a
                  href={field.href}
                  className="text-sm text-primary-600 hover:text-primary-500"
                >
                  {field.label}
                </a>
              </div>
            );
          } else if (field.type === "button") {
            return (
              <div className={`col-span-${field.colSpan}`} key={id}>
                <PrimaryButton label={field.label} />
              </div>
            );
          } else {
            // default: input text or other types
            return (
              <div className={`col-span-${field.colSpan}`} key={id}>
                <InputText
                  label={field.label}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              </div>
            );
          }
        })}
    </form>
  );
}
