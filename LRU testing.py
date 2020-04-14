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
        LRUTest_obj=LRUtest()
        LRUTest_obj.put(1)
        assert [1] == LRUTest_obj.get_cache()
        assert True == LRUTest_obj.get(1)
        print("All the Test cases are passed")

if __name__ == '__main__':
        main()    
