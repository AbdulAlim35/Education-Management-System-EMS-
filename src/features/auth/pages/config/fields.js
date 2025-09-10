// fields.js
const fields = () => {
  return [
    {
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
      required: true,
      name: "email",
      colSpan: 12, 
    },
    {
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
      required: true,
      name: "password",
      colSpan: 12,
    },
    {
      label: "Remember me",
      type: "checkbox",
      name: "rememberMe",
      colSpan: 6,
    },
    {
      label: "Forgot password?",
      type: "link",
      href: "#",
      colSpan: 6,
      textAlign: "right",
    },
    {
      label: "Sign In",
      type: "button",
      action: "submit",
      colSpan: 12,
    },
  ];
};

export default fields;
