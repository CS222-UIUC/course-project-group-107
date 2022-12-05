from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import logout
from django.shortcuts import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import UserSerializer
from .models import user
from .logincheck import isvalidpass
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.

def loginReq(request):
    isvalid = False
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        username = body['username']
        password = body['password']
        print(username)
        print(password)
        isvalid = isvalidpass(username, password)
    return HttpResponse(isvalid)
    

    
   
@csrf_exempt
class LoginView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = user.objects.all()
    print(queryset[0].username)


