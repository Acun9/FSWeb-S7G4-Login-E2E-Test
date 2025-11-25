# FSWeb-S7G4-Login-E2E-Test

Kısa açıklama: Bu proje, bir Login formu için uçtan uca (E2E) testlerin yazıldığı örnek bir uygulamadır. Projede React bileşenleri (örn. `Login.jsx`, `Success.jsx`) ve Cypress ile yazılmış test senaryoları yer alır.

**İçindekiler**

- **Proje:** Login formu uygulaması
- **Testler:** Cypress E2E testleri (başarılı giriş, doğrulama hataları)
- **Hedef:** GitHub üzerinde düzgün görünen ve kolay çalıştırılabilen bir proje README'si

## Gereksinimler

- Node.js (14+ önerilir)
- npm veya yarn
- Windows için PowerShell (aşağıdaki komut örnekleri PowerShell içindir)

## Kurulum

1. Depoyu klonlayın:

```powershell
git clone https://github.com/Acun9/FSWeb-S7G4-Login-E2E-Test.git
cd FSWeb-S7G4-Login-E2E-Test
```

2. Bağımlılıkları yükleyin:

```powershell
npm install
# veya
yarn install
```

## Geliştirme (Uygulamayı çalıştırma)

```powershell
npm run dev
# veya
npm start
```

Projede `components` klasöründe `Login` ve `Success` bileşenleri bulunması beklenir.

## Testler (Cypress)

- Test senaryoları şunları içerir:

  - Başarılı login: Geçerli bilgiler ile form gönderildiğinde `Success` sayfası açılmalı.
  - Doğrulama hataları: Hatalı veya eksik bilgilerde uygun hata mesajları gösterilmeli ve gönderim butonu devre dışı kalmalı.

- Cypress'i interaktif olarak başlatmak için:

```powershell
npx cypress open
```

- Headless (CI / komut satırı) çalıştırma:

```powershell
npx cypress run
```

Testler `cypress/e2e` (veya `cypress/integration`) dizinine yerleştirilmelidir.

## Önerilen proje yapısı

```
├─ components/
│  ├─ Login.jsx
│  └─ Success.jsx
├─ cypress/
│  └─ e2e/
├─ package.json
└─ README.md
```

## Git ve GitHub yönergeleri

- Projeyi GitHub'a yüklerken en az 4 commit yapın (örn. proje setup, login sayfası, validasyonlar, testler).

## Katkıda bulunma

- Hata bildirimi veya geliştirme önerileri için issue açın veya pull request gönderin.

## Lisans

- Proje lisansı yoksa `LICENSE` ekleyin veya basitçe "MIT" gibi bir lisans belirtin.

---

Eğer isterseniz, README'yi projenin mevcut dosya yapısına daha fazla göre özelleştirip doğrudan commit etmemi sağlayabilirsiniz. Ayrıca README içine örnek test komutlarını ve CI notlarını ekleyebilirim.
