# React Native FlatList: Missing or Incorrect `keyExtractor`

This repository demonstrates a common issue in React Native's FlatList component:  the absence or incorrect usage of the `keyExtractor` prop.  This can lead to unexpected rendering behavior and performance problems.

## Bug Description
The `keyExtractor` prop is vital for FlatList's performance.  Without it, FlatList cannot efficiently update and render items. This can manifest in different ways, including incorrect item placement, duplicated items, missing items, and even a "Maximum update depth exceeded" error.

## Solution
The solution is to provide a correctly implemented `keyExtractor` function that returns a unique key for each item in your data array.  This key should be consistently unique across renders.

## How to reproduce the bug:
1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run the app on an emulator or device.
4. Observe the incorrect rendering behavior in the FlatList.

## How to fix the bug:
1. Replace the incorrect or missing `keyExtractor` function with the corrected version found in `bugSolution.js`.
2. Rerun the app to see the corrected behavior.