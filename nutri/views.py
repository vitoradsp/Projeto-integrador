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
            messages.info(request, 'Usu??rio j?? Existe!')
            return render(request, 'paginas/registration_screen.html')
    except:
        if request.method == "POST":
            nome = request.POST.get('username')
            senha = request.POST.get('password')
            conf_senha = request.POST.get('conf_password')
            veri_senha = len(senha)
            if veri_senha < 6 or veri_senha > 12:
                messages.info(request, 'Senha deve ter entre 6 ?? 12 car??cteres!')
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
            return render(request, 'paginas/introdu????o_dieta.html', {'veri_dieta': veri_dieta})
        else:
            return render(request, 'paginas/introdu????o_dieta.html')
    else:
        return render(request, 'paginas/introdu????o_dieta.html')

def create_diet(request):
    if request.user.is_authenticated == False:
        return redirect('login_site')
    #UPDATE DIETA        
    else:
        taco = requests.get('http://127.0.0.1:7000/alimentos/?ordering=name').json()
        print(taco)
        dados = Dieta.objects.get(usuario_id=request.user.id)
        pesquisa = request.GET.get('txtbuscar')
        print(pesquisa)
        if pesquisa != None:
            print('entrou aqui')
            taco = requests.get(f'http://127.0.0.1:7000/alimentos/?search={pesquisa}').json()
            print(taco)
        if request.method == 'POST':
            ref_11 = request.POST.get('alimento_11')
            quant_ref_11 = request.POST.get('quant_ref_11')
            ref_12 = request.POST.get('alimento_12')
            quant_ref_12 = request.POST.get('quant_ref_12')
            ref_13 = request.POST.get('alimento_13')
            quant_ref_13 = request.POST.get('quant_ref_13')

            
            ref_21 = request.POST.get('alimento_21')
            quant_ref_21 = request.POST.get('quant_ref_21')
            ref_22 = request.POST.get('alimento_22')
            quant_ref_22 = request.POST.get('quant_ref_22')
            ref_23 = request.POST.get('alimento_23')
            quant_ref_23 = request.POST.get('quant_ref_23')

            check = [ref_11,quant_ref_11, ref_12, quant_ref_12, ref_13, quant_ref_13, ref_21,quant_ref_21,quant_ref_22,ref_23,quant_ref_23]
            for y in check:
                if y == '':
                    messages.info(request, 'Campo(s) Vazio(s).')
                    return redirect('criar_dieta')
            
            ref_31 = request.POST.get('alimento_31')
            quant_ref_31 = int(request.POST.get('quant_ref_31'))
            ref_32 = request.POST.get('alimento_32')
            quant_ref_32 = int(request.POST.get('quant_ref_32'))
            ref_33 = request.POST.get('alimento_33')
            quant_ref_33 = request.POST.get('quant_ref_33')

            
            ref_41 = request.POST.get('alimento_41')
            quant_ref_41 = request.POST.get('quant_ref_41')
            ref_42 = request.POST.get('alimento_42')
            quant_ref_42 = request.POST.get('quant_ref_42')
            ref_43 = request.POST.get('alimento_43')
            quant_ref_43 = request.POST.get('quant_ref_43')

            
            ref_51 = request.POST.get('alimento_51')
            quant_ref_51 = request.POST.get('quant_ref_51')
            ref_52 = request.POST.get('alimento_52')
            quant_ref_52 = request.POST.get('quant_ref_52')
            ref_53 = request.POST.get('alimento_53')
            quant_ref_53 = request.POST.get('quant_ref_53')

            
            ref_61 = request.POST.get('alimento_61')
            quant_ref_61 = request.POST.get('quant_ref_61')
            ref_62 = request.POST.get('alimento_62')
            quant_ref_62 = request.POST.get('quant_ref_62')
            ref_63 = request.POST.get('alimento_63')
            quant_ref_63 = request.POST.get('quant_ref_63')
            try:
                ver = ImprimirDieta.objects.get(usuario_id=request.user.id)
                if ver.exists():
                    dados_dieta=(dados_dieta[0].split(','))
                    add_diet = ImprimirDieta.objects.get(usuario_id=request.user.id)
                    add_diet=ImprimirDieta.objects.update(usuario_id=request.user.id, ref_11=ref_11, ref_12 = ref_12, ref_13=ref_13, ref_21=ref_21,ref_22=ref_22,ref_23=ref_23,ref_31=ref_31,ref_32=ref_32,ref_33=ref_33,ref_41=ref_41,ref_42=ref_42,ref_43=ref_43,ref_51=ref_51,ref_52=ref_52,ref_53=ref_53,ref_61=ref_61,ref_62=ref_62,ref_63=ref_63, quant_11=quant_ref_11, quant_12=quant_ref_12, quant_13=quant_ref_13, quant_21=quant_ref_21, quant_22=quant_ref_22, quant_23=quant_ref_23, quant_31=quant_ref_31, quant_32=quant_ref_32, quant_33=quant_ref_33, quant_41=quant_ref_41, quant_42=quant_ref_42, quant_43=quant_ref_43, quant_51=quant_ref_51, quant_52=quant_ref_52, quant_53=quant_ref_53, quant_61=quant_ref_61, quant_62=quant_ref_62, quant_63=quant_ref_63)
            except:       
                add_ref = ImprimirDieta.objects.create(usuario_id=request.user.id, ref_11=ref_11, ref_12 = ref_12, ref_13=ref_13, ref_21=ref_21,ref_22=ref_22,ref_23=ref_23,ref_31=ref_31,ref_32=ref_32,ref_33=ref_33,ref_41=ref_41,ref_42=ref_42,ref_43=ref_43,ref_51=ref_51,ref_52=ref_52,ref_53=ref_53,ref_61=ref_61,ref_62=ref_62,ref_63=ref_63, quant_11=quant_ref_11, quant_12=quant_ref_12, quant_13=quant_ref_13, quant_21=quant_ref_21, quant_22=quant_ref_22, quant_23=quant_ref_23, quant_31=quant_ref_31, quant_32=quant_ref_32, quant_33=quant_ref_33, quant_41=quant_ref_41, quant_42=quant_ref_42, quant_43=quant_ref_43, quant_51=quant_ref_51, quant_52=quant_ref_52, quant_53=quant_ref_53, quant_61=quant_ref_61, quant_62=quant_ref_62, quant_63=quant_ref_63)
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
            messages.info(request, 'Fa??a o Login')
            return redirect('login_site')
        VerificarTmb=Dieta.objects.filter(usuario_id=request.user.id)
        if len(VerificarTmb) != 0 :
            messages.info(request, 'Fa??a as refei????es')
            return redirect('criar_dieta')
        messages.info(request, 'Crie sua dieta')
        return redirect('tela_tmb')   
    return render(request, 'paginas/diet_screen.html', {'dieta':dieta}) 

