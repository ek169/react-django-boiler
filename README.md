This package is a combination between the create-react-app project (https://github.com/facebookincubator/create-react-app)
and the Django project (https://www.djangoproject.com). The purpose for placing these two packages together with
some supplementary settings is to allow for fast deployment of web applications consisting of a Django API backend with
a React front end served as static files. This build is specifically for deploying on Heroku and contains the
Procfile and settings to do so.

*IN ORDER TO SET UP THE PROJECT YOU MUST FIRST HAVE PIP, VIRTUALENV NPM, AND (FOR DEPLOYMENT) THE HEROKU CLI INSTALLED*

Once these tools and are downloaded, navigate to the
/react-django-boiler/" directory and then use the following command to create a virtual environment:

    virtualenv env

This will create a virtual environment called "env", and the package will show up in the root of this project. Activate
your virtual environment with the command:

    source env/bin/activate

Next while in the "/react-django-boiler/backend", run the following command:

    pip install -r requirements.txt

This will install the dependencies needed to now run this project locally or deploy it.

This package upon opening is set to deploy locally. To deploy locally, open up two terminals. In the first terminal you
should navigate to the "/react-django-boiler/backend" directory, and then run the following command:

    python manage.py runserver

In the second terminal navigate to the "/react-django-boiler/frontend", and use the following command:

    npm start

The project will now be live at localhost:3000

To deploy on Heroku please do the follow:

Navigate to "/react-django-boiler/frontend", and in the terminal run

    npm run build

this will build a static version of the react frontend.

Next, navigate to "/react-django-boiler/backend/backend/wsgi.py", and uncomment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", backend.settings)", then comment out the backend.settings_local.

Then navigate to "/react-django-boiler/backend", and in the terminal run the command "python manage.py collectstatic".
This will place the static version of the react build into the "./app/static" folder in the
"/react-django-boiler/backend" directory. Then run the following commands to organize the directory:

     cd app
     rsync -a ./static/static/* ./static
     rm -r ./static/static

This will place all of the static files into the "/react-django-boiler/backend/app/static" directory and are now
in place to be served by Django in production. Every time a new build is run, you must go through this sequence of
moving the next static files to the proper directory.

The final step is to set up the application on Heroku. The git reposity that you will add and commit is the
"/react-djang-boiler/backend" directory. Follow the directions on Heroku, and before pushing to master, use the
final following command:

    heroku config:set DISABLE_COLLECTSTATIC=1

After pushing, your application will be live =)


