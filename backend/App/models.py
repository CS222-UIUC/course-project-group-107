from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.


# class ARC_Section(models.Model):
#     name = models.CharField(max_length = 50)
#     level_location = models.CharField(max_length=200)
#     capacity =  models.IntegerField(default=0)
#     person_count = models.IntegerField(default=0)
#     up_date = models.DateTimeField('date updated')

#     percentage_full = models.DecimalField(max_digits=3, decimal_places = 1)

# class Insight(models.Model):
#     # level_location = models.CharField(max_length=200)
#     workout_hrs =  models.DecimalField(default=0.0, max_digits=5,decimal_places=2)
#     preferred_time = models.TimeField(default=0)
#     up_date = models.DateTimeField('date updated')
#     # location = models.ForeignKey(ARC_Section, on_delete=models.CASCADE)
#     # name = models.ForeignKey(ARC_Section, on_delete=models.CASCADE)


class arcdatacsv(models.Model):
    netid = models.CharField(max_length=8)
    date = models.DateTimeField('date accessed')
    arccap = models.IntegerField(default = 0)

