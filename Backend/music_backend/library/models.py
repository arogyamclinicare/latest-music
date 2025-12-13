from django.db import models
from django.utils.text import slugify

def track_audio_upload_to(instance, filename):
    return f"tracks/{instance.id or 'tmp'}/{filename}"

def track_image_upload_to(instance, filename):
    return f"tracks/{instance.id or 'tmp'}/cover_{filename}"

class Artist(models.Model):
    name = models.CharField(max_length=200, unique=True)
    bio = models.TextField(blank=True)
    slug = models.SlugField(max_length=220, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)[:200]
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Track(models.Model):
    title = models.CharField(max_length=250)
    artist = models.ForeignKey(Artist, related_name="tracks", on_delete=models.CASCADE)
    album = models.CharField(max_length=250, blank=True)
    duration_seconds = models.PositiveIntegerField(null=True, blank=True)
    audio_file = models.FileField(upload_to=track_audio_upload_to)
    cover_image = models.ImageField(upload_to=track_image_upload_to, blank=True, null=True)
    description = models.TextField(blank=True)
    released_date = models.DateField(null=True, blank=True)
    slug = models.SlugField(max_length=300, unique=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def save(self, *args, **kwargs):
        if not self.slug:
            base = f"{self.title}-{self.artist.name}"
            self.slug = slugify(base)[:290]
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} — {self.artist.name}"
