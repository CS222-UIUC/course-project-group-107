from django.db import models

# Create your models here.


class ARC_Section(models.Model):
    level_location = models.CharField(max_length=200)
    capacity =  models.IntegerField(default=0)
    person_count = models.IntegerField(default=0)
    pub_date = models.DateTimeField('date updated')