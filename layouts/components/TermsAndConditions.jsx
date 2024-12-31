"use client";

import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 py-28  md:py-24 min-h-screen">
      <header className="bg-gray-300 text-white py-6 text-center">
        <h1 className="text-3xl text-black font-bold">Terms and Conditions</h1>
        <p className="mt-2  text-black text-lg">Please Read These Terms Carefully</p>
      </header>

      <main className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
        <p className="mb-4 text-gray-700">
          Welcome to <strong>Sahaj Spirit Trust</strong>. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using our website.
        </p>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By using this website, you acknowledge that you have read, understood, and agree to these Terms and Conditions. These terms apply to all visitors, users, and others who access the site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">2. Use of the Website</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              You agree to use the website only for lawful purposes and in accordance with these terms.
            </li>
            <li>
              You must not engage in any conduct that could damage, disable, or impair the website or interfere with others' use of the website.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">3. Intellectual Property</h2>
          <p className="text-gray-700">
            All content on this website, including text, graphics, logos, and images, is the property of Sahaj Spirit Trust or its licensors and is protected by copyright and trademark laws. Unauthorized use of any content is strictly prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">4. Limitation of Liability</h2>
          <p className="text-gray-700">
            Sahaj Spirit Trust is not liable for any direct, indirect, incidental, or consequential damages arising out of your use of the website or its content. Use of the website is at your own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">5. Third-Party Links</h2>
          <p className="text-gray-700">
            This website may contain links to third-party websites. Sahaj Spirit Trust is not responsible for the content, privacy practices, or terms of these third-party websites.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">6. Termination</h2>
          <p className="text-gray-700">
            We reserve the right to terminate or restrict your access to the website at any time without notice if we believe you have violated these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">7. Changes to Terms</h2>
          <p className="text-gray-700">
            Sahaj Spirit Trust reserves the right to update or modify these terms at any time. Continued use of the website after changes are posted constitutes your acceptance of the new terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">8. Governing Law</h2>
          <p className="text-gray-700">
            These terms are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms and Conditions, please contact us at:{" "}
            <a href="mailto:info@sahajspirittrust.com" className="text-blue-600 hover:underline">
              info@sahajspirittrust.com
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

export default TermsAndConditions;
