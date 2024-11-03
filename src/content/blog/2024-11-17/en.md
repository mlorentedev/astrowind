---
title: "O yes! The Big O Notation"
description: "In this post, we delve into Big O Notation, a fundamental concept in computer science used to describe the efficiency of algorithms. We'll explore how Big O helps in analyzing time complexity and provide examples to illustrate its application."
pubDate: 2024-11-17
lang: en
---

> ⚡️ **TL;DR**  
> In this post, we delve into Big O Notation, a fundamental concept in computer science used to describe the efficiency of algorithms. We'll explore how Big O helps in analyzing time complexity and provide examples to illustrate its application.

In general, we can't simply label one algorithm a "400-ste algorithm" and another a "500-step algorithm". This is because the number of steps an algorithm takes cannot be pinned down to a single number. Let's take linear search, for example. The number of steps it takes to find an element in a list depends on the position of the element in the list. If the element is at the beginning of the list, the algorithm will take fewer steps than if the element is at the end of the list.

The more effective way, then, to quantify the efficiency of linear search is to say that linear search takes N steps to find an element in a list of N elements. This is a more general way to describe the efficiency of an algorithm.

To help ease communication regarding time complexity, computer scientists have borrowed a concept from mathematics to describe a concise and consisten language around the efficiency of data structures and algorithms. Known as Big O Notation, this formalized expression of these concepts allow us to easily categorize the efficiency of a given algorithm and convey its efficiency to others.

## What is Big O Notation?

Once you understand Big O Notation, you'll have the tools to analyze each algorithm you encounter and determine its efficiency. Let's start applying Big O to the algorithm of linear search.

In a worst case scenario, linear search will take as many steps as there are elements in the array. For N elements in the array, linear search can take up to N steps. This is expressed in Big O Notation as O(N).

Here's what the notation means. It expresses the answer to what we'll call the key question: if there are N data elements, how many steps will the algorithm take in the worst case scenario? Go ahead and read the sentence again, but this time replace the N with the number of elements in the array. This is the essence of Big O Notation.

Let's contrast this with how Big O would express the efficiency of reading from a standard array. Reading from an array takes just one step, no matter how large the array is. To figure out how to express this in Big O terms, we are asking the same key question: if there are N data elements, how many steps will the algorithm take in the worst case scenario? In this case, the answer is always 1. So, the Big O Notation for reading from an array is O(1).

O(1) is interesting, since all algorithms that take a constant number of steps to complete are considered to be O(1). This is because the number of steps the algorithm takes does not depend on the number of elements in the array. This is the most efficient time complexity an algorithm can have.

## The soul of Big O Notation

Now that we understand O(N) and O(1), we begin to see that Big O Notation does more than simply describe the number of steps an algorithm takes. Rather, it's an answer to that key question: if there are N data elements, how many steps will the algorithm take in the worst case scenario?

Let's say we have an algorithmt that tkaes three steps no matter how much data there is. That is, for N elements, the algorithm always takes three steps. In Big O terms, this is O(3). But, since the number of steps the algorithm takes does not depend on the number of elements in the array, we can simplify this to O(1).

The sould of Big O is what Big O is trying to tell us. It's not just about the number of steps an algorithm takes, but about how an algorithm's performance change as the data changes.

an algorithm that is O(N), on the other hand, is a different type of algorithm whose performance changes linearly with the data. If the data doubles, the number of steps the algorithm takes also doubles. This is the story O(N) tells us. It tells about the proportional relationship between the data and the algorithm's efficiency. It describer exactly how the number of steps increase as the data increases.

## Deeper into the Big O

Say we had an algorithm of constant time that always took 100 steps no matter how much data there was. Would you consider that to be more or less performant than an algorithm that is O(N)?

For a data set that is fewer than 100 elements, an O(N) algorithm takes fewer steps than the O(1) 100-step algorithm. But, as the data set grows, the O(N) algorithm will eventually surpass the O(1) algorithm in terms of efficiency. This is the power of Big O Notation. It allows us to compare the efficiency of algorithms as the data changes.

Because there will always be some amount of data at which the tides turn, and O(N) takes more steps from that point until infinity, O(N) is considered less efficient than O(1) no matter how many steps the O(1) algorithm takes.

### An algorithm of the third kind

Let's now look at how to describe binary search in terms of Big O Notation. We cannot describre it as O(1). because the number of steps increases as the data increases. It also doesn't fit into the categoru of O(N), since the number of steps is much fewer that the N data elements. So, how do we describe binary search?

Binary search is an algorithm that takes log(N) steps to find an element in a sorted array of N elements. This is because binary search cuts the data in half with each step. This is the most efficient time complexity an algorithm can have, and it is expressed in Big O Notation as O(log(N)). This way descrober that the number of steps the algorithm increases one step each time the data is doubled.

In computer science, whenever we say O(log N), ot's actually shorthand for saying O(log2 N). This is because the base of the logarithm doesn't matter when we're talking about Big O Notation. The base of the logarithm is a constant, and Big O Notation is only concerned with the growth rate of the algorithm.

### Speeding up our code with Big O
