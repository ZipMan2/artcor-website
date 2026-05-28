# Artcor — Strona wizytówkowa

Strona wizytówkowa firmy **Artcor** — producenta mebli na zamówienie.  
Zbudowana w Next.js 16 z TypeScript i Tailwind CSS.

🔗 **Live:** [artcor.pl](https://artcor.pl)

---

## Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)


---

## Uruchomienie lokalne

### Wymagania

- Node.js 18+
- npm

### Instalacja

```bash
# 1. Sklonuj repo
git clone https://github.com/ZipMan2/artcor-website.git
cd artcor-website

# 2. Zainstaluj zależności
npm install

# 3. Uruchom serwer deweloperski
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

### Budowanie produkcyjne

```bash
npm run build
npm run start
```

---

## Struktura projektu

```
src/
├── app/                  # Routing (App Router)
│   ├── page.tsx          # Strona główna
│   ├── o-nas/
│   ├── galeria/
│   └── kontakt/
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── ui/               # Button, CoverImage, ...
│   └── sections/         # Sekcje podstron
└── constants/
```

