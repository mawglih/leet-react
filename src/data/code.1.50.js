export const code =  {
    LC1: 
        {   lname: '1. Two Sum',
            description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
            algo: 'The simplest way is to use 2 for loops but it will give you O(n^2). There is more elegant way to solve it with O(n) using Map (or object). The idea is that we enter for loop and check what number needed if we deduct the current number from target. The map contains previous numbers and their indices: NUMBER => INDEX. The simple check in the map - if number (key) is present, then value is the index of the second number in the result. First index is the current index of number in the for loop. Of course if number (key) is not present, then we add it to map.',
            solution:
            `var twoSum = function(nums, target) { 
            let hashMap = new Map();
            let result = []; //array of indices
            for (let i = 0; i < nums.length; i++) {
                let compensator = target - nums[i];
                if(hashMap.has(compensator)) {
                    result.push(i, hashMap.get(compensator));
                    return result;
                } else {
                    hashMap.set(nums[i], i);
                }
            }
            return -1;
            }`,
            speed: 65,
            memory: 43.7,
            keywords: 'Target Sum, 2Sum, hashmap',
        },
    LC2: {
        lname: '2. Add Two Numbers',
        description:'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.<br> You may assume the two numbers do not contain any leading zero, except the number 0 itself.',
        algo: '',
        solution: ` /* @param {ListNode} l1
        * @param {ListNode} l2
        * @return {ListNode}
        */
       var addTwoNumbers = function(l1, l2) {
           const convertListToArray = listNode => {
           let arr = [];
           if(listNode.next != null) {
             arr = arr.concat(convertListToArray(listNode.next));
           };
           arr.push(listNode.val);
           return arr;
         }
         const l1Arr = convertListToArray(l1);
         const l2Arr = convertListToArray(l2);
         let total = BigInt(l1Arr.join('')) + BigInt(l2Arr.join(''));
         let stTotal = total.toString().split('');
         let joinedList = null;
         for(let i = 0; i < stTotal.length; i++) {
           joinedList = {
             val: stTotal[i],
             next: joinedList
           };
         }
         return joinedList;
       };`,
        speed: 118,
        memory: 49.7,
        keywords: 'linked list, list to array, array to list',
    },
    LC3: {
        lname: '3. Longest Substring Without Repeating Characters',
        description:'Given a string s, find the length of the longest substring without repeating characters.',
        algo: '',
        solution: `/**
        * @param {string} s
        * @return {number}
        */
       var lengthOfLongestSubstring = function(s) {
           const hashMap = new Map();
           let longest = 0;
           let startIndex = 0;
           for(let i = 0; i < s.length; i++) {
               console.log('element in hashmap', hashMap.get(s[i]));
               if(hashMap.get(s[i]) >= startIndex) {
                   startIndex = hashMap.get(s[i]) + 1;
                   console.log('startIndex', startIndex);
               } 
               hashMap.set(s[i], i);
               console.log('hashMap', hashMap);
               longest = Math.max(longest, i - startIndex + 1);
               console.log('longest', longest);
           }
           return longest;
       };`,
        speed: 80,
        memory: 45.2,
        keywords: 'strings, longest substrung, map, length of string',
    },
    LC4: {
        lname: '4. Median of Two Sorted Arrays',
        description:'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. <br>The overall run time complexity should be O(log (m+n)).',
        algo: '',
        solution: `// binary search approach - with start - end pointers
        var findMedianSortedArrays2 = function(nums1, nums2) {
            if(nums1.length > nums2.length) {
                let temp = nums1;
                nums1 = nums2;
                nums2 = temp; // so nums1 is shorter
            }
            let len1 = nums1.length;
            let len2 = nums2.length;
            let start = 0;
            let end = len1;
            while(start <= end) {
                let partition1 = parseInt((start + end) / 2);
                let partition2 = parseInt((len1 + len2 + 1) / 2 - partition1);
                // if partition1 empty  - use MIN_SAFE_INTEGER
                // if partition2 empty - use MAX_SAFE_INTEGER
                let maxLeft1 = partition1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[partition1 - 1];
                let minRight1 = partition1 == len1 ? Number.MAX_SAFE_INTEGER : nums1[partition1];
                let maxLeft2 = partition2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[partition2 - 1];
                let minRight2 = partition2 == len2 ? Number.MAX_SAFE_INTEGER : nums2[partition2];
        
                if(maxLeft1 <= minRight2 && maxLeft2 <= minRight1) { //position found, calculate median now and return
                    if((len1 + len2) % 2 === 0) {
                        return ((Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2).toFixed(5);
                    } else {
                        return (Math.max(maxLeft1, maxLeft2)).toFixed(5);
                    }
                } else if (maxLeft1 > minRight2) { // need to go to left
                    end = partition1 - 1;
                } else { // need to go to right
                    start = partition1 + 1;
                }
            }
        };`,
        solution2: `/**
        * @param {number[]} nums1
        * @param {number[]} nums2
        * @return {number}
        */
       
       // simple approach
       var findMedianSortedArrays = function(nums1, nums2) {
           let joinedArr = [...nums1, ...nums2].sort((a, b) => a - b);
           if(joinedArr.length % 2 === 0) {
               return ((joinedArr[joinedArr.length / 2 - 1] + joinedArr[joinedArr.length / 2]) / 2).toFixed(5);
           } else {
               return joinedArr[Math.floor(joinedArr.length / 2)].toFixed(5);
           }
       };`,
        speed: 110,
        memory: 47.1,
        keywords: '2 pointers, median of array',
    },
    LC5: {
        lname: '5. Longest Palindromic Substring',
        description:'Given a string s, return the longest palindromic substring in s.',
        algo: '',
        solution: `/**
        * @param {string}
        * @return {string}
        */
       var longestPalindrome = function(string) {
           let longestPal = '';
       
           var getLongestPalindrome = function (leftPosition, rightPosition) {
               // While there is space to expand, and the expanded strings match
               while (leftPosition >= 0 && rightPosition < string.length && string[leftPosition] === string[rightPosition]) {
                   // Expand in each direction.
                   leftPosition--;
                   rightPosition++;
               }
       
               // Store the longest palindrom (if it's the longest one found so far)
               if (rightPosition - leftPosition > longestPal.length) {
                   longestPal = string.slice(leftPosition + 1, rightPosition);
               }
           };
       
           // Loop through the letters
           for (let i = 0; i < string.length; i++) {
               // Find the longest odd palindrome
               getLongestPalindrome(i, i + 1);
       
               // Find the longest even palindrome
               getLongestPalindrome(i, i);
       
               // Check if a longer palindrome cannot be found
               if ((string.length - i) * 2 < longestPal.length) {
                   // Break out to avoid unnecessary computation
                   break;
               }
           }
           return longestPal;
       };`,
        speed: 0,
        memory: 0,
        keywords: 'palindrome, strings, substring, longest substring',
    },
    LC6: {
        lname: '6. Zigzag Conversion',
        description:'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility). And then read line by line: "PAHNAPLSIIGYIR". Write the code that will take a string and make this conversion given a number of rows: `string convert(string s, int numRows);`',
        algo: '',
        solution: `/**
        * @param {string} s
        * @param {number} numRows
        * @return {string}
        */
       var convert = function(s, numRows) {
           if(numRows === 1) return s;
           let down = true;
           let curr = 1;
           let arr = new Array();
           for(let i = 0; i < numRows; i++) { //create 2-dim array
               arr[i] = new Array();
           }
           //fill array
           for(let i = 0; i < s.length; i++) {
               arr[curr - 1].push(s[i]);
               if(down) {
                   curr++;
                   if(curr > numRows) {
                       curr = numRows - 1;
                       down = false;
                   }
               } else {
                   curr--;
                   if( curr < 1) {
                       curr = 2;
                       down = true;
                   }
               }
           }
           let out = ''; // concatenate string
           for (let i = 0; i < numRows; i++) {
               out += arr[i].join('');
           }
           return out;
       };`,
        speed: 83,
        memory: 49.5,
        keywords: 'strings, zigzag, arrays',
    },
    LC7: {
        lname: '7. Reverse Integer',
        description:'Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. <br>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).',
        algo: '',
        solution: `/**
        * @param {number} x
        * @return {number}
        */
       var reverse = function(x) {
           function checkRange(num) {
               const MAX_NUMBER = Math.pow(2, 31) - 1;
               const MIN_NUMBER = Math.pow(-2, 31);
               return num > MIN_NUMBER && num < MAX_NUMBER;
           }
           let sign = x < 0 ? -1 : 1;
           let rev = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
           rev = checkRange(rev) ? rev : 0
           return rev;
       };
       `,
        speed: 65,
        memory: 45,
        keywords: 'integer, reverse number, strings',
    },
    LC8: {
        lname: '8. String to Integer (atoi)',
        description:'Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++\'s atoi function). <br>The algorithm for myAtoi(string s) is as follows:<br> Read in and ignore any leading whitespace. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored. <br>Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2). If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1. Return the integer as the final result. <br>Note:<br> Only the space character \' \' is considered a whitespace character. Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.',
        algo: '',
        solution: `/**
        * @param {string}
        * @return {number}
        */
       var myAtoi = function(s) {
           let isSignEncountered =  false;
           let sign = 1;
           let result = 0;
           for(let i = 0; i < s.length; i++) {
               let char = s[i];
               if(/[^0-9]/.test(char)) { // filter all non digits, if digit skip to else
                   if(/[a-zA-Z]/.test(char)) { // filter and proceed of it is a letter
                       continue;
                   } else if ((char === '-' || char === '+') && !isSignEncountered) { // if it is a sign then check isSignEncountered and set if needed sign
                       isSignEncountered = true;
                       sign = char === '-' ? -1 : 1;
                       continue;
                   } else if(char = ' ') { // check if it is a whitespace, only before number encountered
                       continue;
                   }
               } else {
                   if(Number.isSafeInteger(result)) { // check for overflow
                       result = result * 10 + parseInt(char);
                       continue;
                   } else {
                       break;
                   }
               }
           }
           result = result * sign;
           if(result < Math.pow(-2, 31)) {  // check if within signed integer borders
               return Math.pow(-2, 31);
           } else if (result > Math.pow(2, 31) - 1) {
               return Math.pow(2, 31) - 1;
           } else {
               return result;
           }
       }`,
        speed: 0,
        memory: 0,
        keywords: 'atoi, string to integer',
    },
    LC9: {
        lname: '9. Palindrome Number',
        description:'Given an integer x, return true if x is a palindrome, and false otherwise.',
        algo: '',
        solution: `/**
        * @param {number} x
        * @return {boolean}
        */
       var isPalindrome = function(x) {
           let temp = x;
           let rev = 0;
           while(temp > 0) {
               let rem = temp % 10; //get the last digit
               temp = parseInt(temp / 10); // remove last digit
               rev = rev * 10 + rem; // add last digit from front or to previous last digit moving previous nimber up by adding 0: * 10
           }
           return x === rev; // if number the same return true
       };`,
        speed: 0,
        memory: 0,
        keywords: 'palindrome, number',
    },
    LC10: {
        lname: '10. Regular Expression Matching',
        description:`Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
        '.' Matches any single character.​​​​
        '*' Matches zero or more of the preceding element.
        The matching should cover the entire input string (not partial).`,
        algo: '',
        solution: `const isMatch = (s, p) => {
            if (p.length === 0 && s.length === 0) return true;
            if (p.length === 0) return false;
            const hasFirstCharMatch = s.length > 0 && (p[0] === '.' || p[0] === s[0]);
            if (p[1] === '*') {
                return (
                    isMatch(s, p.slice(2)) || 
                    (hasFirstCharMatch && isMatch(s.slice(1), p))
                );
            }
            return hasFirstCharMatch ? isMatch(s.slice(1), p.slice(1)) : false;
        };`,
        speed: 1417,
        memory: 49.2,
        keywords: 'regex, match regex',
    },
    LC11: {
        lname: '11. Container With Most Water',
        description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

        Find two lines that together with the x-axis form a container, such that the container contains the most water.
        
        Return the maximum amount of water a container can store.
        
        Notice that you may not slant the container.`,
        algo: '',
        solution: 
        `/**
        * @param {number[]} height
        * @return {number}
        */
       var maxArea = function(height) {
           let left = 0;
           let right = height.length - 1;
           let maxAreaCovered = 0;
           while(left < right) {
               let currentHigh = Math.min(height[left], height[right]);
               let currMax = currentHigh * (right - left);
               maxAreaCovered = maxAreaCovered < currMax ? currMax : maxAreaCovered;
               if(height[left] <= height[right]) {
                   left++;
               } else {
                   right--;
               }
           }
           return maxAreaCovered;
       };`,
        speed: 82,
        memory: 50.1,
        keywords: 'container, max water, pointers',
    },
    LC12: {
        lname: '12. Integer to Roman',
        description:
        `Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

        Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000
        For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
        
        Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
        
        I can be placed before V (5) and X (10) to make 4 and 9. 
        X can be placed before L (50) and C (100) to make 40 and 90. 
        C can be placed before D (500) and M (1000) to make 400 and 900.
        Given an integer, convert it to a roman numeral.`,
        algo: '',
        solution: 
        `/**
        * @param {number} num
        * @return {string}
        */
       var intToRoman = function(num) {
           if(num < 1) return '';
           if(num >= 1000) return 'M' + intToRoman(num - 1000);
           if(num >= 900) return 'CM' + intToRoman(num - 900);
           if(num >= 500) return 'D' + intToRoman(num - 500);
           if(num >= 400) return 'CD' + intToRoman(num - 400);
           if(num >= 100) return 'C' + intToRoman(num - 100);
           if(num >= 90) return 'XC' + intToRoman(num - 90);
           if(num >= 50) return 'L' + intToRoman(num - 50);
           if(num >= 40) return 'XL' + intToRoman(num - 40);
           if(num >= 10) return 'X' + intToRoman(num -10);
           if(num == 9) return 'IX' + intToRoman(num - 9);
           if(num >= 5) return 'V' + intToRoman(num - 5);
           if(num == 4) return 'IV' + intToRoman(num - 4);
           if(num >= 1) return 'I' + intToRoman(num - 1);
       };`,
        speed: 122,
        memory: 47.1,
        keywords: 'Roman, convert to roman, recursive, strings',
    },
    LC13: {
        lname: '13. Roman to Integer',
        description:
        `Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

        Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000
        For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
        
        Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
        
        I can be placed before V (5) and X (10) to make 4 and 9. 
        X can be placed before L (50) and C (100) to make 40 and 90. 
        C can be placed before D (500) and M (1000) to make 400 and 900.
        Given a roman numeral, convert it to an integer.`,
        algo: '',
        solution: 
        `/**
        * @param {string} s
        * @return {number}
        */
       var romanToInt = function(s) {
               const hashMap = {
               I: 1,
               V: 5,
               X: 10,
               L: 50,
               C: 100,
               D: 500,
               M: 1000,
           };
           const len = s.length;
           let total = 0;
       
           for(let i = 0; i < len; i++) {
               if(i < len && hashMap[s[i+1]] > hashMap[s[i]]) {
                   total -= hashMap[s[i]];
               } else {
                   total += hashMap[s[i]];
               }
           }
       
           return total;
       };`,
        speed: 128,
        memory: 47.1,
        keywords: 'roman to integer, hashmap',
    },
    LC14: {
        lname: '14. Longest Common Prefix',
        description:
        `Write a function to find the longest common prefix string amongst an array of strings.

        If there is no common prefix, return an empty string "".       
        
        Example 1:
        Input: strs = ["flower","flow","flight"]
        Output: "fl"`,
        algo: '',
        solution: 
        `/**
        * @param {string[]} strs
        * @return {string}
        */
       var longestCommonPrefix = function(strs) {   
           if (!strs.length) return '';
           for (let i = 0; i < strs[0].length; i++){
               if(strs.some((word) => word[i] !== strs[0][i])) {
                   return strs[0].slice(0, i);
               }
           }
           return strs[0];
       }`,
        speed: 59,
        memory: 42.5,
        keywords: 'strings, substrings, common substring',
    },
    LC15: {
        lname: '15. 3Sum',
        description:
        `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
        Notice that the solution set must not contain duplicate triplets.`,
        algo: '',
        solution: 
        `/**
        * @param {number[]} nums
        * @return {number[][]}
        */
       var threeSum = function(nums) {
           const equalsCheck = (a, b) => a.every((v, i) => v === b[i]);
           let answer = [];
           if(nums.length < 3) return [];
           nums = nums.sort((a, b)=> a-b);
           for(let i = 0; i < nums.length; i++) {
               let a = nums[i];
               let target = a * (-1);
               let left = i + 1;
               let right = nums.length - 1;
               while(left < right) {
                   let b = nums[left];
                   let c = nums[right];
                   let arr = [];
                   if(b + c === target) {
                       arr.push(a, b, c);
                       arr.sort((x,y)=>x-y);
                       if (!answer.some(item => equalsCheck(item, arr))) {
                           answer.push(arr);
                       }
                       left++;
                   } else if(b + c < target) {
                       left++;
                   } else {
                       right--;
                   }
               }
           }
           
           return answer;
       };`,
        speed: 3424,
        memory: 83.1,
        keywords: '3sum, pointers',
    },
    LC16: {
        lname: '16. 3Sum Closest',
        description:
        `Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
        Return the sum of the three integers.
        You may assume that each input would have exactly one solution.`,
        algo: '',
        solution: 
        `/**
        * @param {number[]} nums
        * @param {number} target
        * @return {number}
        */
       var threeSumClosest = function(nums, target) {
           if(nums.length <= 3) {
               nums.forEach(element => {
                   let sum = 0;
                   sum += element;
                   return sum;
               });
           }
           nums.sort((a,b) => a - b);
           let closest = Number.NEGATIVE_INFINITY;
           for (let i = 0; i < nums.length - 2; i++) {
               let left = i + 1;
               let right = nums.length - 1;
               while(left < right) {
                   let curSum = nums[i] + nums[left] + nums[right];
                   closest = Math.abs(target - closest) < Math.abs(target - curSum) ? closest : curSum;
                   if(curSum === target) {
                       return curSum;
                   } else if(curSum < target) {
                       left++;
                   } else {
                       right--;
                   }
               }
           }
           return closest;
       };`,
        speed: 76,
        memory: 43.8,
        keywords: '3sum, pointers',
    },
    LC17: {
        lname: '17. Letter Combinations of a Phone Number',
        description:
        `Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
        A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
         `,
        algo: '',
        solution: 
        `/**
        * @param {string} digits
        * @return {string[]}
        */
       var letterCombinations = function(digits) {
           const hashMap = {
           "2": ["a", "b", "c"],
           "3": ["d", "e", "f"],
           "4": ["g", "h", "i"],
           "5": ["j", "k", "l"],
           "6": ["m", "n", "o"],
           "7": ["p", "q", "r", "s"],
           "8": ["t", "u", "v"],
           "9": ["w", "x", "y", "z"]
         };
         if(digits.length === 0)  return [];
         let result = hashMap[digits[0]].map(d => d);
         if(digits.length === 1) return result;
         for(let i = 1; i < digits.length; i++) {
           const x = digits[i];
           result = result.map(item => hashMap[x].map(letter => item + letter)).flat(1);
         }
         return result;
       }`,
        speed: 59,
        memory: 41.8,
        keywords: 'phone numbers, hashmap, arrays',
    },
    LC18: {
        lname: '18. 4Sum',
        description:
        `Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

        0 <= a, b, c, d < n
        a, b, c, and d are distinct.
        nums[a] + nums[b] + nums[c] + nums[d] == target
        You may return the answer in any order.
        
        `,
        algo: '',
        solution: 
        `/**
        * @param {number[]} nums
        * @param {number} target
        * @return {number[][]}
        */
       var fourSum = function(nums, target) {
           if(nums.length < 4) return [];
           let answer = [];
           nums.sort((a, b) => a - b);
           for (let i = 0; i < nums.length - 3; i++) {
               for (let j = i + 1; j < nums.length - 2; j++) {
                   let left = j + 1;
                   let right = nums.length - 1;
                   while(left < right) {
                       let testSum = nums[i] + nums[j] + nums[left] + nums[right];
                       if (testSum === target) {
                           answer.push([nums[i], nums[j], nums[left], nums[right]]);
                           while((nums[left] === nums[left + 1]) && left < right) left++;
                           while((nums[right] === nums[right - 1]) && left < right) right--;
                           left++;
                           right--;
                       } else if(testSum < target) {
                           left++;
                       } else {
                           right--;
                       }
                   }
                   while(nums[j] === nums[j + 1]) j++;
               }
               while(nums[i] === nums[i + 1]) i++;
           }
           return answer;
       };`,
        speed: 84,
        memory: 44.4,
        keywords: '4sum, pointers',
    },
    LC19: {
        lname: '19. Remove Nth Node From End of List',
        description:
        `Given the head of a linked list, remove the nth node from the end of the list and return its head.`,
        algo: 'This is very simple when translated into plain english. Count total number of nodes by setting a counter and using while loop increase it by going to each node until it points to null. Then use that counter and deduct the N - place of the node in the list. Set another counter and use while loop and increase counter until it hits the previously calculated number, and then skip the node by using assignment of current.next to current.next.next. ',
        solution: 
        `/**
        * Definition for singly-linked list.
        * function ListNode(val, next) {
        *     this.val = (val===undefined ? 0 : val)
        *     this.next = (next===undefined ? null : next)
        * }
        */
       /**
        * @param {ListNode} head
        * @param {number} n
        * @return {ListNode}
        */
       var removeNthFromEnd = function(head, n) {
           let newList = head;
           let nodeCount = 0;
           while(newList !== null) {
               nodeCount++;
               newList = newList.next;
           }
           let num = nodeCount - n;
           if(nodeCount === 1 ) return null;
           if (num === 0) return head.next;
           let counter = 1;
           let current = head;
           while(counter < num) {
               current = current.next;
               counter++;
           }
           current.next = current.next.next;
           return head;
       };`,
        speed: 60,
        memory: 43.5,
        keywords: 'listnode, node operation, nth node',
    },
    LC20: {
        lname: '20. Valid Parentheses',
        description:
        `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

        An input string is valid if:
        
        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.
        Every close bracket has a corresponding open bracket of the same type.`,
        algo: 'The solution is to use stack and FIFO principle. Push into array the mirrored parenthesis (instead of left parenthesis push the right one). When encountered right parenthesis, check if the last one in array popped is the same.',
        solution: 
        `/**
        * @param {string} s
        * @return {boolean}
        */
       var isValid = function(s) { //without creating an Object
           let stack = [];
           for(let i = 0; i < s.length; i++) {
               if(s[i] == '(') {
                   stack.push(')');
               } else if(s[i] == '{') {
                   stack.push('}')
               } else if(s[i] == '[') {
                   stack.push(']');
               } else if (stack.pop() != s[i]) {
                   return false;
               }
           }
           return !stack.length;
       }`,
        solution2:
        `/**
        * @param {string} s
        * @return {boolean}
        */
       var isValid = function(s) { // With Object containing parenthesis pairs
           const bracketMap = {
               '(': ')',
               '{': '}',
               '[': ']',
           };
           let stack = [];
           for (let i = 0; i < s.length; i++) {
               if(bracketMap[i]) {
                   stack.push(s[i]);
               } else if(bracketMap[stack.pop()] !== s[i]) {
                   return false;
               }
           }
           return stack.length === 0;
       }`,
        speed: 0,
        memory: 0,
        keywords: 'parenthesis, strings, stack',
    },
    LC21: {
        lname: '21. Merge Two Sorted Lists',
        description:
        `You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.       
        Return the head of the merged linked list.`,
        algo: 'Create while loop that will be active until both list1 and list2 has value. After break assign to the rest either list 1 or list2',
        solution: 
        `/**
        * @param {ListNode} list1
        * @param {ListNode} list2
        * @return {ListNode}
        */
       var mergeTwoLists = function(list1, list2) {
           let merged = {next: null};
           let tail = merged;
           while(list1 && list2) {
               if(list1.val < list2.val) {
                   tail.next = list1;
                   tail = tail.next;
                   list1 = list1.next;
               } else {
                   tail.next = list2;
                   tail = tail.next;
                   list2 = list2.next;
               }
           }
           tail.next = list1 || list2;
           return merged.next;
       }`,
        speed: 69,
        memory: 43.8,
        keywords: 'ListNode, merge lists, sorted lists',
    },
    LC22: {
        lname: '22. Generate Parenthesis',
        description:
        `Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.`,
        algo: 'Solution is based on recursion using backtracking. Create a helper function with args - a string that used to keep track of previous results, open - number of open parenthesis and close - number of closed parenthesis. The function returns when number of opened and closed parenthesis is equal and result is pushed into array. Maintain recursion while open is less than n and close is less then n. Start from calling helper function with all args equal 0 and empty string.',
        solution: 
        `/**
        * @param {number} n
        * @return {string[]}
        */
       var generateParenthesis = function(n) {
           let res = [];
           
           const dfs = (str, open, close) => {
               if (open < close) return;
               if (open === n && close === n) {
                   res.push(str);
                   return;
               }
               if (open < n) dfs(str + '(', open + 1, close);
               if (close < n) dfs(str + ')', open, close + 1);
           }    
           dfs('', 0, 0);
           return res;
       };`,
        speed: 66,
        memory: 43.9,
        keywords: 'backtracking, recursion, create parenthesis, dfs traversal',
    },
    LC23: {
        lname: '23. Merge k Sorted Lists',
        description:
        `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.`,
        algo: 'Check edge cases when array is empty. Create a helper function that will be used in recurssion. USe first liost as the onr to merge with. After check value call merge on list1 or a current list2. In the for loop call recursively merge list 1 with all other lists.',
        solution: 
        ` /**
        * Definition for singly-linked list.
        * function ListNode(val, next) {
        *     this.val = (val===undefined ? 0 : val)
        *     this.next = (next===undefined ? null : next)
        * }
        */
        /**
        * @param {ListNode[]} lists
        * @return {ListNode}
        */
       const mergeKLists = function(lists) {
           if(lists.length === 0) return null;
       
           const merge = (l1, l2) => {
               if(l1 === null) return l2;
               if(l2 === null) return l1;
               if(l1.val < l2.val) {
                   l1.next = merge(l1.next, l2);
                   return l1;
               } else {
                   l2.next = merge(l2.next, l1);
                   return l2;
               }
           }
           for(let i = 1; i < lists.length; i++) {
               lists[0] = merge(lists[0], lists[i])
           }
           return lists[0];
       }`,
        speed: 572,
        memory: 48.8,
        keywords: 'ListNode, merge lists, mergw multiple lists, recursion',
    },
    LC24: {
        lname: '24. Swap Nodes in Pairs',
        description:
        `Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)`,
        algo: 'Use two variables to keep swapped nodes before swapping them. Use a while loop to check if we reached the end of list.',
        solution: 
        `/**
        * Definition for singly-linked list.
        * function ListNode(val, next) {
        *     this.val = (val===undefined ? 0 : val)
        *     this.next = (next===undefined ? null : next)
        * }
        */
       /**
        * @param {ListNode} head
        * @return {ListNode}
        */
       var swapPairs = function(head) {
           let swapped = new ListNode(null);
           swapped.next = head;
           let prev = swapped;
           while (head && head.next) {
           let n1 = head
           let n2 = head.next
           prev.next = n2
           n1.next = n2.next
           n2.next = n1
           prev = n1
           head = n1.next
           }
           return swapped.next;
       };`,
        speed: 61,
        memory: 42.2,
        keywords: 'ListNode, swap two lists',
    },
    LC25: {
        lname: 'Reverse Nodes in k-Group',
        description:
        `Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list. k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is. You may not alter the values in the list's nodes, only nodes themselves may be changed.`,
        algo: 'Use stack approach - LIFO. After creating stack of k length, pop from the end, so list will be reverted.',
        solution: 
        `/**
        * Definition for singly-linked list.
        * function ListNode(val, next) {
        *     this.val = (val===undefined ? 0 : val)
        *     this.next = (next===undefined ? null : next)
        * }
        */
       /**
        * @param {ListNode} head
        * @param {number} k
        * @return {ListNode}
        */
       var reverseKGroup = function(head, k) {
           let stack = [];
           let node = new ListNode(null);
           let temp = node;
           
           while(head) {
               for(let i = 0; i < k && head; i++) {
                   stack.push(head);
                   head = head.next;
               }
               
               if(stack.length === k) {
                   while(stack.length > 0) {
                       temp.next = stack.pop();
                       temp = temp.next;
                   }
                   temp.next = head;
               }
           }
           return node.next;
       };`,
        speed: 75,
        memory: 46.5,
        keywords: 'linked list, ListNode, stack, reverse linked list',
    },
    LC26: {
        lname: '26. Remove Duplicates from Sorted Array',
        description:
        `Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums. Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:        
        Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
        Return k.`,
        algo: '',
        solution: 
        `/**
        * @param {number[]} nums
        * @return {number}
        */
       var removeDuplicates = function(nums) {
           let i=1;
           while(i < nums.length){
               if(nums[i-1] == nums[i]) {
                   nums.splice(i, 1)
               } else {
                   i++;}
           }
           return i;
       };`,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC27: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC28: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC29: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC30: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC31: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC32: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC33: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC34: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC35: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC36: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC37: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC38: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC39: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC40: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC41: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC42: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC43: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC44: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC45: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC46: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC47: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC48: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC49: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
    LC50: {
        lname: '',
        description:
        ``,
        algo: '',
        solution: 
        ``,
        speed: 0,
        memory: 0,
        keywords: '',
    },
}