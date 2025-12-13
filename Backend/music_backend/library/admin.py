from django.contrib import admin
from .models import Artist, Track

@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    list_display = ("id", "name")

@admin.register(Track)
class TrackAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "artist", "released_date", "audio_file")
    search_fields = ("title", "artist__name", "album")
    raw_id_fields = ("artist",)
