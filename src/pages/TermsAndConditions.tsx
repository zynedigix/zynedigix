import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Seo from "../components/Seo/Seo";
import { FileText, ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import "./LegalPages.css";

export default function TermsAndConditions() {
  return (
    <main className="legal-page">

      <Seo
        title="Terms & Conditions — ZyneDigix"
        description="Terms and Conditions for using ZyneDigix services, including website use, project engagement, and service terms for AI-powered interactive digital experiences."
        path="/terms-and-conditions"
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
              <FileText size={30} />
            </div>

            <span className="legal-eyebrow">
              ZYNEDIGIX
            </span>

            <h1>
              Terms & <span>Conditions</span>
            </h1>

            <p>
              These Terms & Conditions explain the rules and conditions that
              apply when you access the ZyneDigix website or engage with our
              digital design and development services.
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
                These Terms & Conditions ("Terms") govern your use of the
                ZyneDigix website and your engagement with ZyneDigix
                ("ZyneDigix", "we", "us", or "our").
              </p>

              <p>
                By accessing our website, submitting an enquiry, or engaging
                our services, you acknowledge that you have read,
                understood, and agree to these Terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. About ZyneDigix</h2>

              <p>
                ZyneDigix is an AI-powered interactive digital experience
                studio providing digital design, development, user
                experience, website, SaaS, AI, 3D, and related creative
                technology services.
              </p>

              <p>
                Specific services, deliverables, timelines, pricing, and
                project conditions will be agreed with the client before
                commencement of a project.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Website Use</h2>

              <p>
                You agree to use the ZyneDigix website only for lawful
                purposes and in a manner that does not interfere with the
                operation, security, or availability of the website.
              </p>

              <p>You must not:</p>

              <ul>
                <li>
                  Attempt to gain unauthorized access to the website or its
                  systems.
                </li>
                <li>
                  Introduce malicious code, viruses, or harmful software.
                </li>
                <li>
                  Use the website for fraudulent or unlawful activities.
                </li>
                <li>
                  Copy or reproduce protected website content without
                  permission.
                </li>
                <li>
                  Interfere with the website's security or functionality.
                </li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Services</h2>

              <p>
                ZyneDigix may provide services including, but not limited to:
              </p>

              <ul>
                <li>Website design and development</li>
                <li>AI-powered website development</li>
                <li>UX/UI design</li>
                <li>SaaS product design</li>
                <li>3D interactive web experiences</li>
                <li>AI-generated content and creative experiences</li>
                <li>Digital marketing and visual content services</li>
                <li>Other digital design and technology services</li>
              </ul>

              <p>
                The exact scope of each project will be defined separately
                based on the client's requirements and agreed proposal.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Project Scope and Deliverables</h2>

              <p>
                Project scope, deliverables, revisions, timelines, technical
                requirements, and pricing will be communicated before or
                during project commencement.
              </p>

              <p>
                Additional work or requirements outside the agreed scope may
                require additional fees and may affect the project timeline.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Client Responsibilities</h2>

              <p>
                Clients are responsible for providing accurate information,
                content, assets, approvals, credentials, and feedback
                necessary for the successful completion of a project.
              </p>

              <p>
                Delays in providing required materials, approvals, or
                feedback may result in corresponding changes to project
                timelines.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Payments and Fees</h2>

              <p>
                Project pricing and payment schedules will be communicated
                separately for each engagement.
              </p>

              <p>
                Where an advance payment or milestone payment is agreed, work
                may begin or continue only after the applicable payment has
                been received.
              </p>

              <p>
                Additional work outside the agreed scope may be quoted and
                charged separately.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Revisions and Approvals</h2>

              <p>
                The number of included revisions, where applicable, will be
                defined in the project proposal or agreement.
              </p>

              <p>
                Once a design, feature, or deliverable has been approved by
                the client, subsequent changes may be treated as additional
                work depending on the scope and effort required.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Intellectual Property</h2>

              <p>
                Ownership and usage rights for project deliverables will
                depend on the specific project agreement and payment terms.
              </p>

              <p>
                Unless otherwise agreed, ZyneDigix retains ownership of its
                pre-existing frameworks, reusable components, development
                methods, processes, concepts, tools, libraries, and internal
                systems.
              </p>

              <p>
                Third-party software, fonts, plugins, stock assets, APIs,
                models, and other external resources may remain subject to
                their respective licenses and terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. AI-Generated Content</h2>

              <p>
                Certain ZyneDigix services may involve artificial intelligence
                or AI-assisted tools for design, development, imagery,
                content, prototyping, or other creative processes.
              </p>

              <p>
                AI-generated output may require human review, editing,
                refinement, verification, or modification before being used
                in a final project.
              </p>

              <p>
                Clients are responsible for reviewing and approving final
                deliverables before publishing or commercial use.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Third-Party Services and Integrations</h2>

              <p>
                Projects may use third-party platforms, hosting providers,
                APIs, payment services, email services, analytics platforms,
                AI services, libraries, plugins, or other technologies.
              </p>

              <p>
                Third-party services are governed by their own terms,
                policies, pricing, availability, and technical limitations.
                ZyneDigix cannot guarantee uninterrupted availability or
                future compatibility of third-party services.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Website Availability</h2>

              <p>
                We aim to keep the ZyneDigix website available and functional,
                but we do not guarantee that the website will always be
                available, uninterrupted, error-free, or completely secure.
              </p>
            </section>

            <section className="legal-section">
              <h2>13. Portfolio and Promotional Use</h2>

              <p>
                Unless otherwise agreed in writing, ZyneDigix may display
                completed work in its portfolio, website, presentations, case
                studies, or promotional materials.
              </p>

              <p>
                Confidential, private, or restricted client information will
                not intentionally be publicly disclosed where the client has
                specifically requested confidentiality.
              </p>
            </section>

            <section className="legal-section">
              <h2>14. Disclaimer</h2>

              <p>
                Information presented on the ZyneDigix website is provided
                for general informational purposes. While we aim to keep the
                information accurate and useful, we do not guarantee that all
                website content will always be complete, current, or free from
                errors.
              </p>
            </section>

            <section className="legal-section">
              <h2>15. Limitation of Liability</h2>

              <p>
                To the extent permitted by applicable law, ZyneDigix will not
                be responsible for indirect, incidental, consequential, or
                unforeseeable losses arising from the use of the website or
                services.
              </p>

              <p>
                Specific liability, warranties, and project obligations may
                be further defined in an individual client agreement or
                project proposal.
              </p>
            </section>

            <section className="legal-section">
              <h2>16. Termination</h2>

              <p>
                Either party may terminate a project or engagement according
                to the terms agreed in the applicable proposal, contract, or
                project agreement.
              </p>

              <p>
                Any outstanding payments for completed work or approved
                milestones may remain payable following termination.
              </p>
            </section>

            <section className="legal-section">
              <h2>17. Changes to These Terms</h2>

              <p>
                ZyneDigix may update these Terms & Conditions from time to
                time. Updated Terms will be published on this page with a
                revised "Last updated" date.
              </p>
            </section>

            <section className="legal-section">
              <h2>18. Governing Law</h2>

              <p>
                These Terms shall be interpreted in accordance with the
                applicable laws of India, subject to the jurisdiction and
                legal requirements applicable to the parties involved.
              </p>
            </section>

            <section className="legal-section legal-contact-section">
              <h2>19. Contact Us</h2>

              <p>
                If you have questions regarding these Terms & Conditions,
                please contact ZyneDigix.
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