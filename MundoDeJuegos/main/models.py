from django.db import models

class users(models.Model):
    userName = models.CharField(max_length=50, primary_key=True)
    password = models.CharField(max_length=50)

class avisos(models.Model):
    id = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=50)
    fecha = models.DateField()
    descripcion = models.TextField()
