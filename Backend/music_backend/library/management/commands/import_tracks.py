from django.core.management.base import BaseCommand
from library.models import Artist, Track
from django.core.files import File
from pathlib import Path

class Command(BaseCommand):
    help = "Import audio files from a folder into Track records"

    def add_arguments(self, parser):
        parser.add_argument("folder", type=str, help="Path to folder with audio files (.mp3, .wav, .ogg, etc.)")
        parser.add_argument("--artist", type=str, help="Default artist name", default="Unknown Artist")

    def handle(self, *args, **options):
        folder = Path(options["folder"])
        artist_name = options["artist"]

        artist, _ = Artist.objects.get_or_create(name=artist_name)

        audio_extensions = ["*.mp3", "*.wav", "*.ogg", "*.flac"]
        files = []

        # Collect all audio files
        for ext in audio_extensions:
            files.extend(folder.glob(ext))

        if not files:
            self.stdout.write(self.style.WARNING("No audio files found."))
            return

        for f in files:
            title = f.stem

            if Track.objects.filter(title=title, artist=artist).exists():
                self.stdout.write(f"Skipping existing: {title}")
                continue

            t = Track(title=title, artist=artist)

            with open(f, "rb") as fh:
                django_file = File(fh)
                t.audio_file.save(f.name, django_file, save=False)

            t.save()
            self.stdout.write(self.style.SUCCESS(f"Imported: {title}"))
