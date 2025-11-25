/// <reference types="cypress" />
describe("Login Formu Testleri", () => {
  beforeEach(() => {
    // Her testten önce sayfayı ziyaret et
    cy.visit("http://localhost:5173/");
  });

  it("Başarılı form doldurulduğunda submit edebiliyorum ve success sayfasına gidiyor", () => {
    // Doğru verileri gir
    cy.get('[data-cy="email-input"]').type("test@example.com");
    cy.get('[data-cy="password-input"]').type("Password123");
    cy.get('[data-cy="terms-checkbox"]').check();

    // Buton aktif olmalı
    cy.get('[data-cy="submit-button"]').should("not.be.disabled");

    // Butona tıkla
    cy.get('[data-cy="submit-button"]').click();

    // URL kontrolü (success sayfasına gitti mi?)
    cy.url().should("include", "/success");
    cy.contains("Başarılı!").should("be.visible");
  });

  describe("Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor", () => {
    it("Email yanlış girildiğinde: 1 hata mesajı var, buton disabled", () => {
      cy.get('[data-cy="email-input"]').type("yanlis-email");
      cy.get('[data-cy="password-input"]').type("Password123");
      cy.get('[data-cy="terms-checkbox"]').check();

      // Hata mesajı kontrolü
      cy.contains("Geçerli bir email adresi giriniz.").should("be.visible");

      // Buton disabled olmalı
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    });

    it("Email ve password yanlış girildiğinde: 2 hata mesajı var", () => {
      cy.get('[data-cy="email-input"]').type("yanlis-email");
      cy.get('[data-cy="password-input"]').type("kisa"); // Hatalı şifre
      cy.get('[data-cy="terms-checkbox"]').check();

      // Hata mesajları kontrolü
      cy.contains("Geçerli bir email adresi giriniz.").should("be.visible");
      cy.contains("Şifre en az 8 karakter").should("be.visible");

      // Buton disabled olmalı
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    });

    it("Email ve password doğru ama kurallar kabul edilmediğinde: Buton disabled", () => {
      cy.get('[data-cy="email-input"]').type("test@example.com");
      cy.get('[data-cy="password-input"]').type("Password123");
      // Checkbox işaretlenmedi (uncheck varsayılan ama emin olmak için)
      cy.get('[data-cy="terms-checkbox"]').uncheck();

      // Hata mesajı kontrolü
      cy.contains("Şartları kabul etmelisiniz.").should("be.visible");

      // Buton disabled olmalı
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    });
  });
});
