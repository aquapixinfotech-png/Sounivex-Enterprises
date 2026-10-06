# SOUNIVEX ENTERPRISES - Vercel Deployment Guide

এই ওয়েবসাইটটি **Vercel**-এ হোস্ট করার জন্য সম্পূর্ণ প্রস্তুত করা হয়েছে (Vite framework configuration এবং `vercel.json` প্রি-কনফিগার করা আছে)।

---

## 🌟 পদ্ধতি ১: GitHub এর মাধ্যমে ডিপ্লয় (সবচেয়ে সহজ ও রিকমেন্ডেড)

### ধাপ ১: GitHub-এ কোড আপলোড করা
1. আপনার [GitHub](https://github.com/) অ্যাকাউন্টে লগইন করুন।
2. একটি নতুন রিপোজিটরি (New Repository) তৈরি করুন (যেমন: `sounivex-enterprises`).
3. আপনার প্রজেক্টের সব ফাইল সেই রিপোজিটরিতে পুশ/আপলোড করুন:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Sounivex Enterprises"
   git branch -M main
   git remote add origin https://github.com/আপনার-ইউজারনেম/sounivex-enterprises.git
   git push -u origin main
   ```

### ধাপ ২: Vercel-এ অ্যাকাউন্ট খোলা ও প্রজেক্ট ইমপোর্ট
1. [Vercel.com](https://vercel.com/) ওয়েবসাইটে যান।
2. **"Continue with GitHub"** দিয়ে লগইন করুন।
3. ড্যাশবোর্ডের ডানদিকে **"Add New..."** বাটনে ক্লিক করে **"Project"** সিলেক্ট করুন।
4. আপনার GitHub রিপোজিটরি তালিকা থেকে **`sounivex-enterprises`** খুঁজুন এবং পাশে থাকা **"Import"** বাটনে ক্লিক করুন।

### ধাপ ৩: সেটিংস ও এক ক্লিকে ডিপ্লয়
1. **Framework Preset:** স্বয়ংক্রিয়ভাবে `Vite` সিলেক্ট থাকবে।
2. **Root Directory:** `./` (ডিফল্ট থাকবে)।
3. **Build Command:** `npm run build` বা `vite build` (ডিফল্ট)।
4. **Output Directory:** `dist` (ডিফল্ট)।
5. নীল রঙের **"Deploy"** বাটনে ক্লিক করুন।

> মাত্র ১-২ মিনিটের মধ্যে আপনার ওয়েবসাইট লাইভ হয়ে যাবে এবং একটি ফ্রি লিংক পাবেন (যেমন: `sounivex-enterprises.vercel.app`)।

---

## 🚀 পদ্ধতি ২: Vercel CLI দিয়ে সরাসরি কমান্ড লাইন থেকে

যদি গিটহাব ব্যবহার না করতে চান, সরাসরি আপনার কম্পিউটারের টার্মিনাল থেকেই ডিপ্লয় করতে পারবেন:

1. আপনার টার্মিনালে Vercel CLI ইন্সটল করুন:
   ```bash
   npm install -g vercel
   ```
2. প্রজেক্টের ফোল্ডারে গিয়ে কমান্ড লিখুন:
   ```bash
   vercel
   ```
3. প্রথমবার আপনার ইমেইল দিয়ে ভেরিফাই করতে বলবে।
4. এরপর ৩-৪টি সহজ প্রশ্ন করবে (Enter চেপে ডিফল্ট অপশন সিলেক্ট করবেন):
   - Set up and deploy? **Y**
   - Which scope? (আপনার অ্যাকাউন্ট সিলেক্ট করুন)
   - Link to existing project? **N**
   - What’s your project’s name? `sounivex-enterprises`
   - In which directory is your code located? `./`
5. সরাসরি প্রোডাকশনে ডেপলয় করতে:
   ```bash
   vercel --prod
   ```

---

## 🌐 আপনার নিজস্ব কাস্টম ডোমেইন (যেমন: sounivex.com) যুক্ত করার নিয়ম

1. Vercel ড্যাশবোর্ডে গিয়ে আপনার প্রজেক্টে ক্লিক করুন।
2. উপরে **Settings** > বাম পাশের মেনু থেকে **Domains**-এ যান।
3. আপনার ডোমেইন নাম লিখুন (যেমন: `sounivexenterprises.com`) এবং **Add** বাটনে ক্লিক করুন।
4. Vercel আপনাকে ২টি DNS রেকর্ড দেখাবে:
   - **Type A Record:** `@` -> `76.76.21.21`
   - **Type CNAME Record:** `www` -> `cname.vercel-dns.com`
5. আপনার ডোমেইন প্রোভাইডার (GoDaddy, Namecheap, Hostinger, ইত্যাদি) এর DNS ম্যানেজমেন্টে এই রেকর্ড দুটি বসিয়ে দিলেই আপনার নিজস্ব ডোমেইনে ওয়েবসাইট চালু হয়ে যাবে!

---

## 🛠️ প্রয়োজনীয় তথ্য:
- রুট রাউটিং হ্যান্ডেল করার জন্য `vercel.json` ফাইলটি অলরেডি রুট ফোল্ডারে বানিয়ে দেওয়া হয়েছে।
- সাইটের সমস্ত কোড এবং প্রোডাকশন বিল্ড টেস্ট করা হয়েছে (`dist` ফোল্ডারে বিল্ড ১০০% এরর-মুক্ত)।
