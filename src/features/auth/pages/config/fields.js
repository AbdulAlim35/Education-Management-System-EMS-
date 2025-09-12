// fields.js
const fields = () => {
  return [
    {
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
      required: true,
      name: "email",
      colSpan: "col-span-12", 
    },
    {
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
      required: true,
      name: "password",
      colSpan: 'col-span-12',
    },
    {
      label: "Remember me",
      type: "checkbox",
      name: "rememberMe",
      colSpan: 'col-span-6',
    },
    {
      label: "Forgot password?",
      type: "link",
      href: "#",
      colSpan: 'col-span-6',
      textAlign: "text-right",
    },
    {
      label: "Sign In",
      type: "button",
      action: "submit",
      colSpan: 'col-span-12',
    },
  ];
};

export default fields;
