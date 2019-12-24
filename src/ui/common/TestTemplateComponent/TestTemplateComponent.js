import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.test_template_component" */ './test_template_component.scss')

const main_class = 'test_template_component'

const uselessrule=4444

const TestTemplateComponent = memo(({
  id,
  className='',
  style
}) =>
  <div
    className={
      [
        C.test,
        main_class,
        className
      ].join(' ')
    }
    id={ id }
    style={ style }
  >
    <h2>Welcome to the TestTemplateComponent component</h2>
  </div>
)

/*
TestTemplateComponent.propTypes = {
	id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
*/


export default TestTemplateComponent

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

