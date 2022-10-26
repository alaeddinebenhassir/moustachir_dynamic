from atexit import register
from django.contrib import admin

from .models import Opointement , Client, Cslt ,Schadual

@admin.register(Opointement) 
class OpointementAdmin(admin.ModelAdmin):
    list_display = ('clt','itm','orderdate')
@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name','email')

@admin.register(Cslt)
class CsltAdmin(admin.ModelAdmin):
    list_display = ('name','email')

@admin.register(Schadual)
class SchadualAdmin(admin.ModelAdmin):
    list_display = ('date',"consultant",)