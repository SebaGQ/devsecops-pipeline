import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";

ClassNameGenerator.configure((componentName) => {
  let newComponentName = componentName;
  // you can replace Mui, default prefix of every component with new one you want
  newComponentName = newComponentName.replace("Mui", "Netflix");
  // you can replace default classname of component with new one you want
  newComponentName = newComponentName.replace("Button", "Btn");

  // Vulnerabilidad: declaración debugger utilizada
  debugger;

  return newComponentName;
});
