import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import "./DeleteAccount.css";

const baseUrl = import.meta.env.EXPO_PUBLIC_API_URL || "";
const apiKey = import.meta.env.EXPO_PUBLIC_API_KEY || "";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch(`${baseUrl}/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || "Authentication failed or invalid credentials."
        );
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message || "Network connectivity error. Could not connect to server."
      );
    }
  };

  return (
    <div className="delete-page-container">
      <header className="delete-page-header">
        <Link to="/" className="delete-logo-link">
          <span className="logo-text">ThreeSigmaTech</span>
        </Link>
      </header>

      <main className="delete-page-content">
        <div className="delete-app-badge">
          Dumpster Mobile App — A Product of ThreeSigmaTech, LLC
        </div>
        <h1 style={{ marginTop: "0.5rem" }}>Account Deletion Form</h1>

        <p className="delete-retention-disclosure">
          <strong>Important Security Notice:</strong> Upon confirmation, your
          account data will be permanently deleted. There is no additional
          retention or holding period; all profile history is deleted
          immediately and irreversibly.
        </p>

        <hr />

        {status === "success" ? (
          <div
            className="delete-card delete-success-box"
            style={{ textAlign: "center" }}
          >
            <h2>🎉 Account Permanently Deleted</h2>
            <p>
              Your Dumpster profile, credentials, and all historic game metric
              scoring history have been instantly scrubbed from our systems.
            </p>
            <p style={{ marginTop: "2rem" }}>
              <Link to="/" className="delete-return-link">
                Return to Home Page
              </Link>
            </p>
          </div>
        ) : (
          <div className="delete-card">
            <p className="delete-warning-text">
              Are you sure you want to delete your account and all its scoring
              history?
            </p>

            {status === "error" && (
              <div className="delete-inline-error">
                <strong> Deletion Failed:</strong> {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="delete-main-form">
              <div className="delete-form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={status === "loading"}
                  required
                />
              </div>

              <div className="delete-form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  disabled={status === "loading"}
                  required
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                className="delete-action-btn"
                disabled={status === "loading"}
                style={{
                  marginTop: "1.5rem",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
              >
                {status === "loading"
                  ? "Processing Immediate Purge..."
                  : "Confirm Permanent Deletion"}
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
