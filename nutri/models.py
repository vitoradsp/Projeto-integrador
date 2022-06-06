from multiprocessing.sharedctypes import Value
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Objetivo(models.Model):
    objetivo = models.CharField(max_length=255)
    def __str__(self):
        return self.objetivo
    
class NivelAtividade(models.Model):
    atividade = models.CharField(max_length=255)
    def __str__(self):
        return self.atividade

class Dieta(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    objetivo = models.ForeignKey(Objetivo, on_delete=models.DO_NOTHING)
    peso = models.IntegerField()
    altura = models.IntegerField()
    idade = models.IntegerField()
    genero = models.CharField(max_length=255)
    tmb=models.IntegerField()
    gasto_dia=models.IntegerField()
    caloria_dieta=models.IntegerField()
    proteina=models.IntegerField()
    gordura=models.IntegerField()
    carboidratos=models.IntegerField()
    nivel_atividade = models.ForeignKey(NivelAtividade, on_delete=models.DO_NOTHING)
    dieta = models.BooleanField(default=False)
    def __str__(self):
        return self.usuario.username

class ImprimirDieta(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    ref_1 = models.CharField(max_length=255)   
    ref_2 = models.CharField(max_length=255)
    ref_3 = models.CharField(max_length=255)    
    ref_4 = models.CharField(max_length=255)   
    ref_5 = models.CharField(max_length=255) 
    ref_6 = models.CharField(max_length=255, blank=True, default='')
    def __str__(self):
        return self.usuario.username
    

    