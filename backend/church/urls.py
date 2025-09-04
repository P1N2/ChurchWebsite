from django.urls import path, include
from rest_framework import routers
from .views import (
    MinistryViewSet, MemberViewSet, EventViewSet, SermonViewSet, VersePrayViewSet, 
    ThemeYearViewSet
)

router = routers.DefaultRouter()
router.register(r'ministries', MinistryViewSet)
router.register(r'members', MemberViewSet)
router.register(r'events', EventViewSet)
router.register(r'sermons', SermonViewSet)
router.register(r'verseprays', VersePrayViewSet)
router.register(r'themeyears', ThemeYearViewSet)

urlpatterns = [
    path('', include(router.urls)), # Change this line to an empty string
]
