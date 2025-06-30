# music/urls.py (Example)
from django.urls import path
from rest_framework import routers
from .views import SongViewSet
from django.urls import include

router = routers.DefaultRouter()
router.register(r'songs', SongViewSet)
# router.register(r'library', LibraryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # You might have custom paths here too
]

# List: Get all songs (GET /songs/)
# Create: Add a new song (POST /songs/)
# Retrieve: Get a specific song by ID (GET /songs/{id}/)
# Update: Modify a specific song (PUT /songs/{id}/, PATCH /songs/{id}/)
# Destroy: Delete a specific song (DELETE /songs/{id}/)