# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):

class Solution: 
    def firstBadVersion(self, n):  
        """ 
        :type n: int 
        :rtype: int 
        """  

        # Check if the firstBadVersion is the first version.
        # in this case, returns 1.

        if n == 1: 
            return 1;
        
        # Defines a start variable, indicating the first 
        # version to be tested, and an end variable, that = n.
        start = 1
        end = n
        
        # Loops on the numbers, starting from the middle
        # to check where to find the first ocurrency of
        # a true value. 

        while start < end:
            # if deadling with really large numbers, defining middle as
            # start + (end - start) / 2 prevents it from overflowing.
            middle = start + (end - start) / 2
            if isBadVersion(middle): 
                end = middle
            else: 
                start = middle + 1

        # This returns a rounded down integer of the number.
        return int(start)