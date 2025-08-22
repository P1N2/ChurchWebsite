from django.contrib import admin
from .models import Ministry, Member, Event, Sermon, VersePray, ThemeYear

admin.site.register(Ministry)
admin.site.register(Member)
admin.site.register(Event)
admin.site.register(Sermon)
admin.site.register(VersePray)
admin.site.register(ThemeYear)
