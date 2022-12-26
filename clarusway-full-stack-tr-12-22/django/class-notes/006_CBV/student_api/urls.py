from django.urls import path
from .views import (
    #! function views
    home,
    # students_list,
    # student_create,
    # student_detail,
    # student_update,
    # student_delete,
    # student_api,
    # student_api_get_update_delete
    
    #! class views
    StudentListCreate,
    StudentDetail,
)

urlpatterns = [
    #! function views
    path("", home),
    # path("student-list/", students_list, name='list'),
    # path("student-create/", student_create, name='create'),
    # path("student-detail/<int:pk>/", student_detail, name='detail'),
    # path("student-update/<int:pk>/", student_update, name='update'),
    # path("student-delete/<int:pk>/", student_delete, name='delete'),
    # path('student/', student_api),
    # path('student/<int:pk>', student_api_get_update_delete)
    
    #! class views
    path("student/", StudentListCreate.as_view()),
    path("student/<int:pk>", StudentDetail.as_view()),
]
