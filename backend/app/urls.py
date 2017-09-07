from django.conf import settings
from django.conf.urls import url
from . import views
from django.conf.urls.static import static

urlpatterns = [
        url('test/', views.test, name="test"),
        url(r'^$', views.FrontendAppView.as_view(), name='index')
        ]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)