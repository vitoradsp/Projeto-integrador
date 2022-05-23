from multiprocessing.sharedctypes import Value
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Objetivo(models.Model):
    objetivo = models.CharField(max_length=255)
    def __str__(self):
        return self.objetivo
    
class Nivel_atividade(models.Model):
    atividade = models.CharField(max_length=255)
    def __str__(self):
        return self.atividade

class Dieta(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    objetivo = models.ForeignKey(Objetivo, on_delete=models.DO_NOTHING)
    peso = models.IntegerField()
    altura = models.DecimalField(max_digits=3, decimal_places=2)
    idade = models.IntegerField()
    genero = models.CharField()
    nivel_atividade = models.ForeignKey(Nivel_atividade, on_delete=models.CASCADE)
    def __str__(self):
        return self.usuario