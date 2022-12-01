#from django.contrib.auth import views
from django.urls import path, include
from rest_framework import routers
from accounts import views
from .views import loginReq
# from .views import liveCapacity

router = routers.DefaultRouter()
router.register(r'user',views.LoginView, 'login') #dont know if login is correct


urlpatterns = [
    #path('login/', views.LoginView.as_view(), name='login'),
    #path('logout/', views.LogoutView.as_view(), name='logout'),
    #path('password-change/', views.PasswordChangeView.as_view(), name='password_change'),
    #path('password-change/done/', views.PasswordChangeDoneView.as_view(), name='password_change_done'),
    #path('password-reset/', views.PasswordResetView.as_view(), name='password_reset'),
    #path('password-reset/done/', views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    #path('reset/<uidb64>/<token>/', views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    #path('reset/done/', views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
    path('api/', include(router.urls)),
    path('login/', loginReq, name='login'),
]
#commit for latest changes 




    # path('logout/', views.LogoutView.as_view(), name='logout'),
    # path('password-change/', views.PasswordChangeView.as_view(), name='password_change'),
    # path('password-change/done/', views.PasswordChangeDoneView.as_view(), name='password_change_done'),
    # path('password-reset/', views.PasswordResetView.as_view(), name='password_reset'),
    # path('password-reset/done/', views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    # path('reset/<uidb64>/<token>/', views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    # path('reset/done/', views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),

    # using django auth templates