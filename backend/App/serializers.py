from .models import arcdatacsv
from rest_framework import serializers


class arcdatacsvSerializer(serializers.ModelSerializer):
    class Meta:
        model = arcdatacsv
        fields = ['area_name', 'capacity']
