### 1.What is JSX, and why is it used?
### Answer:
JSX বা JavaScript XML হলো JavaScript-এর একটি এক্সটেন্ডেড সিনট্যাক্স যা দেখতে HTML-এর মতো লাগে। এটি React-এ UI তৈরি করতে ব্যবহৃত হয়।    
এটি ব্যবহার করা হয় কারণ:
- কোড পড়া ও বোঝা সহজ হয়, কারণ এটি HTML-এর মতো দেখতে।
- UI দ্রুত ও সহজে বানানো যায়।
- JSX-এর ভিতরে সরাসরি JavaScript এক্সপ্রেশন ব্যবহার করা যায়।

---
### 2.What is the difference between State and Props?
### Answer:
State হলো কম্পোনেন্টের নিজের ডেটা। এটা সে নিজে তৈরি করে এবং পরিবর্তনও করতে পারে। যখনই State পরিবর্তন হয়, React অটোমেটিকভাবে কম্পোনেন্ট রি-রেন্ডার করে এবং UI নতুন ডেটা অনুযায়ী আপডেট হয়। কিন্তু, Props হলো parent কম্পোনেন্ট থেকে child কম্পোনেন্টে আসা ডেটা। Child শুধু Props ব্যবহার করতে পারে, কিন্তু পরিবর্তন করতে পারে না।

---
### 3.What is the useState hook, and how does it work?
### Answer:
useState হলো React-এর built-in Hook যা functional components-এ local state ব্যবহার করতে দেয়। এটি দুটি value রিটার্ন করে। একটি হলো state-এর বর্তমান মান, অন্যটি হলো সেই state update করার function। যখন state update করা হয়, কম্পোনেন্ট অটোমেটিকভাবে re-render হয় এবং UI নতুন মান অনুযায়ী আপডেট হয়।

--- 
### 4.How can you share state between components in React?
### Answer:
Components এর মধ্যে state share করতে হলে state সেই components এর সবচেয়ে কাছের common parent-এ রাখা হয়। Parent তার state এবং update function props হিসেবে child components-এ পাঠায়।

---
### 5.How is event handling done in React?
### Answer:
React-এ event handling করা হয় JSX-এ function assign করে। Events সবসময় camelCase ফরম্যাটে লেখা হয়। Event handler হিসেবে function reference দেওয়া হয়। React ইভেন্টগুলোকে SyntheticEvent হিসেবে handle করে, যাতে সব ব্রাউজারে একইভাবে কাজ করে। যখন event ঘটে, UI বা state অটোমেটিকভাবে আপডেট হয়।

---