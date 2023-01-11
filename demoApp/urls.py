from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('jquery',views.jquery,name='jquery'),
    path('basic_jquery',views.basic_jquery,name='basic_jquery'),
    path('add',views.add,name='add'),
    path('AllProfile',views.AllProfile,name='AllProfile'),
    path('append_page',views.append_page,name='append_page'),
    path('javascript',views.javascript,name='javascript'),
    path('jquery_pagination',views.jquery_pagination,name='jquery_pagination'),

]
