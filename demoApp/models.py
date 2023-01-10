from django.db import models

# Create your models here.

class Profile(models.Model):
    fname = models.TextField()
    lname = models.TextField()
    email = models.EmailField()