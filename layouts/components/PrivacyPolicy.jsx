"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 py-28  md:py-24 min-h-screen">
      <header className="bg-gray-200 text-white py-6 text-center">
        <h1 className="text-3xl text-black font-bold">Privacy Policy</h1>
        <p className="mt-2 text-black text-lg">Your Privacy Matters to Us</p>
      </header>

      <main className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      
        <p className="mb-4 text-gray-700">
          At <strong>Sahaj Spirit Trust</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully to understand our practices regarding your information.
        </p>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">1. Information We Collect</h2>
          <p className="text-gray-700 mb-2">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, or other information you voluntarily provide.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Browser type, operating system, and usage details collected through cookies and similar technologies.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-2">Your information is used to:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Provide, operate, and improve our services.</li>
            <li>Respond to your inquiries or requests.</li>
            <li>Send newsletters, updates, or promotional materials (if you consent).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">3. Sharing Your Information</h2>
          <p className="text-gray-700">
            We do not sell, trade, or rent your personal information to others. We may share your information with trusted third parties who assist us in operating our website or conducting our trust activities, provided they agree to keep this information confidential.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">4. Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">5. Your Privacy Choices</h2>
          <p className="text-gray-700">
            You can choose not to provide certain information, although it may limit your ability to use certain features of our website. You can also disable cookies in your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">6. Third-Party Links</h2>
          <p className="text-gray-700">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to review their policies.
          </p>
        </section>


        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">8. Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:Sahajspiritteam@gmail.com" className="text-blue-600 hover:underline">
            Sahajspiritteam@gmail.com
            </a>.
          </p>
        </section>
      </main>

      <footer className="text-center py-4 bg-gray-200 text-gray-600">
        &copy; {new Date().getFullYear()} Sahaj Spirit Trust. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
