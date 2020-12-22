from django.contrib import admin
from gallery.models import Photo, Location, Category

class PhotoAdmin(admin.ModelAdmin):
    # filter_horizontal =('categories',)
    list_display = ["name", "description", "location", "categories","post_date"]
    class Meta:
        model = Photo

# Register your models here.

admin.site.register(Location)
admin.site.register(Photo,PhotoAdmin)
admin.site.register(Category)
