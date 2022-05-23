from django.db import models

# Create your models here.
class user(models.Model):
    name=models.CharField(max_length=35)
    password=models.CharField(max_length=35)
    def __str__(self) -> str:
        return self.name