import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Seo from "../components/Seo/Seo";
import { ShieldCheck, ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import "./LegalPages.css";

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">

      <Seo
        title="Privacy Policy — ZyneDigix"
        description="ZyneDigix Privacy Policy describing how we collect, use, and protect personal information when using our AI-powered digital experiences and services."
        path="/privacy-policy"
      />

      {/* HERO */}
      <section className="legal-hero">
        <div className="legal-container">

          <Link to="/" className="legal-back-link">
            <ArrowLeft size={17} />
            Back to ZyneDigix
          </Link>

          <motion.div
            className="legal-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="legal-icon">
              <ShieldCheck size={30} />
            </div>

            <span className="legal-eyebrow">
              ZYNEDIGIX
            </span>

            <h1>
              Privacy <span>Policy</span>
            </h1>

            <p>
              Your privacy matters to us. This Privacy Policy explains how
              ZyneDigix collects, uses, protects, and handles information
              when you interact with our website and services.
            </p>

            <div className="legal-updated">
              Last updated: August 11, 2026
            </div>
          </motion.div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="legal-content-section">
        <div className="legal-container">

          <motion.div
            className="legal-document"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <section className="legal-section">
              <h2>1. Introduction</h2>

              <p>
                ZyneDigix ("ZyneDigix", "we", "us", or "our") respects your
                privacy and is committed to protecting the information you
                provide when using our website, contacting us, or engaging
                with our services.
              </p>

              <p>
                This Privacy Policy describes the types of information we may
                collect, how we use that information, how we protect it, and
                the choices available to you.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Information We Collect</h2>

              <p>
                When you voluntarily submit information through our contact
                or project enquiry forms, we may collect:
              </p>

              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company or business name</li>
                <li>Selected service or project type</li>
                <li>Project timeline</li>
                <li>Project requirements and messages</li>
              </ul>

              <p>
                We may also receive basic technical information automatically
                when you visit our website, such as browser type, device
                information, approximate location, pages visited, and
                general usage information.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. How We Use Your Information</h2>

              <p>
                Information submitted through our website may be used to:
              </p>

              <ul>
                <li>Respond to your enquiries and messages.</li>
                <li>Understand your project requirements.</li>
                <li>Provide quotations and service information.</li>
                <li>Communicate with you about potential projects.</li>
                <li>Deliver and improve our services.</li>
                <li>Maintain website security and functionality.</li>
                <li>Prevent spam, abuse, fraud, or unauthorized activity.</li>
              </ul>

              <p>
                We do not use your submitted information for purposes
                unrelated to your enquiry without an appropriate reason or
                legal basis.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Contact Forms and Email Communication</h2>

              <p>
                When you submit the contact form on the ZyneDigix website,
                your information may be transmitted through third-party
                infrastructure used to securely process and deliver email
                notifications.
              </p>

              <p>
                We may use email delivery and infrastructure providers to
                process these communications. Such providers may process
                information only as necessary to provide their services.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Third-Party Services</h2>

              <p>
                Our website may use third-party services for hosting,
                analytics, email delivery, security, content delivery,
                website performance, or other technical functions.
              </p>

              <p>
                These services may process limited technical or submitted
                information according to their own privacy policies and
                applicable terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Cookies and Similar Technologies</h2>

              <p>
                The ZyneDigix website may use cookies or similar technologies
                to improve website functionality, understand usage patterns,
                remember preferences, and improve the overall user
                experience.
              </p>

              <p>
                You may be able to control cookies through your browser
                settings. Disabling certain cookies may affect some website
                functionality.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Data Security</h2>

              <p>
                We take reasonable measures to protect information submitted
                through our website against unauthorized access, misuse,
                alteration, disclosure, or destruction.
              </p>

              <p>
                However, no method of transmission or electronic storage can
                be guaranteed to be completely secure. Therefore, we cannot
                guarantee absolute security of information transmitted over
                the internet.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Data Retention</h2>

              <p>
                We retain information only for as long as reasonably necessary
                to respond to enquiries, provide services, maintain business
                records, resolve disputes, comply with applicable legal
                obligations, or protect our legitimate business interests.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Your Privacy Choices</h2>

              <p>
                Depending on applicable law, you may have rights regarding
                your personal information, including the ability to request
                access, correction, deletion, or clarification about how your
                information is handled.
              </p>

              <p>
                To make a privacy-related request, please contact us using
                the email address provided below.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Children's Privacy</h2>

              <p>
                Our services are intended for businesses, professionals,
                organizations, and general website visitors. We do not
                knowingly request personal information from children for the
                purpose of providing our professional services.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. External Links</h2>

              <p>
                Our website may contain links to third-party websites,
                platforms, or social media services. We are not responsible
                for the privacy practices, content, or security of those
                external websites.
              </p>

              <p>
                We recommend reviewing the privacy policies of third-party
                websites before providing them with personal information.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Changes to This Privacy Policy</h2>

              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our services, technology, business practices, or
                applicable requirements.
              </p>

              <p>
                Any updated version will be published on this page with a
                revised "Last updated" date.
              </p>
            </section>

            <section className="legal-section legal-contact-section">
              <h2>13. Contact Us</h2>

              <p>
                If you have questions about this Privacy Policy or how
                ZyneDigix handles your information, please contact us.
              </p>

              <a
                href="mailto:zynedigix@gmail.com"
                className="legal-email"
              >
                <Mail size={18} />
                zynedigix@gmail.com
              </a>
            </section>

          </motion.div>

        </div>
      </section>

    </main>
  );
}