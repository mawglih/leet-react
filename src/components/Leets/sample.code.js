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
    },
    LC11: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC12: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC13: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC14: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC15: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC16: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC17: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC18: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC19: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC20: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC21: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC22: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC23: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC24: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC25: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC26: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC27: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC28: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC29: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC30: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC31: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC32: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC33: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC34: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC35: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC36: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC37: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC38: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC39: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC40: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC41: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC42: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC43: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC44: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC45: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC46: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC47: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC48: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC49: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
    LC50: {
        lname: '',
        description:'',
        algo: '',
        solution: ``,
        speed: 0,
        memory: 0,
    },
}