from rest_framework import serializers
from .models import Ministry, Member, Event, Sermon, VersePray,ThemeYear

class MinistrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Ministry
        fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
    ministries = MinistrySerializer(many=True, read_only=True)  # nested read-only
    
    class Meta:
        model = Member
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class SermonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sermon
        fields = '__all__'

class VersePraySerializer(serializers.ModelSerializer):
    class Meta:
        model = VersePray
        fields = '__all__'

class ThemeYearSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThemeYear
        fields = '__all__'
