from time import process_time
from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth.models import User
from django.contrib import auth, messages
from django.contrib.auth import login, logout
from .models import *
import requests

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

def create_diet(request):
    taco = requests.get('http://127.0.0.1:7000/alimentoes/').json()
    dados = Dieta.objects.get(usuario_id=request.user.id)
    if request.user.is_authenticated == False:
        return redirect('login_site')
    else:
        if request.method == 'POST':
            ref_11 = request.POST.get('alimento_11')
            quant_ref_11 = request.POST.get('quant_ref_11')
            ref_12 = request.POST.get('alimento_12')
            quant_ref_12 = request.POST.get('quant_ref_12')
            ref_13 = request.POST.get('alimento_13')
            quant_ref_13 = request.POST.get('quant_ref_13')
            ref_1=[ref_11,quant_ref_11,ref_12,quant_ref_12,ref_13,quant_ref_13]
            
            ref_21 = request.POST.get('alimento_21')
            quant_ref_21 = request.POST.get('quant_ref_21')
            ref_22 = request.POST.get('alimento_22')
            quant_ref_22 = request.POST.get('quant_ref_22')
            ref_23 = request.POST.get('alimento_23')
            quant_ref_23 = request.POST.get('quant_ref_23')
            ref_2=[ref_21,quant_ref_21,ref_22,quant_ref_22,ref_23,quant_ref_23]
            add_ref = ImprimirDieta.objects.create(usuario_id=request.user.id, ref_1=ref_1,ref_2=ref_2)
            add_ref.save()
            return redirect('diet_screen') 
        else:
            return render(request,'paginas/create_diet.html', {'taco': taco,'dados': dados})

def tela_tmb(request):
    if request.user.is_authenticated == False:
        return redirect('login_site')
    else:
        veri_dieta = User.objects.filter(id=request.user.id).filter(dieta=True)
        objetivo = Objetivo.objects.all()
        nivel_at = NivelAtividade.objects.all()
        if request.method == 'POST':
            peso = request.POST.get('peso')
            altura = request.POST.get('height')
            idade = request.POST.get('age')
            objetivo  = request.POST.get('objetivo_user')
            n_atividade = request.POST.get('nivel_de_ati_user')
            dados_dieta = request.POST.getlist('local_dados_do_user')
            dados_dieta=(dados_dieta[0].split(','))
            add_diet=Dieta.objects.create(usuario_id = request.user.id, objetivo_id = objetivo , peso = peso, altura = altura, idade = idade, genero = dados_dieta[6], tmb=dados_dieta[0], gasto_dia=dados_dieta[1] ,caloria_dieta=dados_dieta[2],proteina=dados_dieta[3],gordura=dados_dieta[4],carboidratos=dados_dieta[5],nivel_atividade_id = n_atividade ,dieta = True )
            add_diet.save()
            return redirect('criar_dieta')
        else: 
            return render(request, 'paginas/tela_tmb.html', {'objetivo': objetivo, 'nivel_at':nivel_at})
    
def diet_screen(request):
    dieta = ImprimirDieta.objects.filter(usuario_id=request.user.id)
    print(dieta)
    return render(request, 'paginas/diet_screen.html', {'dieta':dieta}) 


def userperfil(request, id):
    pass
