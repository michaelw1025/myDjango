from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'administrators/admin-home.html')

def tabs(request):
    return render(request, 'administrators/admin-home-tabs.html')