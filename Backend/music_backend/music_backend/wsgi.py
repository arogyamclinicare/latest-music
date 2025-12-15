
from django.core.wsgi import get_wsgi_application
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "music_backend.settings")

application = get_wsgi_application()

# 🔥 AUTO IMPORT TRACKS (RUNS ON FIRST DEPLOY)
if os.environ.get("AUTO_IMPORT_TRACKS") == "1":
    try:
        from django.core.management import call_command
        call_command(
            "import_tracks",
            "/opt/render/project/src/audio_files",
            artist="Unknown"
        )
        print("✅ Tracks imported successfully")
    except Exception as e:
        print("❌ Import failed:", e)
