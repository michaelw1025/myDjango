from django.urls import path
from .views import skill_view, UserChartView

app_name = 'skills'

urlpatterns = [
    path('', skill_view, name='my-skills'),
    path('<profile_id>', UserChartView.as_view(), name='user-skills'),
]