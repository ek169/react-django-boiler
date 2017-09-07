# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import os

from django.http import JsonResponse
import logging

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings

logging.basicConfig(filename='example.log', level=logging.DEBUG)


# Production entry point for app - unquote this when deploying to Heroku

class FrontendAppView(View):

    @method_decorator(ensure_csrf_cookie)
    def get(self, request):
        try:
            with open(os.path.join(settings.STATIC_ROOT, 'index.html')) as f:
                return HttpResponse(f.read())
        except IOError:
            return HttpResponse(404)


# Create your views here.
def test(request):
    if request.method == 'GET':
        return JsonResponse({"name": "/yourname/"})




