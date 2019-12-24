import React from 'react'

import { action } from '@storybook/addon-actions'
import { TestTemplateComponent } from 'ui'

export default {
	title: 'TestTemplateComponent',
}

export const Default = () => 
	<TestTemplateComponent></TestTemplateComponent> 

export const Variant = () => 
		<TestTemplateComponent></TestTemplateComponent> 

/*Variant.story = {
		name: 'Variant',
}*/

		/*
    onClick={action('clicked')}
		*/
