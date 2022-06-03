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
    path('perfil/', views.userperfil, name ='perfil'),
    path('diet_screen/', views.diet_screen, name='diet_screen'),
]
