from django.contrib import admin
from .models import ImprimirDieta, Objetivo, NivelAtividade, Dieta


admin.site.register(Objetivo)
admin.site.register(NivelAtividade)
admin.site.register(Dieta)
admin.site.register(ImprimirDieta)
class DietaAdmin(admin.ModelAdmin):
    exclude = ()
class ImprimirDietaAdmin(admin.ModelAdmin):
    exclude = ()
class DietaAdmin(admin.ModelAdmin):
    exclude = ()

