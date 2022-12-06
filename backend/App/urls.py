#from django.contrib.auth import views
from django.urls import path, include
from rest_framework import routers
from App import views
# from .views import loginReq
from django.views.decorators.csrf import csrf_exempt
from .views import liveCapacity
from .views import getAreas



router = routers.DefaultRouter()
router.register(r'arcdatacsv',views.DataView, 'Live') #dont know if login is correct


urlpatterns = [
    path('Live/', liveCapacity, name='Live'),
    
    path('api/arcdatacsv/Live/', csrf_exempt(getAreas), name='Live')
]
   

   
    

