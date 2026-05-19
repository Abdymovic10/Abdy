from pathlib import Path

required = [
    Path("index.html"),
    Path("gallery.html"),
    Path("styles.css"),
    Path("script.js"),
    Path("public/assets/sunday-ball-logo.svg"),
    *[Path(f"public/assets/gallery/matchday-0{i}.svg") for i in range(1, 7)],
]

missing = [str(path) for path in required if not path.exists()]
if missing:
    raise SystemExit(f"Missing required files: {', '.join(missing)}")

print("All required static website files and placeholder assets are present.")
