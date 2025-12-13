from rest_framework.routers import DefaultRouter
from .views import TrackViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r"tracks", TrackViewSet, basename="track")

urlpatterns = [
    path("v1/", include(router.urls)),
]
