import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const s="feedback-form-state",r=document.querySelector(".feedback-form"),t={form:document.querySelector(".feedback-form")},e={email:"",message:""};t.form.addEventListener("input",a=>{e.email=a.currentTarget.elements.email.value,e.message=a.currentTarget.elements.message.value,localStorage.setItem(s,JSON.stringify(e))});r.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(s),e.email="",e.message="",r.reset()});window.addEventListener("DOMContentLoaded",()=>{const a=localStorage.getItem(s);if(a){const m=JSON.parse(a);e.email=m.email,e.message=m.message,t.form.elements.email.value=e.email,t.form.elements.message.value=e.message}});
//# sourceMappingURL=2-form.js.map
