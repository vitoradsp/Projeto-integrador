# Generated by Django 4.0.4 on 2022-06-06 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nutri', '0003_imprimirdieta'),
    ]

    operations = [
        migrations.AddField(
            model_name='imprimirdieta',
            name='quant_21',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='imprimirdieta',
            name='quant_23',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='imprimirdieta',
            name='ref_21',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='imprimirdieta',
            name='ref_23',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
