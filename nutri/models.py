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
    ref_11 = models.CharField(max_length=255)
    quant_11 = models.IntegerField(default=0) 
    ref_12 = models.CharField(max_length=255)
    quant_12 = models.IntegerField(default=0) 
    ref_13 = models.CharField(max_length=255)    
    quant_13 = models.IntegerField(default=0) 
    
    ref_21 = models.CharField(max_length=255)   
    quant_21 = models.IntegerField(default=0) 
    ref_22 = models.CharField(max_length=255) 
    quant_22 = models.IntegerField(default=0) 
    ref_23 = models.CharField(max_length=255)
    quant_23 = models.IntegerField(default=0) 
    
    ref_31 = models.CharField(max_length=255, blank=True)   
    quant_31 = models.IntegerField(blank=True)
    ref_32 = models.CharField(max_length=255, blank=True) 
    quant_32 = models.IntegerField(blank=True)
    ref_33 = models.CharField(max_length=255, blank=True, default='')
    quant_33 = models.IntegerField(blank=True)
    
    ref_41 = models.CharField(max_length=255,blank=True)   
    quant_41 = models.IntegerField(blank=True)
    ref_42 = models.CharField(max_length=255,blank=True) 
    quant_42 = models.IntegerField(blank=True)
    ref_43 = models.CharField(max_length=255, blank=True, default='')
    quant_43 = models.IntegerField(blank=True)
    
    ref_51 = models.CharField(max_length=255,blank=True)   
    quant_51 = models.IntegerField(blank=True)
    ref_52 = models.CharField(max_length=255,blank=True)
    quant_52 = models.IntegerField(blank=True)
    ref_53 = models.CharField(max_length=255, blank=True, default='')
    quant_53 = models.IntegerField(blank=True)
    
    ref_61 = models.CharField(max_length=255,blank=True)   
    quant_61 = models.IntegerField(blank=True)
    ref_62 = models.CharField(max_length=255,blank=True) 
    quant_62 = models.IntegerField(blank=True)
    ref_63 = models.CharField(max_length=255, blank=True, default='')
    quant_63 = models.IntegerField(blank=True)
    
    def __str__(self):
        return self.usuario.username
    

    