from django.test import TestCase
from rest_framework.test import APITestCase
from .models import arcdatacsv
from rest_framework import status

# Create your tests here.


# class DummyTests(TestCase):

#     def dummy_test(self):
        
        
#         self.assertIs(1+1 == 2, True)
#         self.assertIs(2+2 == 4, True)


# class OtherTests(TestCase):
#     def dummy_test(self):
        
        
#         self.assertIs(1+1 == 6, False)
#         self.assertIs(2+8 == 5, False)
    

class TestViews(TestCase):
    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/App/')
        self.assertEqual(response.status_code, 200)
        self.assertIs(response.status_code == 404, False)

    def test_view_url_exists_at_desired_location(self):
        
        response = self.client.get('/App/api/arcdatacsv/')
        self.assertEqual(response.status_code, 200)
        self.assertIs(response.status_code == 404, False)

    def test_view_url_exists_at_desired_location(self):
        
        response = self.client.get('/App/Live/')
        self.assertEqual(response.status_code, 200)
        self.assertIs(response.status_code == 404, False)

    def test_view_url_exists_at_desired_location(self):
        
        response = self.client.get('/App/api/')
        self.assertEqual(response.status_code, 200)
        self.assertIs(response.status_code == 404, False)



class TestAPI(APITestCase):
    def test_get_api_json(self):
        response = self.client.get('http://127.0.0.1:8000/App/api/arcdatacsv/', format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response)

    
        
        print(response.data)
        
        self.assertEqual(arcdatacsv.objects.count(), 0)
        
    
     