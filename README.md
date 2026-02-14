# 🧠 Nalar — AI Code Architect (v1.0.0-beta)

**Nalar** adalah platform generasi kode berbasis AI yang dirancang untuk merakit logika pemrograman dan arsitektur perangkat lunak secara instan dengan output berkualitas tinggi.

![Nalar Preview](/public/og-image.png)

## 🚀 Fitur Utama
- **Real-time Streaming**: Menggunakan ConnectRPC (gRPC) untuk pengiriman potongan kode secara langsung (streaming) tanpa jeda.
- **Smart Validation**: Input prompt yang divalidasi ketat menggunakan Zod & React Hook Form (Min. 10 - Max. 2000 karakter).
- **Professional MDX Rendering**: Output kode dan tips yang dirakit menggunakan MDX dengan styling modern, syntax highlighting, dan tabel perbandingan yang responsif.
- **Modern UI/UX**: Antarmuka gelap (dark mode) yang elegan dengan scrollbar transparan dan animasi halus.
- **High Standards**: Dikembangkan dengan Biome Lint untuk menjamin konsistensi dan kualitas kode tingkat tinggi.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **API Protocol**: [ConnectRPC](https://connectrpc.com/) (gRPC for Web)
- **Styling**: Tailwind CSS & Shadcn UI
- **Validation**: Zod & React Hook Form
- **Linter/Formatter**: [Biome](https://biomejs.dev/)
- **Markdown**: MDX & React-Markdown

## 📦 Jalankan Lokal

1. Clone repository:
   ```bash
   git clone [https://github.com/username/nalar-architect-client.git](https://github.com/username/nalar-architect-client.git)
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Jalankan development server:
   ```bash
   pnpm dev
   ```

4. Akses aplikasi di [http://localhost:3000](http://localhost:3000)

## 🧪 Pemeriksaan Kode
Proyek ini menggunakan Biome untuk menjaga kualitas kode. Pastikan untuk menjalankan check sebelum melakukan commit:
```bash
pnpm biome check src
```

## 📄 Lisensi
Proyek ini berada di bawah lisensi MIT. Dibuat oleh Ezdev.
