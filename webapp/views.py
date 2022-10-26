from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')


def consultant(request):
    return render(request, 'cons.html')

def login(request):
    return render(request, 'login.html')
