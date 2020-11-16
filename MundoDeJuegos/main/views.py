from django.shortcuts import render
from django.http import HttpResponse
import datetime

from main.models import *

#Functions
def getAdvices():
    txtAvisos = ""
    avisosInfo = list(avisos.objects.all())
    for i in avisosInfo:
        txtAvisos+=i.titulo+"$next$"
        txtAvisos+=i.descripcion+"$next$"
        txtAvisos+=str(i.fecha)+"$end$"
    txtAvisos = txtAvisos[:-5]
    return txtAvisos

#Views

def main(request):
    return render(request, "main/templates/mainPage.html", {"avisos": getAdvices()})

def admin(request):
    if request.POST:
        #try:
        user = users.objects.get(userName=request.POST.get("user"))
        if (user.password == request.POST.get("password")):
            return render(request, "main/templates/adminPage.html", {"avisos":getAdvices()})
        else:
            return login(request)
        #except:
            return login(request)
    else:
        return login(request)
        
def editarAvisos(request):
    if request.POST:
        if request.POST.get("eliminar") != None:
            print(request.POST.get("eliminar"))
            advice = avisos.objects.filter(titulo=request.POST.get("eliminar"))
            advice.delete()
        elif request.POST.get("crear") != None:
            advice = avisos(titulo=request.POST.get("crear").split("$next$")[0], descripcion=request.POST.get("crear").split("$next$")[1], fecha=datetime.date.today())
            advice.save()
        else:
            return render(request, "main/templates/adminPage.html", {"avisos":getAdvices()})
        return render(request, "main/templates/redirect.html")
    else:
        return login(request)
            

def login(request):
    return render(request, "main/templates/loginPage.html")

def prueba(request):
    return HttpResponse(users.objects.get(userName="Juan Miguel Cadavid").password)
