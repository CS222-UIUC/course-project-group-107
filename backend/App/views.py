from django.shortcuts import render
from django.http import HttpResponse
from .models import arcdatacsv
from .serializers import arcdatacsvSerializer
from .models import arcdatacsv
# from .logincheck import isvalidpass
from rest_framework import viewsets
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.

# def index(request):
#     return HttpResponse("Hello, world. You're at the App index.")

def liveCapacity(request):
    areas = arcdatacsv.objects.all()
    output =  ', '.join([str(caps.capacity) for caps in areas])
    return HttpResponse(output)
    
def getAreas(request):
    if request.method == 'GET':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        area_name= body['area_name']
        capacity = body['capacity']
        print(area_name)
        print(capacity)
        
    return HttpResponse(capacity)

@csrf_exempt
class DataView(viewsets.ModelViewSet):
    serializer_class = arcdatacsvSerializer
    queryset = arcdatacsv.objects.all()
    print(queryset[0].capacity)