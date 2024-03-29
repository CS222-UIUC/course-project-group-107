# Generated by Django 4.1.2 on 2022-10-25 04:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ARC_Section',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('level_location', models.CharField(max_length=200)),
                ('capacity', models.IntegerField(default=0)),
                ('person_count', models.IntegerField(default=0)),
                ('up_date', models.DateTimeField(verbose_name='date updated')),
                ('percentage_full', models.DecimalField(decimal_places=1, max_digits=3)),
            ],
        ),
        migrations.CreateModel(
            name='Insight',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('workout_hrs', models.DecimalField(decimal_places=2, default=0.0, max_digits=5)),
                ('preferred_time', models.TimeField(default=0)),
                ('up_date', models.DateTimeField(verbose_name='date updated')),
            ],
        ),
        migrations.CreateModel(
            name='TESTUser_Login',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('net_id', models.CharField(max_length=8)),
                ('access_date', models.DateTimeField(verbose_name='date accessed')),
                ('arc_capacity', models.IntegerField(default=0)),
            ],
        ),
    ]
