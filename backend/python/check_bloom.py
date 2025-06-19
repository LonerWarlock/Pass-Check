import sys
import os
import joblib
from bloom_filter2 import BloomFilter

# Ensure absolute path works
bloom_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "data", "bloom_filters", "leaked_passwords.bloom"))
bloom = joblib.load(bloom_path)

# Get the password from CLI arg
password = sys.argv[1]

# Check if it's possibly leaked
if password in bloom:
    print("true")
else:
    print("false")
