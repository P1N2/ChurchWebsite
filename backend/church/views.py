from rest_framework import viewsets
from .models import Ministry, Member, Event, Sermon, VersePray, Contact, DonationInfo, ThemeYear
from .serializers import (
    MinistrySerializer, MemberSerializer, EventSerializer, SermonSerializer, 
    VersePraySerializer, ContactSerializer, DonationInfoSerializer, ThemeYearSerializer
)

class MinistryViewSet(viewsets.ModelViewSet):
    queryset = Ministry.objects.all()
    serializer_class = MinistrySerializer

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class SermonViewSet(viewsets.ModelViewSet):
    queryset = Sermon.objects.all()
    serializer_class = SermonSerializer

class VersePrayViewSet(viewsets.ModelViewSet):
    queryset = VersePray.objects.all()
    serializer_class = VersePraySerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class DonationInfoViewSet(viewsets.ModelViewSet):
    queryset = DonationInfo.objects.all()
    serializer_class = DonationInfoSerializer

class ThemeYearViewSet(viewsets.ModelViewSet):
    queryset = ThemeYear.objects.all()
    serializer_class = ThemeYearSerializer
