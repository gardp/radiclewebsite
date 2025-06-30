from rest_framework import serializers
from .models import Song

# Serializer for Song
class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = '__all__'
