from django.shortcuts import render
from django.http import HttpResponse
from .models import arcdatacsv


# Create your views here.

# def index(request):
#     return HttpResponse("Hello, world. You're at the App index.")

def liveCapacity(request):
    areas = arcdatacsv.objects.all()
    output =  ', '.join([str(caps.arccap) for caps in areas])
    return HttpResponse(output)
    