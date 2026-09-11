#!/usr/bin/env python3
"""
Thai EV Specification Verification Utility
EVSELECT Platform - Knowledge Base & Spec Auditor

Usage:
  python scripts/verify-thai-specs.py list
  python scripts/verify-thai-specs.py get zeekr-x-2026
"""

import sys
import json
import os
from pathlib import Path

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

def load_sources():
    json_path = Path(__file__).parent.parent / "src" / "content-generator" / "data" / "official-sources.json"
    if not json_path.exists():
        print(f"Error: Could not find {json_path}")
        sys.exit(1)
    with open(json_path, "r", encoding="utf-8") as f:
        return json.load(f)

def main():
    if len(sys.argv) < 2:
        print("Usage: python scripts/verify-thai-specs.py [list|get <vehicle-id>]")
        sys.exit(1)

    cmd = sys.argv[1]
    data = load_sources()
    sources = data.get("sources", [])

    if cmd == "list":
        print(f"\nAuthoritative Thai EV Official Sources ({len(sources)} models):")
        print("-" * 65)
        for s in sources:
            brochure_info = s.get("brochure", {}).get("publishedMonth", "Official Spec")
            url = s.get("brochure", {}).get("url", s.get("officialOverviewUrl", "Direct Listing"))
            print(f"• [{s['id']}] {s['brand']} {s['model']} ({s.get('modelYear', 'Current')}) - {brochure_info}")
            print(f"  URL: {url}")
        print("-" * 65)

    elif cmd == "get":
        if len(sys.argv) < 3:
            print("Error: Please provide a vehicle ID (e.g. zeekr-x-2026)")
            sys.exit(1)
        vid = sys.argv[2].lower()
        match = next((s for s in sources if s['id'].lower() == vid), None)
        if not match:
            print(f"Vehicle '{vid}' not found in official sources database.")
            sys.exit(1)
        print(json.dumps(match, indent=2, ensure_ascii=False))

    else:
        print(f"Unknown command: {cmd}")
        sys.exit(1)

if __name__ == "__main__":
    main()
