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

export default function Contact() {
  // ============================================================
  // FORM STATE
  // ============================================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    timeline: "As Soon As Possible",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitError, setSubmitError] = useState("");

  // IMPORTANT:
  // This controls the actual centered modal.
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // ============================================================
  // ICON HELPER
  // ============================================================

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

  // ============================================================
  // FORM VALIDATION
  // ============================================================

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Please enter your full name.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid mobile number.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (formData.message.trim().length < 20) {
      newErrors.message =
        "Please enter at least 20 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ============================================================
  // INPUT CHANGE
  // ============================================================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear server error when user starts editing again
    if (submitError) {
      setSubmitError("");
    }
  };

  // ============================================================
  // FORM SUBMIT
  // ============================================================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Validate form first
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Something went wrong. Please try again."
        );
      }

      // ========================================================
      // SUCCESS
      // ========================================================

      // This opens the CENTERED MODAL.
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

      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
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
  // CONTACT ICONS
  // ============================================================

  const getContactIcon = (type: string) => {
    switch (type) {
      case "email":
      case "Email":
        return <Mail />;

      case "phone":
      case "Phone":
        return <Phone />;

      case "location":
      case "Location":
        return <MapPin />;

      case "clock":
      case "Clock":
        return <Clock />;

      default:
        return <Mail />;
    }
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <>
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
            }}
          >
            <div className="contact-eyebrow">
              GET IN TOUCH
            </div>

            <h2 className="contact-title">
              Let's Build Something
              <span> Extraordinary.</span>
            </h2>

            <p className="contact-description">
              Have a project in mind? Tell us about it.
              Whether you need a premium website, SaaS
              product, AI experience, or an immersive 3D
              digital experience, we'd love to hear from you.
            </p>

            {/* CONTACT INFORMATION */}

            <div className="contact-info-list">
              {Array.isArray(contactInfo) &&
                contactInfo.map(
                  (item: any, index: number) => (
                    <div
                      className="contact-info-item"
                      key={item.id || index}
                    >
                      <div className="contact-info-icon">
                        {getContactIcon(
                          item.type ||
                            item.icon ||
                            ""
                        )}
                      </div>

                      <div className="contact-info-content">
                        {item.label && (
                          <span className="contact-info-label">
                            {item.label}
                          </span>
                        )}

                        <span className="contact-info-value">
                          {item.value ||
                            item.text ||
                            ""}
                        </span>
                      </div>
                    </div>
                  )
                )}
            </div>

            {/* SOCIAL LINKS */}

            <div className="contact-socials">
              {Array.isArray(socialLinks) &&
                socialLinks.map(
                  (social: any, index: number) => (
                    <a
                      key={social.name || index}
                      href={social.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={
                        social.name ||
                        "Social media"
                      }
                      className="contact-social-link"
                    >
                      {getIcon(
                        social.name ||
                          social.platform ||
                          ""
                      )}
                    </a>
                  )
                )}
            </div>
          </motion.div>

          {/* ==================================================
              RIGHT SIDE — FORM
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
            }}
          >
            <div className="contact-form-card">

              <div className="contact-form-header">
                <span className="contact-form-eyebrow">
                  START A PROJECT
                </span>

                <h3>
                  Tell us about your project
                </h3>

                <p>
                  Fill out the form below and we'll
                  get back to you shortly.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
              >

                {/* NAME + EMAIL */}

                <div className="contact-form-row">

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
                    />

                    {errors.name && (
                      <span className="form-error">
                        {errors.name}
                      </span>
                    )}
                  </div>

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
                    />

                    {errors.email && (
                      <span className="form-error">
                        {errors.email}
                      </span>
                    )}
                  </div>

                </div>

                {/* PHONE + COMPANY */}

                <div className="contact-form-row">

                  <div className="contact-form-group">
                    <label htmlFor="phone">
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      autoComplete="tel"
                    />

                    {errors.phone && (
                      <span className="form-error">
                        {errors.phone}
                      </span>
                    )}
                  </div>

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

                {/* SERVICE + TIMELINE */}

                <div className="contact-form-row">

                  <div className="contact-form-group">
                    <label htmlFor="service">
                      Service *
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select a service
                      </option>

                      {Array.isArray(services) &&
                        services.map(
                          (
                            service: any,
                            index: number
                          ) => (
                            <option
                              key={
                                service.id ||
                                index
                              }
                              value={
                                typeof service ===
                                "string"
                                  ? service
                                  : service.name ||
                                    service.title ||
                                    ""
                              }
                            >
                              {typeof service ===
                              "string"
                                ? service
                                : service.name ||
                                  service.title ||
                                  ""}
                            </option>
                          )
                        )}
                    </select>

                    {errors.service && (
                      <span className="form-error">
                        {errors.service}
                      </span>
                    )}
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="timeline">
                      Project Timeline
                    </label>

                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      {Array.isArray(
                        projectTimelines
                      ) &&
                        projectTimelines.map(
                          (
                            timeline: any,
                            index: number
                          ) => (
                            <option
                              key={index}
                              value={
                                typeof timeline ===
                                "string"
                                  ? timeline
                                  : timeline.name ||
                                    timeline.label ||
                                    timeline.title ||
                                    ""
                              }
                            >
                              {typeof timeline ===
                              "string"
                                ? timeline
                                : timeline.name ||
                                  timeline.label ||
                                  timeline.title ||
                                  ""}
                            </option>
                          )
                        )}
                    </select>
                  </div>

                </div>

                {/* MESSAGE */}

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
                  />

                  {errors.message && (
                    <span className="form-error">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* SERVER ERROR */}

                {submitError && (
                  <div className="submit-error">
                    {submitError}
                  </div>
                )}

                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  className="contact-submit-button"
                  disabled={isSubmitting}
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          SUCCESS MODAL

          IMPORTANT:
          This is OUTSIDE contact-left/contact-right.

          position: fixed in CSS makes it appear in the
          center of the entire browser viewport.
      ====================================================== */}

      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className="success-modal-overlay"
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
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* CLOSE BUTTON */}

              <button
                type="button"
                className="success-modal-close"
                onClick={closeSuccessModal}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* SUCCESS ICON */}

              <div className="success-modal-icon">
                <Check size={38} strokeWidth={2.5} />
              </div>

              {/* TITLE */}

              <h3>
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