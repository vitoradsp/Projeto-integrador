from django.urls import path
from . import views
urlpatterns =[
    path('',views.index,name='home'),
<<<<<<< HEAD
    path('login/', views.UserLogin, name='login'),
=======
    path('login/',views.UserLogin, name='login'),
    path('introduçâo/',views.introducao, name='introdução'),
    path('criando_sua_dieta/',views.create_diet, name='criar_dieta'),
>>>>>>> fabian
]
