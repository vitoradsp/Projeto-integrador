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
    kcal_11 = models.IntegerField(default=0)
    prot_11 = models.IntegerField(default=0)
    gord_11 = models.IntegerField(default=0)
    carb_11 = models.IntegerField(default=0)


    ref_12 = models.CharField(max_length=255)
    quant_12 = models.IntegerField(default=0) 
    kcal_12 = models.IntegerField(default=0)
    prot_12 = models.IntegerField(default=0)
    gord_12 = models.IntegerField(default=0)
    carb_12 = models.IntegerField(default=0)


    ref_13 = models.CharField(max_length=255)    
    quant_13 = models.IntegerField(default=0)
    kcal_13 = models.IntegerField(default=0)
    prot_13 = models.IntegerField(default=0)
    gord_13 = models.IntegerField(default=0)
    carb_13 = models.IntegerField(default=0)
    
    ref_21 = models.CharField(max_length=255)   
    quant_21 = models.IntegerField(default=0) 
    kcal_21 = models.IntegerField(default=0)
    prot_21 = models.IntegerField(default=0)
    gord_21 = models.IntegerField(default=0)
    carb_21 = models.IntegerField(default=0)

    ref_22 = models.CharField(max_length=255) 
    quant_22 = models.IntegerField(default=0) 
    kcal_22 = models.IntegerField(default=0)
    prot_22 = models.IntegerField(default=0)
    gord_22 = models.IntegerField(default=0)
    carb_22 = models.IntegerField(default=0)

    ref_23 = models.CharField(max_length=255)
    quant_23 = models.IntegerField(default=0)
    kcal_23 = models.IntegerField(default=0)
    prot_23 = models.IntegerField(default=0)
    gord_23 = models.IntegerField(default=0)
    carb_23 = models.IntegerField(default=0) 
    
    ref_31 = models.CharField(max_length=255, blank=True)   
    quant_31 = models.IntegerField(blank=True,default=0)
    kcal_31 = models.IntegerField(blank=True,default=0)
    prot_31 = models.IntegerField(blank=True,default=0)
    gord_31 = models.IntegerField(blank=True,default=0)
    carb_31 = models.IntegerField(blank=True,default=0)


    ref_32 = models.CharField(max_length=255, blank=True) 
    quant_32 = models.IntegerField(blank=True,default=0)
    kcal_32 = models.IntegerField(blank=True,default=0)
    prot_32 = models.IntegerField(blank=True,default=0)
    gord_32 = models.IntegerField(blank=True,default=0)
    carb_32 = models.IntegerField(blank=True,default=0)


    ref_33 = models.CharField(max_length=255, blank=True, default='')
    quant_33 = models.IntegerField(blank=True,default=0)
    kcal_33 = models.IntegerField(blank=True,default=0)
    prot_33 = models.IntegerField(blank=True,default=0)
    gord_33 = models.IntegerField(blank=True,default=0)
    carb_33 = models.IntegerField(blank=True,default=0)
    
    ref_41 = models.CharField(max_length=255,blank=True)   
    quant_41 = models.IntegerField(blank=True,default=0)
    kcal_41 = models.IntegerField(blank=True,default=0)
    prot_41 = models.IntegerField(blank=True,default=0)
    gord_41 = models.IntegerField(blank=True,default=0)
    carb_41 = models.IntegerField(blank=True,default=0)



    ref_42 = models.CharField(max_length=255,blank=True) 
    quant_42 = models.IntegerField(blank=True,default=0)
    kcal_42 = models.IntegerField(blank=True,default=0)
    prot_42 = models.IntegerField(blank=True,default=0)
    gord_42 = models.IntegerField(blank=True,default=0)
    carb_42 = models.IntegerField(blank=True,default=0)

    ref_43 = models.CharField(max_length=255, blank=True, default='')
    quant_43 = models.IntegerField(blank=True,default=0)
    kcal_43 = models.IntegerField(blank=True,default=0)
    prot_43 = models.IntegerField(blank=True,default=0)
    gord_43 = models.IntegerField(blank=True,default=0)
    carb_43 = models.IntegerField(blank=True,default=0)
    
    ref_51 = models.CharField(max_length=255,blank=True)   
    quant_51 = models.IntegerField(blank=True,default=0)
    kcal_51 = models.IntegerField(blank=True,default=0)
    prot_51 = models.IntegerField(blank=True,default=0)
    gord_51 = models.IntegerField(blank=True,default=0)
    carb_51 = models.IntegerField(blank=True,default=0)


    ref_52 = models.CharField(max_length=255,blank=True)
    quant_52 = models.IntegerField(blank=True,default=0)
    kcal_52 = models.IntegerField(blank=True,default=0)
    prot_52 = models.IntegerField(blank=True,default=0)
    gord_52 = models.IntegerField(blank=True,default=0)
    carb_52 = models.IntegerField(blank=True,default=0)


    ref_53 = models.CharField(max_length=255, blank=True, default='')
    quant_53 = models.IntegerField(blank=True,default=0)
    kcal_53 = models.IntegerField(blank=True,default=0)
    prot_53 = models.IntegerField(blank=True,default=0)
    gord_53 = models.IntegerField(blank=True,default=0)
    carb_53 = models.IntegerField(blank=True,default=0)


    
    ref_61 = models.CharField(max_length=255,blank=True)   
    quant_61 = models.IntegerField(blank=True,default=0)
    kcal_61 = models.IntegerField(blank=True,default=0)
    prot_61 = models.IntegerField(blank=True,default=0)
    gord_61 = models.IntegerField(blank=True,default=0)
    carb_61 = models.IntegerField(blank=True,default=0)


    ref_62 = models.CharField(max_length=255,blank=True) 
    quant_62 = models.IntegerField(blank=True,default=0)
    kcal_62 = models.IntegerField(blank=True,default=0)
    prot_62 = models.IntegerField(blank=True,default=0)
    gord_62 = models.IntegerField(blank=True,default=0)
    carb_62 = models.IntegerField(blank=True,default=0)



    ref_63 = models.CharField(max_length=255, blank=True, default='')
    quant_63 = models.IntegerField(blank=True,default=0)
    kcal_63 = models.IntegerField(blank=True,default=0)
    prot_63 = models.IntegerField(blank=True,default=0)
    gord_63 = models.IntegerField(blank=True,default=0)
    carb_63 = models.IntegerField(blank=True,default=0)
    
    def __str__(self):
        return self.usuario.username
    
    def total_caloria(self):
        ref1 = self.kcal_11 + self.kcal_12 + self.kcal_13 
        ref2 = self.kcal_21 + self.kcal_22 + self.kcal_23 
        ref3 = self.kcal_31 + self.kcal_32 + self.kcal_33
        ref4 = self.kcal_41 + self.kcal_42 + self.kcal_43
        ref5 = self.kcal_51 + self.kcal_52 + self.kcal_53
        ref6 = self.kcal_61 + self.kcal_62 + self.kcal_63
        return ref1 + ref2 + ref3  + ref4 + ref5 + ref6


    def total_proteina(self):
        ref1 = self.prot_11 + self.prot_12 + self.prot_13 
        ref2 = self.prot_21 + self.prot_22 + self.prot_23 
        ref3 = self.prot_31 + self.prot_32 + self.prot_33
        ref4 = self.prot_41 + self.prot_42 + self.prot_43
        ref5 = self.prot_51 + self.prot_52 + self.prot_53
        ref6 = self.prot_61 + self.prot_62 + self.prot_63
        return ref1 + ref2 + ref3  + ref4 + ref5 + ref6
    
    def total_carboidratos(self):
        ref1 = self.carb_11 + self.carb_12 + self.carb_13 
        ref2 = self.carb_21 + self.carb_22 + self.carb_23 
        ref3 = self.carb_31 + self.carb_32 + self.carb_33
        ref4 = self.carb_41 + self.carb_42 + self.carb_43
        ref5 = self.carb_51 + self.carb_52 + self.carb_53
        ref6 = self.carb_61 + self.carb_62 + self.carb_63
        return ref1 + ref2 + ref3  + ref4 + ref5 + ref6

    def total_gordura(self):
        ref1 = self.gord_11 + self.gord_12 + self.gord_13 
        ref2 = self.gord_21 + self.gord_22 + self.gord_23 
        ref3 = self.gord_31 + self.gord_32 + self.gord_33
        ref4 = self.gord_41 + self.gord_42 + self.gord_43
        ref5 = self.gord_51 + self.gord_52 + self.gord_53
        ref6 = self.gord_61 + self.gord_62 + self.gord_63
        return ref1 + ref2 + ref3  + ref4 + ref5 + ref6

    