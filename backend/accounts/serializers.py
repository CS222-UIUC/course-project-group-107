from .models import user
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ['username', 'password']
