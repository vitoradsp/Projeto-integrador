from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'paginas/home.html')
def login(request):
    return render(request,'paginas/login.html')