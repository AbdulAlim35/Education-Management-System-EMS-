import React from "react";
import PrimaryButton from "@/components/share/PrimaryButton";
import InputText from "@/components/share/InputText";
import { useForm } from "react-hook-form";
export default function AuthFormLayout({student, studentFields }) {
     const from = useForm();
  return (
    <>
      <form
        onSubmit={from.handleSubmit(student.onSubmit)}
        className="grid grid-cols-12 gap-4"
      >
        {studentFields &&
          studentFields().map((field, index) => {
            if (field.type === "button") {
              return (
                <div key={index} className={`${field.colSpan}`}>
                  <PrimaryButton label={field.label} type={field.action}/>
                </div>
              );
            } else {
              return (
                <div key={index} className={`${field.colSpan}`}>
                  <InputText
                    {...from.register(field.name)}
                    label={field.label}
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                </div>
              );
            }
          })}
      </form>
    </>
  );
}
