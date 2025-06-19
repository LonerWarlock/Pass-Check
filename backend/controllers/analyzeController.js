const runPython = require("../utils/runPython");

module.exports = async (req, res) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ error: "Password required" });

  try {
    // ✅ Only run Bloom filter Python check
    let possiblyLeaked = false;
    try {
      const output = await runPython("check_bloom.py", [password]);
      possiblyLeaked = output.trim() === "true";
    } catch (e) {
      console.error("Bloom filter check failed:", e.message);
    }

    // ✅ Send only Bloom result
    res.json({ possiblyLeaked });

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
