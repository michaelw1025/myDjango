from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'tabs': ['Dashboard', 'Users'],
    }
    return render(request, 'administrators/admin-home.html', context)