# 🛠️ Pass-Check: Local Setup Guide (Beginner Friendly)

> ⚠️ Make sure you follow each step carefully. Ask if you're stuck anywhere!

---

## ✅ 1. System Requirements

Ensure your system has the following installed:

- **Node.js** (v18 or later)
- **npm** (comes with Node)
- **Python** (v3.10 or later)
- **Git**
- **VSCode** or any text editor

---

## 📁 2. Clone the GitHub Repository

```bash
git clone https://github.com/your-username/pass-check.git
cd pass-check
```

## 📦 3. Install Node.js Dependencies

```bash
cd backend
npm install
```

## 🐍 4. Set Up Python Environment

A. Go to the Python scripts folder:
```bash
cd python
```

B. Install required Python packages:
```bash
pip install bloom_filter2 joblib
```

## 🔑 5. Prepare the Bloom Filter File
We don’t include the leaked password file. You’ll have to download ```rockyou.txt``` yourself.

Create this folder structure:
```bash
data/
├── bloom_filters/
│   └── leaked_passwords.bloom     ✅ Required
│   └── create_bloom.ipynb             Script using which .bloom file was generated
└── raw_leaks/
    └── rockyou.txt                ❌ Ignored by .gitignore
```

## 🧪 6. Run the Backend Server
```bash
cd backend
node server.js
```
Expected output:
```bash
🚀 Server running on http://localhost:5000
```

## 🧠 7. Test the Bloom Filter API
Use Postman to send:

```bash
POST http://localhost:5000/api/password/analyze
```
Content-Type: ```application/json```

Body(raw):
```
{
  "password": "123456"
}
```
Expected response:
```json
{
  "possiblyLeaked": true
}
```
