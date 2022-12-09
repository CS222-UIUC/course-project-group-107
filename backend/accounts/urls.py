#from django.contrib.auth import views
from django.urls import path, include
from rest_framework import routers
from accounts import views
from .views import loginReq
from django.views.decorators.csrf import csrf_exempt
# from .views import liveCapacity
from .views import newuserReq

router = routers.DefaultRouter()
router.register(r'user',views.LoginView, 'api') #dont know if login is correct

    
urlpatterns = [
    path('api/user/', loginReq),
    path('api/user/login/', csrf_exempt(loginReq), name='login'),
    path('api/user/newuser/', csrf_exempt(newuserReq), name='newuser')
]


