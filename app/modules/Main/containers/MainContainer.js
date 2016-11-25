import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mainActionCreators from 'redux/modules/dashboard'

const actionCreators = {
  mainActionCreators
  // ...userActionCreators
}

const MainContainer = React.createClass({

  contextTypes: {
    store: React.PropTypes.object,
    router: React.PropTypes.object
  },

  propTypes: {
    
  },

  render () {
    return (
      <div>Main Container
        { this.props.children }
      </div>
    )
  },
})

function mapStateToProps({main}) {
  return {
    main: main ? main : {}
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(MainContainer)