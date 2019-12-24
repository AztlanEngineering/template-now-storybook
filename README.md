# template-now-storybook

Inspired by (https://github.com/zeit/now-examples/tree/master/storybook), made more featureful

## Features

+ Babel 7 integration
+ Storybook 5.2.8 for React
+ React Proptypes integration
+ Storybook Docs Addon
+ Eslint Config
+ Stylelint Config
+ Compiles to both cjs and esm for integration into your apps

## Compatibility

Module | Version
React | 16.8
Babel | 7.7.7
Storybook | 5.2.8

This has not been tested on previous versions

## Installation

Clone the template

## Usage

To create new modules in the same coding style

1. Create the module

cd ui/module_group
yo @fwrlines/react-component FancyButton
echo "export { FancyButton } from './FancyButton'" >> ./index.js

2. Create the story

cd src/stories
yo @fwrlines/storybook-story module_group|FancyButton

3. The story automatically appears in the storybook


(bonus) To make things a bit faster ... in you .bashrc or .zshrc

alias comp="yo @fwrlines/react-component"

alias story="yo @fwrlines/storybook-story"
