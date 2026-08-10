import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  X,
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

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export default function Contact() {
  // ============================================================
  // FORM STATE
  // ============================================================

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

  const [submitError, setSubmitError] = useState("");

  // ============================================================
  // SUCCESS MODAL
  // ============================================================

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // ============================================================
  // SOCIAL ICON HELPER
  // ============================================================

  const getSocialIcon = (name: string) => {
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

  // ============================================================
  // CONTACT ICON HELPER
  // ============================================================

  const getContactIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "email":
        return <Mail size={22} />;

      case "phone":
        return <Phone size={22} />;

      case "whatsapp":
        return <FaWhatsapp size={22} />;

      case "location":
        return <MapPin size={22} />;

      case "clock":
        return <Clock size={22} />;

      default:
        return <Mail size={22} />;
    }
  };

  // ============================================================
  // VALIDATION
  // ============================================================

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // NAME
    if (formData.name.trim().length < 3) {
      newErrors.name = "Please enter your full name.";
    }

    // EMAIL
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // PHONE
    const cleanPhone = formData.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone =
        "Please enter a valid 10-digit mobile number.";
    }

    // SERVICE
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    // MESSAGE
    if (formData.message.trim().length < 20) {
      newErrors.message =
        "Please enter at least 20 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ============================================================
  // HANDLE INPUT CHANGE
  // ============================================================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
        HTMLTextAreaElement |
        HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Clear field error
    if (errors[name as keyof FormErrors]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }

    // Clear server error
    if (submitError) {
      setSubmitError("");
    }
  };

  // ============================================================
  // HANDLE FORM SUBMIT
  // ============================================================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Prevent double submit
    if (isSubmitting) {
      return;
    }

    setSubmitError("");

    // Validate
    if (!validate()) {
      return;
    }

    try {
      setIsSubmitting(true);

      // ========================================================
      // SEND TO VERCEL API
      // ========================================================

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          service: formData.service,
          timeline: formData.timeline,
          message: formData.message.trim(),
        }),
      });

      const result = await response.json().catch(() => null);

      // ========================================================
      // API ERROR
      // ========================================================

      if (!response.ok) {
        throw new Error(
          result?.error ||
            result?.message ||
            "Unable to send your message. Please try again."
        );
      }

      // ========================================================
      // SUCCESS
      // ========================================================

      // Open centered modal
      setShowSuccessModal(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        timeline: "As Soon As Possible",
        message: "",
      });

      // Clear validation errors
      setErrors({});
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ============================================================
  // CLOSE SUCCESS MODAL
  // ============================================================

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <>
      {/* ========================================================
          CONTACT SECTION
      ======================================================== */}

      <section
        id="contact"
        className="contact-section"
      >
        <div className="contact-container">

          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            className="contact-left"
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* EYEBROW */}

            <div className="contact-label">
              GET IN TOUCH
            </div>

            {/* TITLE */}

            <h2 className="contact-title">
              Let's Build
              <br />
              Something
              <br />
              <span>Extraordinary.</span>
            </h2>

            {/* DESCRIPTION */}

            <p className="contact-description">
              Have a project in mind? Tell us about it.
              Whether you need a premium website, SaaS
              product, AI experience, or an immersive 3D
              digital experience, we'd love to hear from you.
            </p>

            {/* ==================================================
                CONTACT INFORMATION
            ================================================== */}

            <div className="contact-info">

              {/* EMAIL */}

              <a
                href={`mailto:${contactInfo.email}`}
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <Mail size={22} />
                </div>

                <span>
                  {contactInfo.email}
                </span>
              </a>

              {/* PHONE */}

              <a
                href={`tel:${contactInfo.phone.replace(
                  /\s/g,
                  ""
                )}`}
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <Phone size={22} />
                </div>

                <span>
                  {contactInfo.phone}
                </span>
              </a>

              {/* WHATSAPP */}

              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(
                  /\D/g,
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <FaWhatsapp size={22} />
                </div>

                <span>
                  {contactInfo.whatsapp}
                </span>
              </a>

              {/* LOCATION */}

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={22} />
                </div>

                <span>
                  {contactInfo.location}
                </span>
              </div>

              {/* AVAILABILITY */}

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Clock size={22} />
                </div>

                <span>
                  {contactInfo.availability}
                </span>
              </div>

            </div>

            {/* ==================================================
                SOCIAL LINKS
            ================================================== */}

            <div className="contact-socials">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}

            </div>

          </motion.div>

          {/* ==================================================
              RIGHT SIDE — CONTACT FORM
          ================================================== */}

          <motion.div
            className="contact-right"
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="contact-form-header">

              <span className="contact-form-eyebrow">
                START A PROJECT
              </span>

              <h3>
                Tell us about your project
              </h3>

              <p>
                Fill out the form below and we'll get
                back to you shortly.
              </p>

            </div>

            {/* ==================================================
                FORM
            ================================================== */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* ==================================================
                  NAME + EMAIL
              ================================================== */}

              <div className="contact-form-row">

                {/* NAME */}

                <div className="contact-form-group">

                  <label htmlFor="name">
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    className={
                      errors.name
                        ? "error-border"
                        : ""
                    }
                  />

                  {errors.name && (
                    <span className="form-error">
                      {errors.name}
                    </span>
                  )}

                </div>

                {/* EMAIL */}

                <div className="contact-form-group">

                  <label htmlFor="email">
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={
                      errors.email
                        ? "error-border"
                        : ""
                    }
                  />

                  {errors.email && (
                    <span className="form-error">
                      {errors.email}
                    </span>
                  )}

                </div>

              </div>

              {/* ==================================================
                  PHONE + COMPANY
              ================================================== */}

              <div className="contact-form-row">

                {/* PHONE */}

                <div className="contact-form-group">

                  <label htmlFor="phone">
                    Mobile Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    autoComplete="tel"
                    inputMode="numeric"
                    className={
                      errors.phone
                        ? "error-border"
                        : ""
                    }
                  />

                  {errors.phone && (
                    <span className="form-error">
                      {errors.phone}
                    </span>
                  )}

                </div>

                {/* COMPANY */}

                <div className="contact-form-group">

                  <label htmlFor="company">
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    autoComplete="organization"
                  />

                </div>

              </div>

              {/* ==================================================
                  SERVICE + TIMELINE
              ================================================== */}

              <div className="contact-form-row">

                {/* SERVICE */}

                <div className="contact-form-group">

                  <label htmlFor="service">
                    Service *
                  </label>

                  <div className="select-wrapper">

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={
                        errors.service
                          ? "error-border"
                          : ""
                      }
                    >

                      <option value="">
                        Select a service
                      </option>

                      {services.map(
                        (
                          service: any,
                          index: number
                        ) => {

                          const value =
                            typeof service === "string"
                              ? service
                              : service.name ||
                                service.title ||
                                "";

                          return (
                            <option
                              key={
                                service.id ||
                                index
                              }
                              value={value}
                            >
                              {value}
                            </option>
                          );
                        }
                      )}

                    </select>

                  </div>

                  {errors.service && (
                    <span className="form-error">
                      {errors.service}
                    </span>
                  )}

                </div>

                {/* TIMELINE */}

                <div className="contact-form-group">

                  <label htmlFor="timeline">
                    Project Timeline
                  </label>

                  <div className="select-wrapper">

                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >

                      {projectTimelines.map(
                        (
                          timeline: any,
                          index: number
                        ) => {

                          const value =
                            typeof timeline ===
                            "string"
                              ? timeline
                              : timeline.name ||
                                timeline.label ||
                                timeline.title ||
                                "";

                          return (
                            <option
                              key={index}
                              value={value}
                            >
                              {value}
                            </option>
                          );
                        }
                      )}

                    </select>

                  </div>

                </div>

              </div>

              {/* ==================================================
                  MESSAGE
              ================================================== */}

              <div className="contact-form-group">

                <label htmlFor="message">
                  Project Details *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, budget, or anything else you'd like us to know..."
                  className={
                    errors.message
                      ? "error-border"
                      : ""
                  }
                />

                {errors.message && (
                  <span className="form-error">
                    {errors.message}
                  </span>
                )}

              </div>

              {/* ==================================================
                  SERVER ERROR
              ================================================== */}

              {submitError && (
                <div
                  className="submit-error"
                  role="alert"
                >
                  {submitError}
                </div>
              )}

              {/* ==================================================
                  SUBMIT BUTTON
              ================================================== */}

              <button
                type="submit"
                className="contact-submit-button"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >

                {isSubmitting ? (
                  <>
                    <span className="button-spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}

              </button>

            </form>

          </motion.div>

        </div>
      </section>

      {/* ========================================================
          SUCCESS MODAL
          
          IMPORTANT:
          This is completely OUTSIDE the contact grid.
          It will therefore appear over the entire viewport.
      ======================================================== */}

      <AnimatePresence>

        {showSuccessModal && (

          <motion.div
            className="success-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={closeSuccessModal}
          >

            <motion.div
              className="success-modal"
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >

              {/* CLOSE X */}

              <button
                type="button"
                className="success-modal-close"
                onClick={closeSuccessModal}
                aria-label="Close success message"
              >
                <X size={20} />
              </button>

              {/* SUCCESS ICON */}

              <div className="success-modal-icon">
                <Check
                  size={40}
                  strokeWidth={2.5}
                />
              </div>

              {/* TITLE */}

              <h3 id="success-modal-title">
                Thank You!
              </h3>

              {/* MESSAGE */}

              <p>
                Your message has been sent
                successfully.
                <br />
                We'll review your enquiry and
                get back to you soon.
              </p>

              {/* CLOSE BUTTON */}

              <button
                type="button"
                className="success-modal-button"
                onClick={closeSuccessModal}
              >
                Close
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}