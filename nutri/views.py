from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import auth, messages
from django.contrib.auth import login
from .models import *
from django.contrib.auth.decorators import login_required


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
    return render(request,'paginas/login.html')

def introducao(request):
    return render(request,'paginas/introdução_dieta.html')

@login_required
def create_diet(request):
    return render(request,'paginas/create_diet.html')

def tela_tmb(request):
    objetivo = Objetivo.objects.all()
    nivel_at = NivelAtividade.objects.all()
    if request.method == 'POST':
        peso = request.POST.get('peso')
        altura = request.POST.get('height')
        idade = request.POST.get('age')
    
    return render(request, 'paginas/tela_tmb.html', {'objetivo': objetivo, 'nivel_at':nivel_at})
def Userperfil(request,id):
    pass