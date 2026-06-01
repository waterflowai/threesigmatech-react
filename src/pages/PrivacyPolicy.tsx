import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <Link to="/" className="logo-link">
          <span className="logo-text">ThreeSigmaTech</span>
        </Link>
      </header>

      <main className="privacy-content">
        <h1>PRIVACY POLICY</h1>
        <p className="last-updated">
          <strong>Last Updated:</strong> June 01, 2026
        </p>
        <p>
          At <strong>ThreeSigmaTech, LLC</strong>, we value your privacy. This
          page explains how we handle your information when you use our mobile
          application, <strong>Dumpster</strong>, and our related services.
        </p>

        <hr />

        <section>
          <h2>1. What Data Do We Collect?</h2>
          <p>
            We only collect information you explicitly and voluntarily give us
            to create and maintain your account:
          </p>
          <ol className="legal-list">
            <li>
              <strong>1.1 Email Address</strong>
            </li>
            <li>
              <strong>1.2 Password</strong>
            </li>
          </ol>
          <blockquote className="privacy-alert">
            <strong>🚫 What we don't collect:</strong> We do{" "}
            <strong>not</strong> collect or process any sensitive information
            (like location, biometrics, financial history, or race), and we do{" "}
            <strong>not</strong> collect any data from third parties.
          </blockquote>
        </section>

        <section>
          <h2>2. How We Use Your Data</h2>
          <p>We use your basic account information strictly to:</p>
          <ol className="legal-list">
            <li>
              <strong>2.1</strong> Set up and secure your account.
            </li>
            <li>
              <strong>2.2</strong> Log you into the app.
            </li>
            <li>
              <strong>2.3</strong> Provide the core features of the Dumpster
              application.
            </li>
            <li>
              <strong>2.4</strong> Help you if you reach out for customer
              support.
            </li>
          </ol>
        </section>

        <section>
          <h2>3. Sharing Your Data</h2>
          <ol className="legal-list">
            <li>
              <strong>
                3.1 We do not sell or share your personal information
              </strong>{" "}
              with third parties for commercial or marketing purposes.
            </li>
            <li>
              <strong>3.2</strong> Data is only ever transferred if required by
              law.
            </li>
          </ol>
        </section>

        <section>
          <h2>4. Data Retention & Safety</h2>
          <ol className="legal-list">
            <li>
              <strong>4.1</strong> We only keep your information for as long as
              you maintain an active account with us. If you delete your
              account, your data is removed from our active databases.
            </li>
            <li>
              <strong>4.2</strong> While we use standard organizational and
              technical security measures to protect your account, no
              internet-based service is 100% secure.
            </li>
          </ol>
        </section>

        <section>
          <h2>5. Your Rights & Control</h2>
          <p>
            Depending on where you live (including the US, EU, UK, Canada,
            Australia, and New Zealand), you have the right to look at, update,
            or completely delete your personal data at any time.
          </p>
          <ol className="legal-list">
            <li>
              <strong>5.1 To delete your account and data:</strong> Go to{" "}
              <Link to="/dumpster/delete_account">Delete Account</Link>.
            </li>
            <li>
              <strong>5.2 Questions or Concerns?</strong> You can contact us
              directly via{" "}
              <a
                href="mailto:joel.wasserman8@gmail.com"
                className="privacy-link"
              >
                email
              </a>
              .
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
