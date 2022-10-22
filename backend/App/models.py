from django.db import models

# Create your models here.


class ARC_Section(models.Model):
    level_location = models.CharField(max_length=200)
    capacity =  models.IntegerField(default=0)
    person_count = models.IntegerField(default=0)
    pub_date = models.DateTimeField('date updated')

class Insight(models.Model):
    # level_location = models.CharField(max_length=200)
    workout_hrs =  models.DecimalField(default=0.0, max_digits=5,decimal_places=2)
    preferred_time = models.TimeField(default=0)
    pub_date = models.DateTimeField('date updated')
    location = models.ForeignKey(ARC_Section, on_delete=models.CASCADE)