const Terms = () => {
  const LAST_UPDATED = '27th Feb 2025';
  const CONTACT_EMAIL = 't@trykudo.com';
  return (
    <div className="py-10 mx-auto max-w-[50rem] flex flex-col space-y-5 [&>h1]:text-3xl [&>h2]:text-2xl [&>p]:text-md">
      <p>
        <strong>Effective Date:</strong> {LAST_UPDATED}
      </p>

      <p>
        Welcome to Kudo! These Terms of Service ("Terms") govern your use of Kudo, including our website, browser
        extension, and any related services (collectively, the "Service"). By accessing or using Kudo, you agree to
        comply with these Terms. If you do not agree, please do not use the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years old to use Kudo. If you are under 18, you may only use the Service with the
        permission of a parent or guardian.
      </p>

      <h2>2. Account Registration</h2>
      <p>
        To access certain features, you may need to create an account. You agree to provide accurate information and
        keep your credentials secure. You are responsible for all activity on your account.
      </p>

      <h2>3. Data Collection & Privacy</h2>
      <p>
        By using Kudo, you acknowledge that we collect certain data, including your email, name, display name, user
        comments, website HTML structure (from extension usage), and behavior data. This data is used strictly for core
        features and analytics and is never shared with third parties. For more details, see our Privacy Policy.
      </p>

      <h2>4. Acceptable Use</h2>
      <ul>
        <li>Use Kudo for any illegal, harmful, or abusive activities.</li>
        <li>Attempt to reverse-engineer, modify, or disrupt the Service.</li>
        <li>Upload or share malicious content or infringe on intellectual property rights.</li>
      </ul>

      <h2>5. Intellectual Property & Licensing</h2>
      <p>
        Kudo and its content (excluding user-generated content) are the property of Kudo and its licensors. The software
        powering Kudo is licensed under the MIT License, allowing for open-source use, modification, and distribution.
        However, you may not use Kudo's branding, trademarks, or proprietary assets without permission.
      </p>

      <h2>6. Termination</h2>
      <p>
        We may suspend or terminate your access to Kudo if you violate these Terms. You may also discontinue use at any
        time by deleting your account.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        Kudo is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service or error-free
        functionality.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Kudo is not liable for any indirect, incidental, or consequential
        damages arising from your use of the Service.
      </p>

      <h2>9. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of Kudo after changes means you accept the new Terms.
      </p>

      <h2>10. Contact Us</h2>
      <p>For questions or concerns, contact us at {CONTACT_EMAIL}.</p>
    </div>
  );
};

export default Terms;
