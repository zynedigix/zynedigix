import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
} from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import "./Contact.css";
import {
  contactInfo,
  services,
  socialLinks,
  projectTimelines,
} from "./ContactData";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  timeline: string;
  message: string;
};

type FormErrors = Record<string, string>;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    timeline: "As Soon As Possible",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const getIcon = (name: string) => {
    switch (name) {
      case "Instagram":
        return <FaInstagram />;

      case "YouTube":
        return <FaYoutube />;

      case "X":
        return <FaXTwitter />;

      case "LinkedIn":
        return <FaLinkedinIn />;

      case "WhatsApp":
        return <FaWhatsapp />;

      default:
        return null;
    }
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid mobile number.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (formData.message.trim().length < 20) {
      newErrors.message = "Please enter at least 20 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }

    if (submitError) {
      setSubmitError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setSubmitError("");

    if (!validate()) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "Unable to send your message. Please try again."
        );
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        timeline: "As Soon As Possible",
        message: "",
      });

      setErrors({});
      setShowSuccess(true);
    } catch (error) {
      console.error("Contact form submission error:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          {/* =====================================================
              LEFT PANEL
          ====================================================== */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="contact-label">GET IN TOUCH</span>

            <h2>
              Let&apos;s Build
              <br />
              Something
              <br />
              <span>Exceptional.</span>
            </h2>

            <p>
              Have an idea, project, or digital experience in mind?
              Let&apos;s talk about how we can turn it into something
              meaningful, memorable, and built for impact.
            </p>

            <div className="contact-info">
              <a
                href={`mailto:${contactInfo.email}`}
                className="contact-item"
              >
                <Mail size={22} />
                <span>{contactInfo.email}</span>
              </a>

              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="contact-item"
              >
                <Phone size={22} />
                <span>{contactInfo.phone}</span>
              </a>

              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(
                  /\D/g,
                  ""
                )}`}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <FaWhatsapp size={22} />
                <span>{contactInfo.whatsapp}</span>
              </a>

              <div className="contact-item">
                <MapPin size={22} />
                <span>{contactInfo.location}</span>
              </div>

              <div className="contact-item">
                <Clock size={22} />
                <span>{contactInfo.availability}</span>
              </div>
            </div>

            <div className="contact-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  {getIcon(social.name)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT PANEL
          ====================================================== */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-grid">
                {/* NAME */}
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    className={errors.name ? "error-border" : ""}
                  />

                  {errors.name && (
                    <span className="error">{errors.name}</span>
                  )}
                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={errors.email ? "error-border" : ""}
                  />

                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                {/* PHONE */}
                <div className="form-group">
                  <label htmlFor="phone">Mobile Number *</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    autoComplete="tel"
                    inputMode="numeric"
                    className={errors.phone ? "error-border" : ""}
                  />

                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>

                {/* COMPANY */}
                <div className="form-group">
                  <label htmlFor="company">Company / Brand</label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company or brand name"
                    autoComplete="organization"
                  />
                </div>

                {/* SERVICE */}
                <div className="form-group select-group">
                  <label htmlFor="service">What do you need? *</label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={errors.service ? "error-border" : ""}
                  >
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  {errors.service && (
                    <span className="error">{errors.service}</span>
                  )}
                </div>

                {/* TIMELINE */}
                <div className="form-group select-group">
                  <label htmlFor="timeline">Project Timeline</label>

                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    {projectTimelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="form-group">
                <label htmlFor="message">Tell us about your project *</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your idea, goals, requirements, budget, or anything else that would help us understand your project."
                  className={errors.message ? "error-border" : ""}
                />

                {errors.message && (
                  <span className="error">{errors.message}</span>
                )}
              </div>

              {/* SERVER ERROR */}
              {submitError && (
                <div
                  role="alert"
                  style={{
                    marginTop: "16px",
                    color: "#ef4444",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {submitError}
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={19} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SUCCESS MODAL
      ========================================================== */}
      {showSuccess && (
        <div
          className="success-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
        >
          <motion.div
            className="success-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="success-icon">
              <Check size={36} strokeWidth={3} />
            </div>

            <h3 id="contact-success-title">Thank You!</h3>

            <p>
              Your message has been sent successfully. We&apos;ll review
              your enquiry and get back to you soon.
            </p>

            <button
              type="button"
              className="success-btn"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}