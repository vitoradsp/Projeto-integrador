from rest_framework import serializers

from nutri.models import User,Dieta,ImprimirDieta


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model =  User  
        exclude = ()
        
class DietaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dieta
        exclude =  ()

class ImprimirDietaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImprimirDieta
        exclude =  ()


