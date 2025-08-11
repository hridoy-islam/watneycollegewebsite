import { Mail, ShieldEllipsis } from "lucide-react";
import React from "react";

function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative py-20 bg-ocean-breeze overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ShieldEllipsis className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-black text-watney-blue-primary mb-6 text-gray-900">
            Terms And Conditions
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-4xl text-gray-800 space-y-8">
        <article>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>
            Welcome to Watney College’s website (“the Site”). By accessing or
            using the Site, you agree to comply with and be bound by these Terms
            and Conditions. If you do not agree with these terms, please refrain
            from using the Site.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">2. Intellectual Property Rights</h2>
          <p>
            All content on the Site, including text, graphics, logos, images,
            and course materials, is the property of Watney College or its content
            suppliers and is protected by international copyright laws.
            Unauthorized use, reproduction, or distribution of this content is
            prohibited.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">3. Use of the Site</h2>
          <p>You may use the Site for lawful purposes only. You agree not to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Use the Site in any way that breaches applicable local, national, or international law or regulation.</li>
            <li>Transmit any unsolicited or unauthorized advertising or promotional material.</li>
            <li>Attempt to gain unauthorized access to the Site, the server on which the Site is stored, or any server, computer, or database connected to the Site.</li>
          </ul>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">4. Course Enrolment and Payments</h2>
          <p>
            Enrollment in courses offered by Watney College is subject to
            availability and acceptance by the College. Fees for courses must be
            paid in full prior to the commencement of the course unless otherwise
            agreed. All payments are subject to our refund policy.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">5. Limitation of Liability</h2>
          <p>
            While Watney College endeavors to ensure the accuracy of the
            information on the Site, we do not warrant its completeness or
            accuracy. The College will not be liable for any direct, indirect, or
            consequential loss or damage arising under or in connection with the
            use of the Site.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">6. Links to Third-Party Websites</h2>
          <p>
            The Site may contain links to external websites. Watney College is not
            responsible for the content or reliability of any external websites
            linked to from the Site and does not endorse the views expressed within
            them.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">7. Privacy Policy</h2>
          <p>
            Your privacy is important to us. Please refer to our Privacy Policy for
            information on how we collect, use, and protect your personal data.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">8. Changes to Terms and Conditions</h2>
          <p>
            Watney College reserves the right to amend these Terms and Conditions
            at any time. Changes will be posted on this page, and your continued
            use of the Site constitutes acceptance of the amended terms.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">9. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance
            with the laws of England and Wales. Any disputes arising out of or in
            connection with these terms shall be subject to the exclusive
            jurisdiction of the courts of England and Wales.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3">10. Contact Information</h2>
          <address className="not-italic space-y-1">
            <p>
              London Campus<br />
              80-82 Nelson Street<br />
              Whitechapel, London,<br />
              E1 2DY, United Kingdom
            </p>
            <p>Phone: +44 (0) 2080046463</p>
            <p>Email: <a href="mailto:info@watneycollege.co.uk" className="text-watney-blue-primary underline">info@watneycollege.co.uk</a></p>
          </address>
        </article>

       
      </section>
    </div>
  );
}

export default TermsPage;
