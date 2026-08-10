import { Resend } from "resend";

type ContactFormData = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  timeline?: string;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // ---------------------------------------------------------
    // Read request body
    // ---------------------------------------------------------
    const body = (await request.json()) as ContactFormData;

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const company = body.company?.trim() || "";
    const service = body.service?.trim() || "";
    const timeline = body.timeline?.trim() || "";
    const message = body.message?.trim() || "";

    // ---------------------------------------------------------
    // Basic server-side validation
    // ---------------------------------------------------------
    if (name.length < 3) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid full name.",
        },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid mobile number.",
        },
        { status: 400 }
      );
    }

    if (!service) {
      return Response.json(
        {
          success: false,
          message: "Please select a service.",
        },
        { status: 400 }
      );
    }

    if (message.length < 20) {
      return Response.json(
        {
          success: false,
          message: "Please enter at least 20 characters.",
        },
        { status: 400 }
      );
    }

    // ---------------------------------------------------------
    // Check environment variables
    // ---------------------------------------------------------
    const toEmail = process.env.RESEND_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");
      
      return Response.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    if (!toEmail || !fromEmail) {
      console.error(
        "RESEND_TO_EMAIL or RESEND_FROM_EMAIL is missing."
      );

      return Response.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    // ---------------------------------------------------------
    // Create email subject
    // ---------------------------------------------------------
    const subject = `New Website Enquiry — ${name}`;

    // ---------------------------------------------------------
    // Create HTML email
    // ---------------------------------------------------------
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>${escapeHtml(subject)}</title>
        </head>

        <body
          style="
            margin:0;
            padding:0;
            background:#f4f4f5;
            font-family:Arial,Helvetica,sans-serif;
            color:#18181b;
          "
        >
          <div
            style="
              max-width:680px;
              margin:40px auto;
              background:#ffffff;
              border-radius:16px;
              overflow:hidden;
              border:1px solid #e4e4e7;
            "
          >

            <!-- HEADER -->
            <div
              style="
                padding:28px 32px;
                background:#111111;
                color:#ffffff;
              "
            >
              <div
                style="
                  font-size:12px;
                  letter-spacing:2px;
                  text-transform:uppercase;
                  opacity:.7;
                  margin-bottom:8px;
                "
              >
                ZyneDigix Website
              </div>

              <h1
                style="
                  margin:0;
                  font-size:26px;
                  line-height:1.3;
                "
              >
                New Contact Enquiry
              </h1>
            </div>

            <!-- CONTENT -->
            <div style="padding:32px;">

              <p
                style="
                  margin:0 0 24px;
                  font-size:15px;
                  line-height:1.7;
                  color:#52525b;
                "
              >
                A new enquiry has been submitted through the ZyneDigix
                website contact form.
              </p>

              <!-- CONTACT DETAILS -->
              <h2
                style="
                  margin:0 0 16px;
                  font-size:18px;
                  color:#18181b;
                "
              >
                Contact Details
              </h2>

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="
                  border-collapse:collapse;
                  margin-bottom:28px;
                "
              >
                <tr>
                  <td
                    style="
                      padding:10px 0;
                      width:150px;
                      color:#71717a;
                      font-size:14px;
                      vertical-align:top;
                    "
                  >
                    Name
                  </td>

                  <td
                    style="
                      padding:10px 0;
                      font-size:14px;
                      font-weight:600;
                    "
                  >
                    ${escapeHtml(name)}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:10px 0;
                      color:#71717a;
                      font-size:14px;
                      vertical-align:top;
                    "
                  >
                    Email
                  </td>

                  <td
                    style="
                      padding:10px 0;
                      font-size:14px;
                    "
                  >
                    <a
                      href="mailto:${escapeHtml(email)}"
                      style="color:#18181b;"
                    >
                      ${escapeHtml(email)}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:10px 0;
                      color:#71717a;
                      font-size:14px;
                      vertical-align:top;
                    "
                  >
                    Mobile
                  </td>

                  <td
                    style="
                      padding:10px 0;
                      font-size:14px;
                    "
                  >
                    ${escapeHtml(phone)}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:10px 0;
                      color:#71717a;
                      font-size:14px;
                      vertical-align:top;
                    "
                  >
                    Company / Brand
                  </td>

                  <td
                    style="
                      padding:10px 0;
                      font-size:14px;
                    "
                  >
                    ${escapeHtml(company || "Not provided")}
                  </td>
                </tr>
              </table>

              <!-- PROJECT DETAILS -->
              <h2
                style="
                  margin:0 0 16px;
                  font-size:18px;
                  color:#18181b;
                "
              >
                Project Details
              </h2>

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="
                  border-collapse:collapse;
                  margin-bottom:28px;
                "
              >
                <tr>
                  <td
                    style="
                      padding:10px 0;
                      width:150px;
                      color:#71717a;
                      font-size:14px;
                      vertical-align:top;
                    "
                  >
                    Service
                  </td>

                  <td
                    style="
                      padding:10px 0;
                      font-size:14px;
                      font-weight:600;
                    "
                  >
                    ${escapeHtml(service)}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:10px 0;
                      color:#71717a;
                      font-size:14px;
                      vertical-align:top;
                    "
                  >
                    Timeline
                  </td>

                  <td
                    style="
                      padding:10px 0;
                      font-size:14px;
                    "
                  >
                    ${escapeHtml(timeline || "Not provided")}
                  </td>
                </tr>
              </table>

              <!-- MESSAGE -->
              <h2
                style="
                  margin:0 0 16px;
                  font-size:18px;
                  color:#18181b;
                "
              >
                Project Message
              </h2>

              <div
                style="
                  padding:20px;
                  background:#f4f4f5;
                  border-radius:12px;
                  font-size:14px;
                  line-height:1.8;
                  color:#3f3f46;
                  white-space:pre-wrap;
                "
              >
                ${escapeHtml(message)}
              </div>

            </div>

            <!-- FOOTER -->
            <div
              style="
                padding:22px 32px;
                border-top:1px solid #e4e4e7;
                background:#fafafa;
                font-size:12px;
                line-height:1.6;
                color:#71717a;
              "
            >
              This enquiry was submitted through
              <strong>ZyneDigix</strong>.
            </div>

          </div>
        </body>
      </html>
    `;

    // ---------------------------------------------------------
    // Send email through Resend
    // ---------------------------------------------------------
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          message:
            "Unable to send your message right now. Please try again.",
        },
        { status: 500 }
      );
    }

    // ---------------------------------------------------------
    // Success
    // ---------------------------------------------------------
    return Response.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        success: false,
        message:
          "Something went wrong while sending your message.",
      },
      { status: 500 }
    );
  }
}

// -------------------------------------------------------------
// Escape user-provided content before inserting into HTML
// -------------------------------------------------------------
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}