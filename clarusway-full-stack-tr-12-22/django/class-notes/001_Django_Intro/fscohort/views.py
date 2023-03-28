from django.shortcuts import render
from django.http import HttpResponse


def homefs(request):
    return HttpResponse('Hello FS')