# langkah-langkah menggunakan Tailwind v2

### 1. Install Via npm
jalankan script berikut di terminal

```terminal
npm install tailwindcss postcss autoprefixer
```

ini akan menginstall tailwindcss postcss dan autoprefixer

> **NOTE**: Jika ada error seperti ini di terminal:

```terminal
Error: PostCSS plugin tailwindcss requires PostCSS 8.
```

maka jalankan script dibawah ini:

```terminal
npm uninstall tailwindcss postcss autoprefixer
```

kemudian install lagi sesuai dengan script dibawah:

```terminal
npm install tailwindcss@compat postcss@^7 autoprefixer@^9
```

Dan apabila semua plugin sudah support PostCSS8 maka jalankan script ini untuk upgrade:

```terminal
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```

### 2. menambahkan tailwind dan autoprefixer menjadi PostCSS Plugin
sebelum menambahkan tailwind dan autoprefixer menjadi PostCSS Plugin kita buat dulu file konfigurasi `postcss.config.js` dengan membuat file di root folder / di folder dengan nama postcss.config.js utama projek kamu.

jika sudah membuat filenya kemudian bisa di lanjut dengan menambahkan script di file postcss.config.js:

```javascript
module.exports = {
    plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

dengan begitu plugin tailwind dan autoprefixer telah di tambahkan ke PostCSS.

atau kamu bisa membuat file secara otomatis dengan menyuru tailwind untuk membuatnya yaitu dengan
menulis script di bawah ini:

```terminal
npx tailwindcss init -p
```

dengan ini tailwind membuat 2 file `postcss.config.js` & `tailwind.config.js` dan mengisinya secara otomatis. ini merupakan cara untuk kamu yang mager:D.

### 3. membuat file PostCSS
file PostCSS berekstensi .css yang sama saja dengan file css kebanyakan. kamu bisa membuat dimana saja file cssnya dengan syarat didalam filenya di tambahkan script berikut:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> **NOTE**: jika kamu ingin menambahkan css sendiri maka kamu tidak boleh menaruh @tailwind di bawah css kamu, di wajibkan menaruh @tailwind di paling atas. seperti di bawah.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.btn {
   @apply px-4 py-2 bg-blue-600 text-white rounded;
}
 ```

yaa, karena memakai PostCSS maka tailwind menjadi lebih powerfull dengan hanya menambahkan tailwind utilities di css nya dan membuat htmlnya menjadi sederhana. dan jangan lupa untuk menambahkan link ke file PostCSS yang kamu buat. jika sudah ke link maka kita lanjut ke langkah terakhir.

### 4. Compile file PostCSS kamu ke css 
dengan cara run script berikut di terminal:

```terminal
npx tailwindcss build ./folder_PostCSS/file_PostCSS.css -o ./folder_css/file_css.css
```

##
> Untuk dokumentasi lebih lengkap lihat [halaman instalasi TailwindCSS](https://tailwindcss.com/)
