from rest_framework import serializers
from .models import Track, Artist

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ("id", "name", "slug")

class TrackSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer(read_only=True)
    audio_url = serializers.SerializerMethodField()
    cover_url = serializers.SerializerMethodField()

    class Meta:
        model = Track
        fields = ("id", "title", "slug", "artist", "album",
                  "duration_seconds", "audio_url", "cover_url",
                  "description", "released_date")

    def get_audio_url(self, obj):
        request = self.context.get("request")
        if not obj.audio_file:
            return None
        return request.build_absolute_uri(obj.audio_file.url)

    def get_cover_url(self, obj):
        request = self.context.get("request")
        if not obj.cover_image:
            return None
        return request.build_absolute_uri(obj.cover_image.url)
