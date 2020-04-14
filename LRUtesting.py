from LRUcache import LRUCache
class LRUtest:
    def __init__(self):
         self.lru_cache=LRUCache()

    def put(self, k):
        return self.lru_cache.put(k) 

    def get(self,k):
        return self.lru_cache.get(k) 

    def get_cache(self):
        return self.lru_cache.get_cache()          

def main():
        Test_obj=LRUtest()
        Test_obj.put(1)
        Test_obj.put(2)
        Test_obj.put(3)
        Test_obj.put(2)
        assert True == Test_obj.get(1)
        assert True == Test_obj.get(2)
        assert [1,3,2] == Test_obj.get_cache()
        Test_obj.put(4)
        Test_obj.put(5)
        Test_obj.put(4)
        Test_obj.put(6)
        assert [1,3,2,5,4,6] == Test_obj.get_cache()
        print("All the Test cases are passed")

if __name__ == '__main__':
        main()    
