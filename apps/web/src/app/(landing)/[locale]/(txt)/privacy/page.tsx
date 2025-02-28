const Privacy = () => {
  const LAST_UPDATED = '27th Feb 2025';
  const CONTACT_EMAIL = 't@trykudo.com';
  return (
    <div className="py-10 mx-auto max-w-[50rem] flex flex-col space-y-5 [&>h1]:text-3xl [&>h2]:text-2xl [&>p]:text-md">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> {LAST_UPDATED}
      </p>

      <p>
        Welcome to Kudo! Your privacy is important to us. This Privacy Policy explains what data we collect, how we use
        it, and your rights regarding your personal information.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> Your name, display name, and email address.
        </li>
        <li>
          <strong>User Activity:</strong> Comments you leave and websites' HTML structure when you launch the Kudo
          extension.
        </li>
        <li>
          <strong>Behavioral Data:</strong> How you interact with Kudo for analytics and improvements.
        </li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <p>We only use the collected data for the following purposes:</p>
      <ul>
        <li>Providing Kudo’s core features</li>
        <li>Improving user experience through analytics</li>
        <li>Ensuring security and preventing abuse</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We <strong>do not</strong> sell, rent, or share your data with third parties. Your information is used solely
        for operating and enhancing Kudo.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We implement strong security measures to protect your data from unauthorized access, disclosure, or misuse.
        However, no online service is 100% secure, so we encourage responsible use.
      </p>

      <h2>5. Your Rights & Choices</h2>
      <p>You can:</p>
      <ul>
        <li>Access, update, or delete your personal data</li>
        <li>Opt out of analytics tracking (if applicable)</li>
        <li>
          Contact us with privacy-related concerns at <strong>{CONTACT_EMAIL}</strong>
        </li>
      </ul>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make significant changes, we’ll notify you. Continued
        use of Kudo after updates means you accept the revised policy.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        For any questions, reach out to <strong>{CONTACT_EMAIL}</strong>.
      </p>
    </div>
  );
};

export default Privacy;
