from django.urls import path
from . import views

urlpatterns =[
    path('',views.index,name='home'),
    path('login/',views.UserLogin, name='login'),
    path('tmb/',views.Tela_tmb, name='tela_tmb'),
]
