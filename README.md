# 🧠 Nalar — AI Code Architect (v1.0.3-beta)

**Nalar** adalah platform generasi kode berbasis AI yang dirancang untuk merakit logika pemrograman dan arsitektur perangkat lunak secara instan dengan output berkualitas tinggi.

![Nalar Preview](/public/og-image.png)

## 🚀 Fitur Utama
- **Real-time Streaming**: Menggunakan ConnectRPC (gRPC) untuk pengiriman potongan kode secara langsung (streaming) tanpa jeda.
- **Smart Validation**: Input prompt divalidasi ketat menggunakan Zod & React Hook Form dengan batasan 10 hingga 2000 karakter.
- **Multi-Level Personas**: Mendukung generasi kode spesifik untuk level **Junior**, **Senior**, dan **Architect** untuk akurasi teknis yang lebih baik.
- **Fully Responsive UI**: Antarmuka yang telah dioptimasi untuk perangkat seluler, memperbaiki masalah *layout overflow* dan *content clipping* pada layar kecil.
- **Architecture Guidelines**: Integrasi panduan penggunaan dan tips prompting efektif melalui sistem **Accordion Manager** yang telah diperbaiki jalurnya.
- **Professional MDX Rendering**: Output kode dirakit menggunakan MDX dengan syntax highlighting modern dan sistem kontainer yang mendukung *internal scrolling*.

## 🛠️ Tech Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **API Protocol**: [ConnectRPC](https://connectrpc.com/) (gRPC for Web)
- **Styling**: Tailwind CSS & Shadcn UI
- **Validation**: Zod & React Hook Form
- **Linter/Formatter**: [Biome](https://biomejs.dev/)
- **Markdown**: MDX & React-Markdown

## 📦 Jalankan Lokal

1. **Clone repository**:
   ```bash
   git clone https://github.com/Ghifariezra/nalar-ai-codegen.git
   ```

2. **Konfigurasi Environment:**
   Buat file `.env.local` di direktori root client:
   ```bash
   # Endpoint Server (Railway/Local)
   NEXT_PUBLIC_API_BASE_URL=your-endpoint
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Jalankan development server:
   ```bash
   pnpm dev
   ```

5. Akses aplikasi di [http://localhost:3000](http://localhost:3000)

## 🧪 Pemeriksaan Kode
Proyek ini menggunakan Biome untuk menjaga kualitas kode. Pastikan untuk menjalankan check sebelum melakukan commit:
```bash
pnpm biome check src
```

## 📄 Lisensi
Proyek ini berada di bawah lisensi MIT. Dibuat oleh Ezdev.