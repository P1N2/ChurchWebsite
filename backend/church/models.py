from django.db import models

class Ministry(models.Model):
    nom = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='ministry_images/', blank=True, null=True)

    def __str__(self):
        return self.nom

class Member(models.Model):
    prenom = models.CharField(max_length=100)
    nom = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    image = models.ImageField(upload_to='member_images/', blank=True, null=True)
    ministries = models.ManyToManyField(Ministry, blank=True, related_name='members')

    def __str__(self):
        return f"{self.prenom} {self.nom}"

class Event(models.Model):
    titre = models.CharField(max_length=200)
    description = models.TextField()
    date_debut = models.DateTimeField()
    date_fin = models.DateTimeField()
    image = models.ImageField(upload_to='event_images/', blank=True, null=True)

    def __str__(self):
        return self.titre

class Sermon(models.Model):
    titre = models.CharField(max_length=200)
    predicateur = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    date = models.DateField()
    video_url = models.URLField(blank=True, null=True)
    audio_url = models.URLField(blank=True, null=True)
    notes_pdf = models.FileField(upload_to='sermons/notes/', blank=True, null=True)

    def __str__(self):
        return f"{self.titre} - {self.predicateur}"

class VersePray(models.Model):
    verse = models.TextField(max_length=500)
    pray = models.TextField(blank=True)
    date = models.DateField(unique=True)

    def __str__(self):
        return f"Verse du {self.date}"
class ThemeYear(models.Model):
    annee = models.PositiveIntegerField(unique=True)
    theme = models.CharField(max_length=255)
    verset= models.CharField(max_length=255, blank=True, null=True) 

    def __str__(self):
        return f"{self.annee} : {self.theme}"
