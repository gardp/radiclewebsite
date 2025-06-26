from rest_framework import serializers
from .models import Song

# Serializer for Song
class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ['id', 'title', 'alternate_titles', 'version_subtitle', 'description', 'release_date', 'creation_date', 'language', 'explicit_content', 'tempo_bpm', 'key', 'time_signature', 'duration_seconds', 'genres', 'moods', 'keywords_tags', 'instruments', 'vocal_description']
