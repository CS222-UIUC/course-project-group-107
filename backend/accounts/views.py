from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import logout
from django.shortcuts import HttpResponseRedirect


# Create your views here.

def login(request):
    
    return render(request, 'login.html')

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