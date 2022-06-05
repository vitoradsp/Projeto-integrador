from django.shortcuts import render,redirect
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
    if request.user.is_authenticated == False:
        return redirect('login_site')
    taco = requests.get('http://127.0.0.1:7000/alimentoes/').json()
    return render(request,'paginas/create_diet.html', {'taco': taco})

def tela_tmb(request):
    if request.user.is_authenticated == False:
        return redirect('login_site')
    else:
        veri_dieta = User.objects.filter(id=request.user.id).filter(dieta=True)
        objetivo = Objetivo.objects.all()
        nivel_at = NivelAtividade.objects.all()
        if request.method == 'POST':
            peso = request.POST.getlist('local_dados_do_user')
            altura = request.POST.get('height')
            idade = request.POST.get('age')
            objetivo  = request.POST.get('objetivo_user')
            n_atividade = request.POST.get('nivel_de_ati_user')
            dados_dieta = request.POST.getlist('local_dados_do_user')
            print(dados_dieta)
            return render(request, 'paginas/create_diet.html', {'objetivo': objetivo, 'nivel_at':nivel_at})
        else: 
            return render(request, 'paginas/tela_tmb.html', {'objetivo': objetivo, 'nivel_at':nivel_at})
    
def diet_screen(request):
    return render(request, 'paginas/diet_screen.html') 


def userperfil(request, id):
    pass
