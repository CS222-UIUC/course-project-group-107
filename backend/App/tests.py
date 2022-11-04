from django.test import TestCase

# Create your tests here.


# class DummyTests(TestCase):

#     def dummy_test(self):
        
        
#         self.assertIs(1+1 == 2, True)
#         self.assertIs(2+2 == 4, True)


# class OtherTests(TestCase):
#     def dummy_test(self):
        
        
#         self.assertIs(1+1 == 6, False)
#         self.assertIs(2+8 == 5, False)
    

class TestExistence(TestCase):
    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/App/')
        self.assertEqual(response.status_code, 200)
        self.assertIs(response.status_code == 404, False)
    