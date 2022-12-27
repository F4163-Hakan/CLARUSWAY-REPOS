from django.urls import path
from .views import (
    todo_list_create,
    todo_home,
    todo_detail,
    Todo,
    TodoDetail
)

urlpatterns = [
    path('', todo_home),
    # path('list-create/', todo_list_create),
    # path('detail/<int:id>', todo_detail),
    path('list-create/', Todo.as_view()),
    path('detail/<int:id>', TodoDetail.as_view()),

]
