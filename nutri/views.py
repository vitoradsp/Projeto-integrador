from time import process_time
from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth.models import User
from django.contrib import auth, messages
from django.contrib.auth import login, logout
from .models import *
import requests
from rest_framework import  viewsets
from nutri.serializers import DietaSerializer,ImprimirDietaSerializer,UserSerializer 
from rest_framework import filters

##api dos dados do banco##
class DietaViewSet(viewsets.ModelViewSet):
    queryset = Dieta.objects.all()
    serializer_class = DietaSerializer
    filter_backends = [filters.SearchFilter,filters.OrderingFilter]
    search_fields  = ['usuario','genero']
    ordering_fields = ['usuario','genero']

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter,filters.OrderingFilter]
    search_fields  = ['id','username']
    ordering_fields = ['id','username']

class ImprimirDietaViewSet(viewsets.ModelViewSet):
    queryset = ImprimirDieta.objects.all()
    serializer_class = ImprimirDietaSerializer
    filter_backends = [filters.SearchFilter,filters.OrderingFilter]
    search_fields  = ['id','usuario']
    ordering_fields = ['id','usuario']


def index(request):
    return render(request,'paginas/home.html')

def UserLogin(request):
    if request.method == 'POST':
        nome = request.POST.get('username')
        senha = request.POST.get('password')
        check = auth.authenticate(request, username=nome, password=senha)
        if check is not None:
            login(request, check)
            return redirect('home')
        else:
            messages.info(request, 'Login invalido.')
            return render(request,'paginas/login.html')
    else:
        return render(request,'paginas/login.html')

def UserLogout(request):
    logout(request)
    return redirect('login_site')

def UserRegistration(request):
    try:
        usuario = User.objects.get(username=request.POST['username'])
        if usuario:
            messages.info(request, 'Usuário já Existe!')
            return render(request, 'paginas/registration_screen.html')
    except:
        if request.method == "POST":
            nome = request.POST.get('username')
            senha = request.POST.get('password')
            conf_senha = request.POST.get('conf_password')
            veri_senha = len(senha)
            if veri_senha < 6 or veri_senha > 12:
                messages.info(request, 'Senha deve ter entre 6 à 12 carácteres!')
                return render(request, 'paginas/registration_screen.html')
            else:
                add = User.objects.create_user(username=nome, password=senha)
                add.save()
                return redirect('login_site')
        else:
            return render(request, 'paginas/registration_screen.html')
    return render(request, 'paginas/registration_screen.html')

def introducao(request):
    if request.user.is_authenticated == True:
        veri_dieta = User.objects.filter(id=request.user.id).filter(dieta=True)
        if veri_dieta:
            return render(request, 'paginas/introdução_dieta.html', {'veri_dieta': veri_dieta})
        else:
            return render(request, 'paginas/introdução_dieta.html')
    else:
        return render(request, 'paginas/introdução_dieta.html')

def calcular_refeicao(alimento,quantidade,proteina,gordura,carboidratos,kcal):
    kcals=kcal
    alimentos=alimento
    quantidades=quantidade
    proteinas=proteina
    gorduras = gordura
    carboidratos = carboidratos
    if quantidades == '':
        alimentos=''
        quantidades=0
        proteinas=0
        carboidratos=0
        kcals=0
        gorduras=0
        resultado_macros = [alimentos,quantidades, kcals,proteinas,carboidratos,gorduras]
        return resultado_macros
    else:
        proteinas = int((int(quantidades)/100)*int(proteinas))
        carboidratos = int((int(quantidades)/100)*int(carboidratos))
        gorduras = int((int(quantidades)/100)*int(gorduras))
        kcals = int((int(quantidades)/100)*int(kcals))
        resultado_macros = [alimentos,quantidades, kcals,proteinas,carboidratos,gorduras]
        return resultado_macros

def create_diet(request):
    if request.user.is_authenticated == False:
        return redirect('login_site')
    #UPDATE DIETA        
    else:
        taco = requests.get('http://127.0.0.1:7000/alimentos/?ordering=name').json()
        dados = Dieta.objects.get(usuario_id=request.user.id)
        pesquisa = request.GET.get('txtbuscar')
        if pesquisa != None:
            taco = requests.get(f'http://127.0.0.1:7000/alimentos/?search={pesquisa}').json()
        if request.method == 'POST':
            ref_11 = request.POST.get('alimento_11')
            quant_ref_11 = int(request.POST.get('quant_ref_11'))
            prot_ref_11 = request.POST.get('prot_total_11')
            carbo_ref_11 = request.POST.get('carb_total_11')
            gord_ref_11 = request.POST.get('gord_total_11')
            kcal_ref_11 = request.POST.get('kcal_total_11')
            #Contas dos macros
            valores_macros_ref11=calcular_refeicao(ref_11,quant_ref_11,prot_ref_11,gord_ref_11,carbo_ref_11,kcal_ref_11)


            ref_12 = request.POST.get('alimento_12')
            quant_ref_12 = int(request.POST.get('quant_ref_12'))
            prot_ref_12 = request.POST.get('prot_total_12')
            carbo_ref_12 = request.POST.get('carb_total_12')
            gord_ref_12 = request.POST.get('gord_total_12')
            kcal_ref_12 = request.POST.get('kcal_total_12')
            #Contas dos macros
            valores_macros_ref12=calcular_refeicao(ref_12,quant_ref_12,prot_ref_12,gord_ref_12,carbo_ref_12,kcal_ref_12)



            ref_13 = request.POST.get('alimento_13')
            quant_ref_13 = int(request.POST.get('quant_ref_13'))
            prot_ref_13 = request.POST.get('prot_total_13' )
            carbo_ref_13 = request.POST.get('carb_total_13' )
            gord_ref_13 = request.POST.get('gord_total_13' )
            kcal_ref_13 = request.POST.get('kcal_total_13' )
            #Contas dos macros
            valores_macros_ref13=calcular_refeicao(ref_13,quant_ref_13,prot_ref_13,gord_ref_13,carbo_ref_13,kcal_ref_13)
            
            ref_21 = request.POST.get('alimento_21')
            quant_ref_21 = int(request.POST.get('quant_ref_21'))
            prot_ref_21 = request.POST.get('prot_total_21' )
            carbo_ref_21 = request.POST.get('carb_total_21' )
            gord_ref_21 = request.POST.get('gord_total_21' )
            kcal_ref_21 = request.POST.get('kcal_total_21' )
            #Contas dos macros
            valores_macros_ref21=calcular_refeicao(ref_21,quant_ref_21,prot_ref_21,gord_ref_21,carbo_ref_21,kcal_ref_21)

            ref_22 = request.POST.get('alimento_22')
            quant_ref_22 = int(request.POST.get('quant_ref_22'))
            prot_ref_22 = request.POST.get('prot_total_22' )
            carbo_ref_22 = request.POST.get('carb_total_22' )
            gord_ref_22 = request.POST.get('gord_total_22' )
            kcal_ref_22 = request.POST.get('kcal_total_22' )
            #Contas dos macros
            valores_macros_ref22=calcular_refeicao(ref_22,quant_ref_22,prot_ref_22,gord_ref_22,carbo_ref_22,kcal_ref_22)
            


            ref_23 = request.POST.get('alimento_23')
            quant_ref_23 = int(request.POST.get('quant_ref_23'))
            prot_ref_23 = request.POST.get('prot_total_23' )
            carbo_ref_23 = request.POST.get('carb_total_23' )
            gord_ref_23 = request.POST.get('gord_total_23' )
            kcal_ref_23 = request.POST.get('kcal_total_23' )
            #Contas dos macros
            valores_macros_ref23=calcular_refeicao(ref_23,quant_ref_23,prot_ref_23,gord_ref_23,carbo_ref_23,kcal_ref_23)

            check = [ref_11,quant_ref_11, ref_12, quant_ref_12, ref_13, quant_ref_13, ref_21,quant_ref_21,quant_ref_22,ref_23,quant_ref_23]
            for y in check:
                if y == '':
                    messages.info(request, 'Campo(s) Vazio(s).')
                    return redirect('criar_dieta')
            
            ref_31 = request.POST.get('alimento_31')
            quant_ref_31 = request.POST.get('quant_ref_31')
            prot_ref_31 = request.POST.get('prot_total_31' )
            carbo_ref_31 = request.POST.get('carb_total_31' )
            gord_ref_31 = request.POST.get('gord_total_31' )
            kcal_ref_31 = request.POST.get('kcal_total_31' )
            #Contas dos macros
            valores_macros_ref31=calcular_refeicao(ref_31,quant_ref_31,prot_ref_31,gord_ref_31,carbo_ref_31,kcal_ref_31)



            ref_32 = request.POST.get('alimento_32')
            quant_ref_32 = request.POST.get('quant_ref_32')
            prot_ref_32 = request.POST.get('prot_total_32' )
            carbo_ref_32 = request.POST.get('carb_total_32' )
            gord_ref_32 = request.POST.get('gord_total_32' )
            kcal_ref_32 = request.POST.get('kcal_total_32' )
            #Contas dos macros
            valores_macros_ref32=calcular_refeicao(ref_32,quant_ref_32,prot_ref_32,gord_ref_32,carbo_ref_32,kcal_ref_32)

            ref_33 = request.POST.get('alimento_33')
            quant_ref_33 = request.POST.get('quant_ref_33')
            prot_ref_33 = request.POST.get('prot_total_33' )
            carbo_ref_33 = request.POST.get('carb_total_33' )
            gord_ref_33 = request.POST.get('gord_total_33' )
            kcal_ref_33 = request.POST.get('kcal_total_33' )
            #Contas dos macros
            valores_macros_ref33=calcular_refeicao(ref_33,quant_ref_33,prot_ref_33,gord_ref_33,carbo_ref_33,kcal_ref_33)

            
            ref_41 = request.POST.get('alimento_41')
            quant_ref_41 = request.POST.get('quant_ref_41')
            prot_ref_41 = request.POST.get('prot_total_41' )
            carbo_ref_41 = request.POST.get('carb_total_41' )
            gord_ref_41 = request.POST.get('gord_total_41' )
            kcal_ref_41 = request.POST.get('kcal_total_41' )
            #Contas dos macros
            valores_macros_ref41=calcular_refeicao(ref_41,quant_ref_41,prot_ref_41,gord_ref_41,carbo_ref_41,kcal_ref_41)

            ref_42 = request.POST.get('alimento_42')
            quant_ref_42 = request.POST.get('quant_ref_42')
            prot_ref_42 = request.POST.get('prot_total_42' )
            carbo_ref_42 = request.POST.get('carb_total_42' )
            gord_ref_42 = request.POST.get('gord_total_42' )
            kcal_ref_42 = request.POST.get('kcal_total_42' )
            #Contas dos macros
            valores_macros_ref42=calcular_refeicao(ref_42,quant_ref_42,prot_ref_42,gord_ref_42,carbo_ref_42,kcal_ref_42)


            ref_43 = request.POST.get('alimento_43')
            quant_ref_43 = request.POST.get('quant_ref_43')
            prot_ref_43 = request.POST.get('prot_total_43' )
            carbo_ref_43 = request.POST.get('carb_total_43' )
            gord_ref_43 = request.POST.get('gord_total_43' )
            kcal_ref_43 = request.POST.get('kcal_total_43' )
            #Contas dos macros
            valores_macros_ref43=calcular_refeicao(ref_43,quant_ref_43,prot_ref_43,gord_ref_43,carbo_ref_43,kcal_ref_43)
            
            ref_51 = request.POST.get('alimento_51')
            quant_ref_51 = request.POST.get('quant_ref_51')
            prot_ref_51 = request.POST.get('prot_total_51' )
            carbo_ref_51 = request.POST.get('carb_total_51' )
            gord_ref_51 = request.POST.get('gord_total_51' )
            kcal_ref_51 = request.POST.get('kcal_total_51' )
            #Contas dos macros
            valores_macros_ref51=calcular_refeicao(ref_51,quant_ref_51,prot_ref_51,gord_ref_51,carbo_ref_51,kcal_ref_51)

            ref_52 = request.POST.get('alimento_52')
            quant_ref_52 = request.POST.get('quant_ref_52')
            prot_ref_52 = request.POST.get('prot_total_52' )
            carbo_ref_52 = request.POST.get('carb_total_52' )
            gord_ref_52 = request.POST.get('gord_total_52' )
            kcal_ref_52 = request.POST.get('kcal_total_52' )
            #Contas dos macros
            valores_macros_ref52=calcular_refeicao(ref_52,quant_ref_52,prot_ref_52,gord_ref_52,carbo_ref_52,kcal_ref_52)
                

            ref_53 = request.POST.get('alimento_53')
            quant_ref_53 = request.POST.get('quant_ref_53')
            prot_ref_53 = request.POST.get('prot_total_53' )
            carbo_ref_53 = request.POST.get('carb_total_53' )
            gord_ref_53 = request.POST.get('gord_total_53' )
            kcal_ref_53 = request.POST.get('kcal_total_53' )
            #Contas dos macros
            valores_macros_ref53=calcular_refeicao(ref_53,quant_ref_53,prot_ref_53,gord_ref_53,carbo_ref_53,kcal_ref_53)
            
            
            ref_61 = request.POST.get('alimento_61')
            quant_ref_61 = request.POST.get('quant_ref_61')
            prot_ref_61 = request.POST.get('prot_total_61' )
            carbo_ref_61 = request.POST.get('carb_total_61' )
            gord_ref_61 = request.POST.get('gord_total_61' )
            kcal_ref_61 = request.POST.get('kcal_total_61' )
            #Contas dos macros
            valores_macros_ref61=calcular_refeicao(ref_61,quant_ref_61,prot_ref_61,gord_ref_61,carbo_ref_61,kcal_ref_61)

            ref_62 = request.POST.get('alimento_62')
            quant_ref_62 = request.POST.get('quant_ref_62')
            prot_ref_62 = request.POST.get('prot_total_62' )
            carbo_ref_62 = request.POST.get('carb_total_62' )
            gord_ref_62 = request.POST.get('gord_total_62' )
            kcal_ref_62 = request.POST.get('kcal_total_62' )
            #Contas dos macros
            valores_macros_ref62=calcular_refeicao(ref_62,quant_ref_62,prot_ref_62,gord_ref_62,carbo_ref_62,kcal_ref_62)

            ref_63 = request.POST.get('alimento_63')
            quant_ref_63 = request.POST.get('quant_ref_63')
            prot_ref_63 = request.POST.get('prot_total_63' )
            carbo_ref_63 = request.POST.get('carb_total_63' )
            gord_ref_63 = request.POST.get('gord_total_63' )
            kcal_ref_63 = request.POST.get('kcal_total_63' )
            #Contas dos macros
            valores_macros_ref63=calcular_refeicao(ref_63,quant_ref_63,prot_ref_63,gord_ref_63,carbo_ref_63,kcal_ref_63)
            try:
                ver = ImprimirDieta.objects.get(usuario_id=request.user.id)
                if ver:
                    alimento_1={'name': valores_macros_ref11[0] , 'quantidade':valores_macros_ref11[1] ,'kcal':valores_macros_ref11[2] ,'proteina':valores_macros_ref11[3] ,'fat':valores_macros_ref11[4] ,'carboidratos':valores_macros_ref11[5]}
                    alimento_2={'name':valores_macros_ref12[0] , 'quantidade':valores_macros_ref12[1] ,'kcal':valores_macros_ref12[2] ,'proteina':valores_macros_ref12[3] ,'fat':valores_macros_ref12[4] ,'carboidratos':valores_macros_ref12[5]}
                    alimento_3={'name': valores_macros_ref13[0], 'quantidade':valores_macros_ref13[1] ,'kcal':valores_macros_ref13[2] ,'proteina':valores_macros_ref13[3] ,'fat':valores_macros_ref13[4] ,'carboidratos':valores_macros_ref13[5]}
                    alimento_4={'name': valores_macros_ref21[0], 'quantidade':valores_macros_ref21[1] ,'kcal':valores_macros_ref21[2] ,'proteina':valores_macros_ref21[3] ,'fat':valores_macros_ref21[4] ,'carboidratos':valores_macros_ref21[5]}
                    alimento_5={'name': valores_macros_ref22[0], 'quantidade':valores_macros_ref22[1] ,'kcal':valores_macros_ref22[2] ,'proteina':valores_macros_ref22[3] ,'fat':valores_macros_ref22[4] ,'carboidratos':valores_macros_ref22[5]}
                    alimento_6={'name': valores_macros_ref23[0], 'quantidade':valores_macros_ref23[1] ,'kcal':valores_macros_ref23[2] ,'proteina':valores_macros_ref23[3] ,'fat':valores_macros_ref23[4] ,'carboidratos':valores_macros_ref23[5]}
                    alimento_7={'name': valores_macros_ref31[0], 'quantidade':valores_macros_ref31[1] ,'kcal':valores_macros_ref31[2] ,'proteina':valores_macros_ref31[3] ,'fat':valores_macros_ref31[4] ,'carboidratos':valores_macros_ref31[5]}
                    alimento_8={'name': valores_macros_ref32[0], 'quantidade':valores_macros_ref32[1] ,'kcal':valores_macros_ref32[2] ,'proteina':valores_macros_ref32[3] ,'fat':valores_macros_ref32[4] ,'carboidratos':valores_macros_ref32[5]}
                    alimento_9={'name': valores_macros_ref33[0], 'quantidade':valores_macros_ref33[1] ,'kcal':valores_macros_ref33[2] ,'proteina':valores_macros_ref33[3] ,'fat':valores_macros_ref33[4] ,'carboidratos':valores_macros_ref33[5]}
                    alimento_10={'name': valores_macros_ref41[0], 'quantidade':valores_macros_ref41[1] ,'kcal':valores_macros_ref41[2] ,'proteina':valores_macros_ref41[3] ,'fat':valores_macros_ref41[4] ,'carboidratos':valores_macros_ref41[5]}
                    alimento_11={'name': valores_macros_ref42[0], 'quantidade':valores_macros_ref42[1] ,'kcal':valores_macros_ref42[2] ,'proteina':valores_macros_ref42[3] ,'fat':valores_macros_ref42[4] ,'carboidratos':valores_macros_ref42[5]}
                    alimento_12={'name': valores_macros_ref43[0], 'quantidade':valores_macros_ref43[1] ,'kcal':valores_macros_ref43[2] ,'proteina':valores_macros_ref43[3] ,'fat':valores_macros_ref43[4] ,'carboidratos':valores_macros_ref43[5]}
                    alimento_13={'name': valores_macros_ref51[0], 'quantidade':valores_macros_ref51[1] ,'kcal':valores_macros_ref51[2] ,'proteina':valores_macros_ref51[3] ,'fat':valores_macros_ref51[4] ,'carboidratos':valores_macros_ref51[5]}
                    alimento_14={'name': valores_macros_ref52[0], 'quantidade':valores_macros_ref52[1] ,'kcal':valores_macros_ref52[2] ,'proteina':valores_macros_ref52[3] ,'fat':valores_macros_ref52[4] ,'carboidratos':valores_macros_ref52[5]}
                    alimento_15={'name': valores_macros_ref53[0], 'quantidade':valores_macros_ref53[1] ,'kcal':valores_macros_ref53[2] ,'proteina':valores_macros_ref53[3] ,'fat':valores_macros_ref53[4] ,'carboidratos':valores_macros_ref53[5]}
                    alimento_16={'name': valores_macros_ref61[0], 'quantidade':valores_macros_ref61[1] ,'kcal':valores_macros_ref61[2] ,'proteina':valores_macros_ref61[3] ,'fat':valores_macros_ref61[4] ,'carboidratos':valores_macros_ref61[5]}
                    alimento_17={'name': valores_macros_ref62[0], 'quantidade':valores_macros_ref62[1] ,'kcal':valores_macros_ref62[2] ,'proteina':valores_macros_ref62[3] ,'fat':valores_macros_ref62[4] ,'carboidratos':valores_macros_ref62[5]}
                    alimento_18={'name': valores_macros_ref63[0], 'quantidade':valores_macros_ref63[1] ,'kcal':valores_macros_ref63[2] ,'proteina':valores_macros_ref63[3] ,'fat':valores_macros_ref63[4] ,'carboidratos':valores_macros_ref63[5]}
                    add_diet=ImprimirDieta.objects.update(usuario_id=request.user.id,
                    ref_11=alimento_1['name'], ref_12 = alimento_2['name'], ref_13=alimento_3['name'],
                    ref_21=alimento_4['name'],ref_22=alimento_5['name'],ref_23=alimento_6['name'],
                    ref_31=alimento_7['name'],ref_32=alimento_8['name'],ref_33=alimento_9['name'],
                    ref_41=alimento_10['name'],ref_42=alimento_11['name'],ref_43=alimento_12['name'],
                    ref_51=alimento_13['name'],ref_52=alimento_14['name'],ref_53=alimento_15['name'],
                    ref_61=alimento_16['name'],ref_62=alimento_17['name'],ref_63=alimento_18['name'],
                    quant_11=alimento_1['quantidade'], quant_12=alimento_2['quantidade'],
                    quant_13=alimento_3['quantidade'], quant_21=alimento_4['quantidade'],
                    quant_22=alimento_5['quantidade'], quant_23=alimento_6['quantidade'],
                    quant_31=alimento_7['quantidade'], quant_32=alimento_8['quantidade'],
                    quant_33=alimento_9['quantidade'], quant_41=alimento_10['quantidade'],
                    quant_42=alimento_11['quantidade'], quant_43=alimento_12['quantidade'],
                    quant_51=alimento_13['quantidade'], quant_52=alimento_14['quantidade'],
                    quant_53=alimento_15['quantidade'], quant_61=alimento_16['quantidade'],
                    quant_62=alimento_17['quantidade'], quant_63=alimento_18['quantidade'],
                    kcal_11=alimento_1['kcal'],kcal_12=alimento_2['kcal'],kcal_13=alimento_3['kcal'],
                    kcal_21=alimento_4['kcal'],kcal_22=alimento_5['kcal'],kcal_23=alimento_6['kcal'],
                    kcal_31=alimento_7['kcal'],kcal_32=alimento_8['kcal'],kcal_33=alimento_9['kcal'] , 
                    kcal_41=alimento_10['kcal'],kcal_42=alimento_11['kcal'],kcal_43= alimento_12['kcal'],
                    kcal_51=alimento_13['kcal'],kcal_52=alimento_14['kcal'],kcal_53= alimento_15['kcal'],
                    kcal_61=alimento_16['kcal'],kcal_62=alimento_17['kcal'],kcal_63=alimento_18['kcal'] ,
                    prot_11=alimento_1['proteina'],prot_12=alimento_2['proteina'],prot_13=alimento_3['proteina'],
                    prot_21=alimento_4['proteina'],prot_22=alimento_5['proteina'],prot_23=alimento_6['proteina'],
                    prot_31=alimento_7['proteina'],prot_32=alimento_8['proteina'],prot_33=alimento_9['proteina'],
                    prot_41=alimento_10['proteina'],prot_42=alimento_11['proteina'],prot_43=alimento_12['proteina'],
                    prot_51=alimento_13['proteina'],prot_52=alimento_14['proteina'],prot_53=alimento_15['proteina'],
                    prot_61=alimento_16['proteina'],prot_62=alimento_17['proteina'],prot_63=alimento_18['proteina'],
                    gord_11=alimento_1['fat'],gord_12=alimento_2['fat'],gord_13=alimento_3['fat'],
                    gord_21=alimento_4['fat'],gord_22=alimento_5['fat'],gord_23=alimento_6['fat'],
                    gord_31=alimento_7['fat'],gord_32=alimento_8['fat'],gord_33=alimento_9['fat'],
                    gord_41=alimento_10['fat'],gord_42=alimento_11['fat'],gord_43=alimento_12['fat'],
                    gord_51=alimento_13['fat'],gord_52=alimento_14['fat'],gord_53=alimento_15['fat'],
                    gord_61=alimento_16['fat'],gord_62=alimento_17['fat'],gord_63=alimento_18['fat'],
                    carb_11=alimento_1['carboidratos'],carb_12=alimento_2['carboidratos'],carb_13=alimento_3['carboidratos'],
                    carb_21=alimento_4['carboidratos'],carb_22=alimento_5['carboidratos'],carb_23=alimento_6['carboidratos'],
                    carb_31=alimento_7['carboidratos'],carb_32=alimento_8['carboidratos'],carb_33=alimento_9['carboidratos'],
                    carb_41=alimento_10['carboidratos'],carb_42=alimento_11['carboidratos'],carb_43=alimento_12['carboidratos'],
                    carb_51=alimento_13['carboidratos'],carb_52=alimento_14['carboidratos'],carb_53=alimento_15['carboidratos'],
                    carb_61=alimento_16['carboidratos'],carb_62=alimento_17['carboidratos'],carb_63=alimento_18['carboidratos']
                    )
                    return redirect('diet_screen') 
            except:
                alimento_1={'name': valores_macros_ref11[0] , 'quantidade':valores_macros_ref11[1] ,'kcal':valores_macros_ref11[2] ,'proteina':valores_macros_ref11[3] ,'fat':valores_macros_ref11[4] ,'carboidratos':valores_macros_ref11[5]}
                alimento_2={'name':valores_macros_ref12[0] , 'quantidade':valores_macros_ref12[1] ,'kcal':valores_macros_ref12[2] ,'proteina':valores_macros_ref12[3] ,'fat':valores_macros_ref12[4] ,'carboidratos':valores_macros_ref12[5]}
                alimento_3={'name': valores_macros_ref13[0], 'quantidade':valores_macros_ref13[1] ,'kcal':valores_macros_ref13[2] ,'proteina':valores_macros_ref13[3] ,'fat':valores_macros_ref13[4] ,'carboidratos':valores_macros_ref13[5]}
                alimento_4={'name': valores_macros_ref21[0], 'quantidade':valores_macros_ref21[1] ,'kcal':valores_macros_ref21[2] ,'proteina':valores_macros_ref21[3] ,'fat':valores_macros_ref21[4] ,'carboidratos':valores_macros_ref21[5]}
                alimento_5={'name': valores_macros_ref22[0], 'quantidade':valores_macros_ref22[1] ,'kcal':valores_macros_ref22[2] ,'proteina':valores_macros_ref22[3] ,'fat':valores_macros_ref22[4] ,'carboidratos':valores_macros_ref22[5]}
                alimento_6={'name': valores_macros_ref23[0], 'quantidade':valores_macros_ref23[1] ,'kcal':valores_macros_ref23[2] ,'proteina':valores_macros_ref23[3] ,'fat':valores_macros_ref23[4] ,'carboidratos':valores_macros_ref23[5]}
                alimento_7={'name': valores_macros_ref31[0], 'quantidade':valores_macros_ref31[1] ,'kcal':valores_macros_ref31[2] ,'proteina':valores_macros_ref31[3] ,'fat':valores_macros_ref31[4] ,'carboidratos':valores_macros_ref31[5]}
                alimento_8={'name': valores_macros_ref32[0], 'quantidade':valores_macros_ref32[1] ,'kcal':valores_macros_ref32[2] ,'proteina':valores_macros_ref32[3] ,'fat':valores_macros_ref32[4] ,'carboidratos':valores_macros_ref32[5]}
                alimento_9={'name': valores_macros_ref33[0], 'quantidade':valores_macros_ref33[1] ,'kcal':valores_macros_ref33[2] ,'proteina':valores_macros_ref33[3] ,'fat':valores_macros_ref33[4] ,'carboidratos':valores_macros_ref33[5]}
                alimento_10={'name': valores_macros_ref41[0], 'quantidade':valores_macros_ref41[1] ,'kcal':valores_macros_ref41[2] ,'proteina':valores_macros_ref41[3] ,'fat':valores_macros_ref41[4] ,'carboidratos':valores_macros_ref41[5]}
                alimento_11={'name': valores_macros_ref42[0], 'quantidade':valores_macros_ref42[1] ,'kcal':valores_macros_ref42[2] ,'proteina':valores_macros_ref42[3] ,'fat':valores_macros_ref42[4] ,'carboidratos':valores_macros_ref42[5]}
                alimento_12={'name': valores_macros_ref43[0], 'quantidade':valores_macros_ref43[1] ,'kcal':valores_macros_ref43[2] ,'proteina':valores_macros_ref43[3] ,'fat':valores_macros_ref43[4] ,'carboidratos':valores_macros_ref43[5]}
                alimento_13={'name': valores_macros_ref51[0], 'quantidade':valores_macros_ref51[1] ,'kcal':valores_macros_ref51[2] ,'proteina':valores_macros_ref51[3] ,'fat':valores_macros_ref51[4] ,'carboidratos':valores_macros_ref51[5]}
                alimento_14={'name': valores_macros_ref52[0], 'quantidade':valores_macros_ref52[1] ,'kcal':valores_macros_ref52[2] ,'proteina':valores_macros_ref52[3] ,'fat':valores_macros_ref52[4] ,'carboidratos':valores_macros_ref52[5]}
                alimento_15={'name': valores_macros_ref53[0], 'quantidade':valores_macros_ref53[1] ,'kcal':valores_macros_ref53[2] ,'proteina':valores_macros_ref53[3] ,'fat':valores_macros_ref53[4] ,'carboidratos':valores_macros_ref53[5]}
                alimento_16={'name': valores_macros_ref61[0], 'quantidade':valores_macros_ref61[1] ,'kcal':valores_macros_ref61[2] ,'proteina':valores_macros_ref61[3] ,'fat':valores_macros_ref61[4] ,'carboidratos':valores_macros_ref61[5]}
                alimento_17={'name': valores_macros_ref62[0], 'quantidade':valores_macros_ref62[1] ,'kcal':valores_macros_ref62[2] ,'proteina':valores_macros_ref62[3] ,'fat':valores_macros_ref62[4] ,'carboidratos':valores_macros_ref62[5]}
                alimento_18={'name': valores_macros_ref63[0], 'quantidade':valores_macros_ref63[1] ,'kcal':valores_macros_ref63[2] ,'proteina':valores_macros_ref63[3] ,'fat':valores_macros_ref63[4] ,'carboidratos':valores_macros_ref63[5]}       
                add_ref = ImprimirDieta.objects.create(
                    usuario_id=request.user.id, 
                    ref_11=alimento_1['name'], ref_12 = alimento_2['name'], ref_13=alimento_3['name'],
                    ref_21=alimento_4['name'],ref_22=alimento_5['name'],ref_23=alimento_6['name'],
                    ref_31=alimento_7['name'],ref_32=alimento_8['name'],ref_33=alimento_9['name'],
                    ref_41=alimento_10['name'],ref_42=alimento_11['name'],ref_43=alimento_12['name'],
                    ref_51=alimento_13['name'],ref_52=alimento_14['name'],ref_53=alimento_15['name'],
                    ref_61=alimento_16['name'],ref_62=alimento_17['name'],ref_63=alimento_18['name'],
                    quant_11=alimento_1['quantidade'], quant_12=alimento_2['quantidade'],
                    quant_13=alimento_3['quantidade'], quant_21=alimento_4['quantidade'],
                    quant_22=alimento_5['quantidade'], quant_23=alimento_6['quantidade'],
                    quant_31=alimento_7['quantidade'], quant_32=alimento_8['quantidade'],
                    quant_33=alimento_9['quantidade'], quant_41=alimento_10['quantidade'],
                    quant_42=alimento_11['quantidade'], quant_43=alimento_12['quantidade'],
                    quant_51=alimento_13['quantidade'], quant_52=alimento_14['quantidade'],
                    quant_53=alimento_15['quantidade'], quant_61=alimento_16['quantidade'],
                    quant_62=alimento_17['quantidade'], quant_63=alimento_18['quantidade'],
                    kcal_11=alimento_1['kcal'],kcal_12=alimento_2['kcal'],kcal_13=alimento_3['kcal'],
                    kcal_21=alimento_4['kcal'],kcal_22=alimento_5['kcal'],kcal_23=alimento_6['kcal'],
                    kcal_31=alimento_7['kcal'],kcal_32=alimento_8['kcal'],kcal_33=alimento_9['kcal'] , 
                    kcal_41=alimento_10['kcal'],kcal_42=alimento_11['kcal'],kcal_43= alimento_12['kcal'],
                    kcal_51=alimento_13['kcal'],kcal_52=alimento_14['kcal'],kcal_53= alimento_15['kcal'],
                    kcal_61=alimento_16['kcal'],kcal_62=alimento_17['kcal'],kcal_63=alimento_18['kcal'] ,
                    prot_11=alimento_1['proteina'],prot_12=alimento_2['proteina'],prot_13=alimento_3['proteina'],
                    prot_21=alimento_4['proteina'],prot_22=alimento_5['proteina'],prot_23=alimento_6['proteina'],
                    prot_31=alimento_7['proteina'],prot_32=alimento_8['proteina'],prot_33=alimento_9['proteina'],
                    prot_41=alimento_10['proteina'],prot_42=alimento_11['proteina'],prot_43=alimento_12['proteina'],
                    prot_51=alimento_13['proteina'],prot_52=alimento_14['proteina'],prot_53=alimento_15['proteina'],
                    prot_61=alimento_16['proteina'],prot_62=alimento_17['proteina'],prot_63=alimento_18['proteina'],
                    gord_11=alimento_1['fat'],gord_12=alimento_2['fat'],gord_13=alimento_3['fat'],
                    gord_21=alimento_4['fat'],gord_22=alimento_5['fat'],gord_23=alimento_6['fat'],
                    gord_31=alimento_7['fat'],gord_32=alimento_8['fat'],gord_33=alimento_9['fat'],
                    gord_41=alimento_10['fat'],gord_42=alimento_11['fat'],gord_43=alimento_12['fat'],
                    gord_51=alimento_13['fat'],gord_52=alimento_14['fat'],gord_53=alimento_15['fat'],
                    gord_61=alimento_16['fat'],gord_62=alimento_17['fat'],gord_63=alimento_18['fat'],
                    carb_11=alimento_1['carboidratos'],carb_12=alimento_2['carboidratos'],carb_13=alimento_3['carboidratos'],
                    carb_21=alimento_4['carboidratos'],carb_22=alimento_5['carboidratos'],carb_23=alimento_6['carboidratos'],
                    carb_31=alimento_7['carboidratos'],carb_32=alimento_8['carboidratos'],carb_33=alimento_9['carboidratos'],
                    carb_41=alimento_10['carboidratos'],carb_42=alimento_11['carboidratos'],carb_43=alimento_12['carboidratos'],
                    carb_51=alimento_13['carboidratos'],carb_52=alimento_14['carboidratos'],carb_53=alimento_15['carboidratos'],
                    carb_61=alimento_16['carboidratos'],carb_62=alimento_17['carboidratos'],carb_63=alimento_18['carboidratos']
                    )
                add_ref.save()
                return redirect('diet_screen') 
        else:
            return render(request,'paginas/create_diet.html', {'taco': taco,'dados': dados})

def tela_tmb(request):
    if request.user.is_authenticated == False:
        return redirect('login_site')
    else:
        objetivo = Objetivo.objects.all()
        nivel_at = NivelAtividade.objects.all()
        try:
            verUser = get_object_or_404(Dieta, usuario_id = request.user.id)
        except:
            verUser = False    
        if request.method == 'POST':
            peso = request.POST.get('peso')
            altura = request.POST.get('height')
            idade = request.POST.get('age')
            sexo = request.POST.get('opcao')
            objetivo  = request.POST.get('objetivo_user')
            n_atividade = request.POST.get('nivel_de_ati_user')
            dados_dieta = request.POST.getlist('local_dados_do_user')
            if peso == '' or altura == '' or idade == '':
                messages.info(request, 'Preencha todos os campos.')
                return redirect('tela_tmb')
            elif peso.isdigit() == False or idade.isdigit() == False or altura.isdigit() == False:
                messages.info(request, 'Caracteres invalidos')
                return redirect('tela_tmb')
            elif int(altura) > 272 or int(peso) > 300 or int(idade) > 100:
                messages.info(request, 'Campo(s) invalido(s).')
                return redirect('tela_tmb')
            try:
                ver = Dieta.objects.get(usuario_id=request.user.id)
                if ver:
                    dados_dieta=(dados_dieta[0].split(','))
                    add_diet = Dieta.objects.get(usuario_id=request.user.id)
                    add_diet=Dieta.objects.update(objetivo_id = objetivo , peso = peso, altura = altura, idade = idade, genero = sexo, tmb=dados_dieta[0], gasto_dia=dados_dieta[1] ,caloria_dieta=dados_dieta[2],proteina=dados_dieta[3],gordura=dados_dieta[4],carboidratos=dados_dieta[5],nivel_atividade_id = n_atividade ,dieta = True )
                    return redirect('criar_dieta')
            except:    
                ver = False
                dados_dieta=(dados_dieta[0].split(','))
                add_diet=Dieta.objects.create(usuario_id = request.user.id, objetivo_id = objetivo , peso = peso, altura = altura, idade = idade, genero = sexo, tmb=dados_dieta[0], gasto_dia=dados_dieta[1] ,caloria_dieta=dados_dieta[2],proteina=dados_dieta[3],gordura=dados_dieta[4],carboidratos=dados_dieta[5],nivel_atividade_id = n_atividade ,dieta = True )
                add_diet.save()
                return redirect('criar_dieta')
        else: 
            return render(request, 'paginas/tela_tmb.html', {'objetivo': objetivo, 'nivel_at':nivel_at, 'verUser':verUser})
    
def diet_screen(request):
    dieta = ImprimirDieta.objects.filter(usuario_id=request.user.id)
    if len(dieta) == 0:
        if request.user.is_authenticated == False:
            messages.info(request, 'Faça o Login')
            return redirect('login_site')
        VerificarTmb=Dieta.objects.filter(usuario_id=request.user.id)
        if len(VerificarTmb) != 0 :
            messages.info(request, 'Faça as refeições')
            return redirect('criar_dieta')
        messages.info(request, 'Preencha os dados')
        return redirect('tela_tmb')
    total_caloria=dieta[0].total_caloria()
    total_proteina = dieta[0].total_proteina()
    total_carboidratos=dieta[0].total_carboidratos()
    total_gordura=dieta[0].total_gordura()
    return render(request, 'paginas/diet_screen.html', {'dieta':dieta,'total_caloria':total_caloria,'total_proteina':total_proteina,'total_carboidratos':total_carboidratos,'total_gordura':total_gordura}) 
