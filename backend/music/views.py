from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Song
from .serializers import SongSerializer
from rest_framework import viewsets


class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

# class LibraryViewSet(viewsets.ModelViewSet):
#     queryset = Library.objects.all()
#     serializer_class = LibrarySerializer

# class SongViewSet(generics.ListCreateAPIView):
#     queryset = Song.objects.all()
#     serializer_class = SongSerializer

# class SongDetailViewSet(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Song.objects.all()
#     serializer_class = SongSerializer

# class LibraryViewSet(generics.ListCreateAPIView):
#     queryset = Library.objects.all()
#     serializer_class = LibrarySerializer

# class LibraryDetailViewSet(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Library.objects.all()
#     serializer_class = LibrarySerializer

