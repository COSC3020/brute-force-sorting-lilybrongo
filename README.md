# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complexity of the algorithm that I implemented is $/Omega(n! * n)$. The permutations portion has a complexity of $/Omega(n!)$, this is when it's generating all permutations of an array length n. The isSorted function has a complexity of $/Omega(n)$, which as the name implies checks if the array is sorted or not. Knowing these two complexities I was able to come to the conclusion that the runtime complexity would be $/Omega(n! * n)$. A best case input would be if the array was already sorted. If the array is already sorted then the function will only need to generate and check one permutation. The complexity would then be $/Omega(n)$. A worst case scenerio would occur when the array is reversed. In this case the function would have to check and generate all permutations before finding the sorted one. The complexity would change if you generated permutations randomly without memory instead of systemically trying them. The randomized process could allow for a potentially faster finding of the sorted permutation, since the random could find it in fewer attempts. I believe the random permutation would still have a complexity of $/Omega(n!)$ since each permutation has a 1/n! chance of being in the sorted order. If it was randomized, then there would be a lot of variability to the efficieny. 

I referenced lecture slides and lecture videos. I communicated with students WIll Greiner and Daniel Collins on how to start this problem. I also referenced geeksforgeeks on brute forcing: https://www.geeksforgeeks.org/brute-force-approach-and-its-pros-and-cons/ 
this helped me understand the uses and complexity. 

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.
