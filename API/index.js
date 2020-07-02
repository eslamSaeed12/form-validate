import { fromEvents } from "./Events/index.js";
import { EventStream } from "./Events/eventStream.js";

 const FormValidate = (name, validation) => {
  const form =  document.querySelector("." + name);
  EventStream.form = {form, ...validation };
  return fromEvents("DOMContentLoaded");
}
export default FormValidate;