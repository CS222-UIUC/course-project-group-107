from django.urls import path

from . import views
from .views import liveCapacity



urlpatterns = [
    # path('', views.index, name='index'),
    # path('', views.index, name='index'),
    path('Live/', liveCapacity, name='Live')

    # path('login/', views.LoginView.as_view(), name = 'login')
    

]