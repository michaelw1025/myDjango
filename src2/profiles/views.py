from django.shortcuts import render
from django.http import HttpResponse
from .models import Profile

# Create your views here.
def test_view(request):
    hw = "Hello World"
    return HttpResponse(hw)

def test_view_1(request):
    gs = "Go to sleep"
    return HttpResponse(gs)

def test_view_2(request):
    if request.user.is_authenticated:
        user = request.user
        profile = Profile.objects.get(user=user)
    else:
        profile = 'no user'

    context = {
        'user': profile
    }

    return render(request, 'profiles/test.html', context)