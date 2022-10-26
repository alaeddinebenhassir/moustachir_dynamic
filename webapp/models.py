from django.db import models


        
class Client(models.Model):
    name = models.CharField(max_length=50)
    email= models.CharField(max_length=100)

    def __str__(self):
        return self.name
    class Meta :
        pass

class Cslt(models.Model):
    name = models.CharField(max_length=50)
    email= models.CharField(max_length=100)

    def __str__(self):
        return self.name
    class Meta :
        pass

class Schadual(models.Model):
    id = models.BigAutoField(primary_key=True)
    consultant= models.ForeignKey(Cslt ,on_delete=models.CASCADE)
    date = models.DateTimeField()
    def __str__(self):
        return str(self.id)
    class Meta :
        pass

      
class Opointement(models.Model):

    clt = models.ForeignKey(Client , on_delete = models.CASCADE)
    itm =models.ForeignKey(Schadual , on_delete=models.CASCADE)
    orderdate = models.DateTimeField(auto_now = True )

    class Meta : 
       
        ordering = ['-orderdate']
    def __str__(self):
        return  str(self.itm) + ' by ' + str(self.clt) + '  AT : ' +str(self.orderdate)
