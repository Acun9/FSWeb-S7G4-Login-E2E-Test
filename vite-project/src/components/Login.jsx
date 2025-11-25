import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const navigate = useNavigate();

  // Regex kuralları
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Hataları anlık hesapla
  const errors = {
    email:
      email && !emailRegex.test(email)
        ? "Geçerli bir email adresi giriniz."
        : "",
    password:
      password && !passwordRegex.test(password)
        ? "Şifre en az 8 karakter, 1 büyük, 1 küçük, 1 rakam içermeli."
        : "",
    terms: !terms ? "Şartları kabul etmelisiniz." : "",
  };

  // Form geçerli mi?
  const isValid =
    emailRegex.test(email) && passwordRegex.test(password) && terms;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate("/success");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ display: "block", width: "100%", padding: "8px" }}
            data-cy="email-input"
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.email}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Şifre:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: "block", width: "100%", padding: "8px" }}
            data-cy="password-input"
          />
          {errors.password && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.password}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              data-cy="terms-checkbox"
            />
            Şartları kabul ediyorum
          </label>
          {errors.terms && (
            <div style={{ color: "red", fontSize: "12px" }}>{errors.terms}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          style={{
            padding: "10px 20px",
            cursor: isValid ? "pointer" : "not-allowed",
          }}
          data-cy="submit-button"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
