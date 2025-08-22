from django.urls import path, include
from rest_framework import routers
from .views import (
    MinistryViewSet, MemberViewSet, EventViewSet, SermonViewSet, VersePrayViewSet, 
    ContactViewSet, DonationInfoViewSet, ThemeYearViewSet
)

router = routers.DefaultRouter()
router.register(r'ministries', MinistryViewSet)
router.register(r'members', MemberViewSet)
router.register(r'events', EventViewSet)
router.register(r'sermons', SermonViewSet)
router.register(r'verseprays', VersePrayViewSet)
router.register(r'contacts', ContactViewSet)
router.register(r'donations', DonationInfoViewSet)
router.register(r'themeyears', ThemeYearViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
