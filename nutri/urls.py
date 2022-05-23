from django.urls import path
from . import views
urlpatterns =[
    path('home/',views.index,name='home'),
    path('',views.UserLogin, name='login'),
]
