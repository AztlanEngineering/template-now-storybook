import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.test_template_component" */ './test_template_component.scss')

const main_class = 'test_template_component'

/**
 * Use `TestTemplateComponent` to highlight key info with a predefined status. Easy peasy!
 */
const TestTemplateComponent = memo(({
  id,
  className='',
  style,
  children,
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
    { children }
  </div>
)

TestTemplateComponent.propTypes = {
  /**
   * Description of prop "id".
   */
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}


export default TestTemplateComponent

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

