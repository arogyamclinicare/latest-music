from rest_framework import viewsets, filters
from .models import Track
from .serializers import TrackSerializer
from rest_framework.permissions import AllowAny
from rest_framework.pagination import PageNumberPagination

class SmallPagination(PageNumberPagination):
    page_size = 24
    page_size_query_param = "page_size"
    max_page_size = 100

class TrackViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Public read-only endpoints for listing and retrieving tracks.
    """
    queryset = Track.objects.select_related("artist").all()
    serializer_class = TrackSerializer
    permission_classes = [AllowAny]
    pagination_class = SmallPagination
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["title", "artist__name", "album"]
    ordering_fields = ["created_at", "title", "released_date"]
    ordering = ["-created_at"]
