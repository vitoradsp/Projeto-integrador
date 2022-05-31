from django.urls import path
from . import views
urlpatterns =[
    path('', views.index,name='home'),
    path('logar/', views.UserLogin, name='login_site'),
    path('registration/', views.UserRegistration, name='resgistration_screen'),
    path('logout/', views.UserLogout, name='logout'),
    path('introduçâo/', views.introducao, name='introdução'),
    path('criando_sua_dieta/', views.create_diet, name='criar_dieta'),
    path('tmb/', views.tela_tmb, name ='tela_tmb'),
<<<<<<< HEAD
    path('perfil/', views.Userperfil, name ='perfil'),
=======
    path('perfil/', views.userperfil, name ='perfil'),
    path('google/', views.login_google, name ='google'),
>>>>>>> d377cd4f021da3eabf441d89dc6b53362433c4da
]
