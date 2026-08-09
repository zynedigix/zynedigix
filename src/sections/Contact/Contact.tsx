import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedinIn, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import "./Contact.css";
import { contactInfo, services, socialLinks, projectTimelines } from "./ContactData";

export default function Contact() {
const [formData,setFormData]=useState({
name:"",
email:"",
phone:"",
company:"",
service:"",
timeline:"As Soon As Possible",
message:""
});

const [errors,setErrors]=useState<Record<string,string>>({});

const getIcon=(name:string)=>{
switch(name){
case "Instagram":
return <FaInstagram/>;
case "YouTube":
return <FaYoutube/>;
case "X":
return <FaXTwitter/>;
case "LinkedIn":
return <FaLinkedinIn/>;
case "WhatsApp":
return <FaWhatsapp/>;
default:
return null;
}
};

const validate=()=>{
const newErrors:Record<string,string>={};

if(formData.name.trim().length<3)
newErrors.name="Please enter your full name.";

if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
newErrors.email="Please enter a valid email address.";

if(!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g,"")))
newErrors.phone="Please enter a valid mobile number.";

if(!formData.service)
newErrors.service="Please select a service.";

if(formData.message.trim().length<20)
newErrors.message="Please enter at least 20 characters.";

setErrors(newErrors);

return Object.keys(newErrors).length===0;
};

const handleChange=(
e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>
)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});

if(errors[e.target.name]){
setErrors({
...errors,
[e.target.name]:""
});
}
};

const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault();

if(!validate()) return;

alert("Form submitted successfully!");
};

return(
<section className="contact-section" id="contact">
<div className="contact-container">

<motion.div
className="contact-left"
initial={{opacity:0,x:-60}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:.7}}
>

<span className="contact-label">GET IN TOUCH</span>

<h2>Let's Build<br/>Something Amazing</h2>

<p>We'd love to hear about your business, startup or digital idea. Tell us what you're planning and we'll help you bring it to life.</p>

<div className="contact-info">

<div className="contact-item">
<Mail size={20}/>
<span>{contactInfo.email}</span>
</div>

<div className="contact-item">
<Phone size={20}/>
<span>{contactInfo.phone}</span>
</div>

<div className="contact-item">
<MapPin size={20}/>
<span>{contactInfo.location}</span>
</div>

<div className="contact-item">
<Clock size={20}/>
<span>{contactInfo.availability}</span>
</div>

</div>

<div className="contact-socials">
{socialLinks.map((social)=>(
<a
key={social.name}
href={social.url}
target="_blank"
rel="noopener noreferrer"
aria-label={social.name}
>
{getIcon(social.name)}
</a>
))}
</div>

</motion.div>

<motion.div
className="contact-right"
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:.7,delay:.15}}
>

<form className="contact-form" onSubmit={handleSubmit}>
  <div className="form-grid">
<div className="form-group">
<label>Full Name *</label>
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Enter your full name"
className={errors.name?"error-border":""}
/>
{errors.name&&<small className="error">{errors.name}</small>}
</div>

<div className="form-group">
<label>Email Address *</label>
<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="Enter your email address"
className={errors.email?"error-border":""}
/>
{errors.email&&<small className="error">{errors.email}</small>}
</div>
</div>

<div className="form-grid">
<div className="form-group">
<label>Phone / WhatsApp *</label>
<input
type="tel"
name="phone"
value={formData.phone}
onChange={handleChange}
placeholder="+91 XXXXX XXXXX"
className={errors.phone?"error-border":""}
/>
{errors.phone&&<small className="error">{errors.phone}</small>}
</div>

<div className="form-group">
<label>Company Name</label>
<input
type="text"
name="company"
value={formData.company}
onChange={handleChange}
placeholder="Your company (Optional)"
/>
</div>
</div>

<div className="form-grid">
<div className="form-group select-group">
<label>Service Interested In *</label>
<select
name="service"
value={formData.service}
onChange={handleChange}
className={errors.service?"error-border":""}
>
<option value="">Select a service</option>
{services.map(service=>(
<option key={service} value={service}>
{service}
</option>
))}
</select>
{errors.service&&<small className="error">{errors.service}</small>}
</div>

<div className="form-group select-group">
<label>Project Timeline</label>
<select
name="timeline"
value={formData.timeline}
onChange={handleChange}
>
{projectTimelines.map(timeline=>(
<option key={timeline} value={timeline}>
{timeline}
</option>
))}
</select>
</div>
</div>

<div className="form-group">
<label>Tell Us About Your Project *</label>
<textarea
rows={6}
name="message"
value={formData.message}
onChange={handleChange}
placeholder="Tell us about your project, goals, ideas or any specific requirements..."
className={errors.message?"error-border":""}
/>
{errors.message&&<small className="error">{errors.message}</small>}
</div>

<button className="contact-submit" type="submit">
<span>Start Your Project</span>
<Send size={18}/>
</button>

</form>
</motion.div>
</div>
</section>
);
}