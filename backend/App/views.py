from django.shortcuts import render
from django.http import HttpResponse
from .models import TESTUser_Login

# Create your views here.

# def index(request):
#     return HttpResponse("Hello, world. You're at the App index.")

def index(request):
    latest_login_list = TESTUser_Login.objects.order_by('-access_date')[:5]
    output = ', '.join([login.net_id for login in latest_login_list])
    return HttpResponse(output)