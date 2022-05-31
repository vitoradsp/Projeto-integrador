from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import auth, messages
<<<<<<< HEAD
from django.contrib.auth import login, logout
=======
from django.contrib.auth import login
import requests
>>>>>>> d377cd4f021da3eabf441d89dc6b53362433c4da
from .models import *

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
    return render(request, 'paginas/introdução_dieta.html')

def create_diet(request):
<<<<<<< HEAD
    if request.user.is_authenticated == False:
        return redirect('login_site')
    return render(request,'paginas/create_diet.html')
=======
    response = requests.get('http://127.0.0.1:7000/alimentoes/').json()
   
    return render(request, 'paginas/create_diet.html', {'response':response})
>>>>>>> d377cd4f021da3eabf441d89dc6b53362433c4da

def tela_tmb(request):
    if request.user.is_authenticated == False:
        return redirect('login_site')
    objetivo = Objetivo.objects.all()
    nivel_at = NivelAtividade.objects.all()
    if request.method == 'POST':
        peso = request.POST.get('peso')
        altura = request.POST.get('height')
        idade = request.POST.get('age')
    return render(request, 'paginas/tela_tmb.html', {'objetivo': objetivo, 'nivel_at':nivel_at})

<<<<<<< HEAD
def Userperfil(request, id):
    pass
=======
def userperfil(request, id):
    pass
>>>>>>> d377cd4f021da3eabf441d89dc6b53362433c4da
