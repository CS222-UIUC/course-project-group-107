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

# Create your views here.

def login(request):
    
    return render(request, '../frontend/src/pages/login.js')

class LoginView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = user.objects.all()
    print(queryset[0].username)



# def logout(request):
    
#     return render(request, 'logout.html')

# def accounts(request):
#     return render(request, 'base.html')

# def login(request):
    
#     return render(request, '../templates/registration/login.html')

# def login(request):
    
#     return render(request, '../templates/registration/login.html')

# def login(request):
    
#     return render(request, '../templates/registration/login.html')

# def login(request):
    
#     return render(request, '../templates/registration/login.html')