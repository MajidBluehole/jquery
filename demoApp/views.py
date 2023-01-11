from django.shortcuts import render, redirect
from .models import Profile

default = {

}
# Create your views here.


def index(request):
    return render(request, 'index.html')

def javascript(request):
    return render(request, 'javascript.html')

def basic_jquery(request):
    return render(request, 'basic_jquery.html')


def append_page(request):
    return render(request, 'append_page.html')

def jquery_pagination(request):
    return render(request, 'jquery_pagination.html')


def jquery(request):
    AllProfile()
    return render(request, 'jquery.html', default)


def add(request):
    Profile.objects.create(
        fname=request.POST['fname'],
        lname=request.POST['lname'],
        email=request.POST['email'],
    )
    return redirect(jquery)


def AllProfile():
    default['profile_list'] = Profile.objects.all()
